import assert from 'node:assert/strict';
import { chromium, expect } from '@playwright/test';
import { preview } from 'astro';

const server = process.env.TEST_ORIGIN ? null : await preview({ server: { host: '127.0.0.1', port: 0 } });
const root = new URL('/ap-micro/', process.env.TEST_ORIGIN ?? 'http://127.0.0.1:' + server.port);
const at = path => new URL(path, root).href;
let browser;

const keyForPart = { A: '1', B: '2', C: '3' };

async function clickWhenReady(page, locator) {
  await page.waitForFunction(() => window.__shooter && performance.now() - window.__shooter.S.shownAt > 400);
  await locator.click();
}

async function advanceTo(page, state) {
  await page.evaluate(target => {
    const game = window.__shooter;
    const reached = () => game.S.screen === target || game.S.phase === target;
    for (let i = 0; i < 240 && !reached(); i++) game.advance(0.05);
    if (!reached()) throw new Error('Expected ' + target + '; reached ' + game.S.screen + '/' + game.S.phase);
  }, state);
}

// Hold the part's number key and step the game until the shot resolves.
async function shoot(page, part, target) {
  return page.evaluate(({ part, key, target }) => {
    const game = window.__shooter;
    const { S } = game;
    const send = type => window.dispatchEvent(new KeyboardEvent(type, { key }));
    send('keydown');
    try {
      for (let i = 0; i < 360 && S.phase !== target; i++) game.advance(0.05);
      if (S.phase !== target) throw new Error('Shot at ' + part + ' did not enter ' + target + ' (phase ' + S.phase + ')');
      return { cleared: S.cleared, feedback: S.feedback?.key, sealed: game.pods.find(pod => pod.key === part).state === 'sealed' };
    } finally {
      send('keyup');
    }
  }, { part, key: keyForPart[part], target });
}

