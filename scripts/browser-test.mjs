import assert from 'node:assert/strict';
import { chromium, expect } from '@playwright/test';
import { preview } from 'astro';
import { unit1Missions } from '../src/data/unit1-game.ts';

const server = process.env.TEST_ORIGIN ? null : await preview({ server: { host: '127.0.0.1', port: 0 } });
const root = new URL('/ap-micro/', process.env.TEST_ORIGIN ?? 'http://127.0.0.1:' + server.port);
const at = path => new URL(path, root).href;
let browser;

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
  await expect(mobile.locator('#mission-play')).toBeVisible();
  await expect(mobile.locator('#ppc-graph')).toBeVisible();
  assert.equal(await horizontalScroll(), false, 'Game scene overflows on mobile');
  await mobile.locator('[data-choice="0"]').tap();
  await expect(mobile.locator('#arena')).toHaveAttribute('data-outcome', 'miss');
  if (process.env.QA_SCREENSHOTS) await mobile.screenshot({ path: 'local-audit/mobile-game.png', fullPage: true });

  for (const mission of unit1Missions) {
    await desktop.goto(at('play/?topic=' + mission.id));
    await expect(desktop.locator('#mission-play')).toBeVisible();
    for (const [index, step] of mission.steps.entries()) {
      const correct = step.correct;
      if (index === 0) {
        await desktop.locator('[data-choice="' + ((correct + 1) % 3) + '"]').click();
        await expect(desktop.locator('#arena')).toHaveAttribute('data-outcome', 'miss');
        await expect(desktop.locator('#feedback-en')).not.toBeEmpty();
      }
      await desktop.locator('[data-choice]').first().focus();
      await desktop.keyboard.press(String(correct + 1));
      await expect(desktop.locator('#arena')).toHaveAttribute('data-outcome', 'correct');
      await desktop.locator('#continue').click();
    }
    await expect(desktop.locator('#mission-recap')).toBeVisible();
    await expect(desktop.locator('#recap-list li')).toHaveCount(3);
    await expect(desktop.locator('#topic-link')).toHaveAttribute('href', '/ap-micro/topics/' + mission.id + '/');
    await desktop.locator('#replay').click();
    await expect(desktop.locator('#arena')).toHaveAttribute('data-outcome', 'ready');
  }
  assert.deepEqual(errors, [], 'Browser runtime errors in Unit 1');
  console.log('Desktop and mobile browser checks passed for search, archives, question links, and all six Unit 1 missions.');
} finally {
  await browser?.close();
  await server?.stop();
}