try {
  browser = await chromium.launch(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {});
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  desktop.on('pageerror', error => errors.push(error.message));
  await desktop.goto(root.href);
  await expect(desktop.getByRole('heading', { name: 'AP Microeconomics', exact: true })).toBeVisible();
  await expect(desktop.locator('.unit-card')).toHaveCount(6);
  if (process.env.QA_SCREENSHOTS) await desktop.screenshot({ path: 'local-audit/desktop.png', fullPage: true });
  await desktop.getByRole('link', { name: /Search questions/ }).click();
  const query = desktop.locator('[name=q]');
  await expect(query).toBeVisible();
  await desktop.locator('[name=year]').selectOption('2024');
  await desktop.locator('[name=kind]').selectOption('FRQ');
  await desktop.locator('[name=form]').selectOption('Set 1');
  await query.fill('2024Q1');
  const hits = desktop.locator('[data-filter-item]:visible');
  await expect(hits.first()).toBeVisible();
  const hitText = await hits.allTextContents();
  assert.ok(hitText.every(item => item.includes('2024 FRQ · Set 1 · Q1')), 'Combined search returned an unrelated form or question');
  assert.equal(new URL(desktop.url()).searchParams.get('form'), 'Set 1');
  await desktop.reload();
  await expect(query).toHaveValue('2024Q1');
  await hits.first().locator('.entry-id').click();
  await expect(desktop).toHaveURL(/\/exams\/2024-frq-set-1\/#q1/);
  await expect(desktop.locator(':target')).toBeVisible();
  await expect(desktop.getByRole('link', { name: /Official scoring/ })).toBeVisible();

  await desktop.goto(at('questions/?q=弹性'));
  await expect(desktop.locator('[data-filter-item]:visible').first()).toBeVisible();
  await query.fill('2024Q1');
  await expect(desktop.locator('[data-filter-item][data-question="1"]:visible').first()).toBeVisible();
  await expect(desktop.locator('[data-filter-item]:not([data-question="1"]):visible')).toHaveCount(0);
  await query.fill('zzqq-no-match-zz');
  await expect(desktop.locator('[data-no-results]')).toBeVisible();
  await desktop.locator('[data-clear]').click();
  await expect(query).toHaveValue('');
  await desktop.locator('[data-next]').click();
  await expect(desktop.locator('[data-page-indicator]')).toContainText('Page 2');

  await desktop.goto(at('exams/?year=2023&kind=FRQ&form=Set%202'));
  await expect(desktop.locator('.exam-card:visible')).toHaveCount(1);
  await expect(desktop.locator('.exam-card:visible')).toContainText('2023 FRQ · Set 2');
  assert.deepEqual(errors, [], 'Browser runtime errors on the public index');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto(root.href);
  const horizontalScroll = () => mobile.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(await horizontalScroll(), false, 'Home page overflows on mobile');
  if (process.env.QA_SCREENSHOTS) await mobile.screenshot({ path: 'local-audit/mobile.png', fullPage: true });
  await mobile.goto(at('topics/1.3/'));
  await mobile.locator('.mobile-units summary').tap();
  await expect(mobile.locator('.mobile-units a').first()).toBeVisible();
  await mobile.locator('.mobile-units summary').tap();
  await mobile.getByRole('link', { name: /Play this topic/ }).tap();
  await expect(mobile).toHaveURL(/\/play\/\?topic=1\.3/);
  await expect(mobile.locator('[data-start-section="1"]')).toHaveAttribute('aria-current', 'true');
  await clickWhenReady(mobile, mobile.locator('[data-start-section="1"]'));
  await advanceTo(mobile, 'think');
  assert.equal(await mobile.evaluate(() => window.__shooter.S.ei), 2, 'A topic link should start at that topic');
  await expect(mobile.locator('#q-source')).toContainText('Topic 1.3');
  await expect(mobile.locator('#q-figure')).toBeVisible();
  await expect.poll(() => mobile.locator('#q-figure img').evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
  await expect(mobile.locator('#q-options li')).toHaveCount(3);
  assert.equal(await horizontalScroll(), false, 'Game scene overflows on mobile');
  if (process.env.QA_SCREENSHOTS) await mobile.screenshot({ path: 'local-audit/mobile-game.png', fullPage: true });

  // Play every level of every unit: one wrong shot on the first step, then the right part on each step.
  const data = JSON.parse(await desktop.goto(at('play/')).then(() => desktop.locator('#shooter-data').textContent()));
  assert.equal(data.sections.length, 6);
  let played = 0;
  for (const section of data.sections) {
    await desktop.goto(at('play/?section=' + section.id));
    await expect(desktop.locator('#app')).toHaveAttribute('data-screen', 'intro');
    await clickWhenReady(desktop, desktop.locator('[data-start-section="' + section.id + '"]'));
    for (const [index, level] of section.encounters.entries()) {
      await advanceTo(desktop, 'think');
      await expect(desktop.locator('#q-source')).toContainText('Topic ' + level.id);
      await expect(desktop.locator('#q-figure')).toBeVisible({ visible: Boolean(level.figure) });
      await expect(desktop.locator('#q-grid')).toBeVisible({ visible: Boolean(level.table) });
      if (level.table) await expect(desktop.locator('#q-grid caption')).toContainText(level.table.caption.en);
      for (const [stepIndex, step] of level.steps.entries()) {
        if (stepIndex > 0) await advanceTo(desktop, 'think');
        await expect(desktop.locator('#q-prompt')).toContainText(step.prompt.en.slice(0, 24));
        if (stepIndex === 0) {
          const wrong = ['A', 'B', 'C'].find(key => key !== step.correct);
          const miss = await shoot(desktop, wrong, 'counter');
          assert.equal(miss.feedback, wrong, level.id + ' wrong shot should give feedback');
          assert.equal(miss.sealed, true, level.id + ' wrong part should seal');
          await expect(desktop.locator('#q-feedback')).toHaveAttribute('data-kind', 'wrong');
          await expect(desktop.locator('#q-feedback')).toContainText(step.options[wrong].hint.en.slice(0, 20));
          await advanceTo(desktop, 'think');
        }
        const hit = await shoot(desktop, step.correct, 'stepClear');
        assert.equal(hit.cleared, stepIndex + 1, level.id + ' step ' + (stepIndex + 1) + ' should clear');
      }
      await advanceTo(desktop, 'review');
      await expect(desktop.locator('#rv-steps li')).toHaveCount(3);
      await expect(desktop.locator('#rv-answer')).toContainText('Topic ' + level.id);
      await expect(desktop.locator('#rv-link')).toHaveAttribute('href', '/ap-micro/topics/' + level.id + '/');
      played += 1;
      await clickWhenReady(desktop, desktop.locator('#btn-next'));
      if (index === section.encounters.length - 1) await expect(desktop.locator('#app')).toHaveAttribute('data-screen', 'summary');
    }
    await expect(desktop.locator('#sm-kicker')).toHaveText('Unit ' + section.id + ' cleared');
    await expect(desktop.locator('#sm-list li')).toHaveCount(section.encounters.length);
    await expect(desktop.locator('#sm-link')).toHaveAttribute('href', '/ap-micro/units/' + section.id + '/');
  }
  assert.equal(played, 36);
  assert.deepEqual(errors, [], 'Browser runtime errors in Monster Shooter');
  console.log('Desktop and mobile browser checks passed for search, archives, question links, and all 36 Monster Shooter levels.');
} finally {
  await browser?.close();
  await server?.stop();
}
