import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const load = async name => JSON.parse(await readFile(new URL('../src/data/' + name, import.meta.url), 'utf8'));
const [units, frq, mcq] = await Promise.all(['curriculum.json', 'frq.json', 'mcq.json'].map(load));
const dist = new URL('../dist/', import.meta.url);
const base = '/ap-micro/';
const origin = 'https://yiyangd.github.io';
const exams = [...frq, ...mcq];
const codes = new Set(units.flatMap(unit => unit.topics.map(topic => topic[0])));
const ids = new Set();
let indexed = 0;

assert.equal(units.length, 6);
assert.equal(codes.size, 36);
assert.ok(frq.length > 0 && mcq.some(exam => exam.questions.length > 0), 'Both catalog sections must have indexed papers');
assert.ok(frq.every(exam => exam.kind === 'FRQ') && mcq.every(exam => exam.kind === 'MCQ'));

function checkClassification(entry, id) {
  assert.ok(codes.has(entry.topic), id + ' has no valid primary topic');
  const tags = [entry.topic, ...(entry.secondary ?? [])];
  assert.equal(new Set(tags).size, tags.length, id + ' repeats a classification');
  assert.ok(tags.every(tag => codes.has(tag)), id + ' has an unknown secondary topic');
  assert.ok(entry.summary?.en?.trim() && /\p{Script=Han}/u.test(entry.summary?.zh ?? ''), id + ' requires an English and Chinese summary');
  assert.ok(Number.isInteger(entry.page) && entry.page >= 1, id + ' has no source locator');
  indexed += 1;
}

const readBuild = path => readFile(new URL(path, dist), 'utf8');
for (const exam of exams) {
  assert.match(exam.id, /^\d{4}-(?:frq|mcq)(?:-[a-z0-9]+)*$/);
  assert.ok(!ids.has(exam.id), exam.id + ' is duplicated');
  ids.add(exam.id);
  assert.equal(exam.id.slice(0, 4), String(exam.year));
  assert.ok(exam.id.startsWith(exam.year + '-' + exam.kind.toLowerCase()));
  assert.ok(exam.form.trim());
  assert.ok(['exam', 'practice', 'unverified'].includes(exam.category));
  assert.ok(exam.questions.length || exam.category === 'unverified', exam.id + ' has an empty question index');
  for (const url of [exam.paperUrl, exam.scoringUrl].filter(Boolean)) {
    const link = new URL(url);
    assert.ok(link.protocol === 'https:' && (link.hostname === 'collegeboard.org' || link.hostname.endsWith('.collegeboard.org')), 'Non-official link: ' + url);
  }
  const html = await readBuild('exams/' + exam.id + '/index.html');
  let lastQuestion = 0;
  for (const question of exam.questions) {
    const anchor = 'q' + question.number;
    const id = exam.id + ' #' + anchor;
    assert.ok(Number.isInteger(question.number) && question.number > lastQuestion, id + ' has duplicate or unsorted question numbers');
    assert.ok(Number.isInteger(question.page) && question.page >= 1, id + ' has no source page');
    assert.ok(html.includes('id="' + anchor + '"'), id + ' is missing its built anchor');
    lastQuestion = question.number;
    if (question.parts?.length) {
      assert.equal(exam.kind, 'FRQ', id + ' unexpectedly contains free-response parts');
      const parts = new Set();
      for (const part of question.parts) {
        assert.match(part.label, /^(?:\([a-z0-9]+\))+$/i, id + ' has a malformed part label');
        const partId = anchor + '-' + part.label.match(/[a-z0-9]+/gi).join('-').toLowerCase();
        assert.ok(!parts.has(partId), id + ' repeats ' + part.label);
        assert.ok(html.includes('id="' + partId + '"'), id + ' is missing part anchor ' + part.label);
        parts.add(partId);
        checkClassification(part, id + part.label);
      }
    } else {
      checkClassification(question, id);
    }
  }
}

for (const unit of units) {
  await readBuild('units/' + unit.id + '/index.html');
  for (const [code] of unit.topics) {
    const html = await readBuild('topics/' + code + '/index.html');
    if (unit.id === 1) assert.ok(html.includes(base + 'play/?topic=' + code), 'Missing game link for ' + code);
  }
}
for (const page of ['index.html', 'questions/index.html', 'exams/index.html', 'play/index.html']) await readBuild(page);

const files = await readdir(dist, { recursive: true, withFileTypes: true });
assert.ok(files.every(file => !/\.(?:pdf|jpe?g|zip)$/i.test(file.name)), 'A raw source or archive entered the public build');
const documents = new Map(await Promise.all(files
  .filter(file => file.isFile() && file.name.endsWith('.html'))
  .map(async file => {
    const absolute = join(file.parentPath, file.name);
    return [absolute, await readFile(absolute, 'utf8')];
  })));
const root = new URL(dist);
const assets = new Map();
for (const [file, html] of documents) {
  assert.ok(!/[a-z]:\\(?:AMC8_Codex|ap-micro)\\|file:\/\/\//i.test(html), file + ' exposes a local path');
  const path = relative(fileURLToPath(dist), file).replaceAll('\\', '/');
  const page = new URL(base + path.replace(/index\.html$/, ''), origin);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:data|mailto):/i.test(value)) continue;
    const url = new URL(value, page);
    if (url.origin !== origin) continue;
    assert.ok(url.pathname.startsWith(base), file + ' has a link outside the app base: ' + value);
    const target = new URL(url.pathname.slice(base.length), root);
    if (url.pathname.endsWith('/')) target.pathname += 'index.html';
    if (!assets.has(target.href)) assets.set(target.href, await stat(target));
    assert.ok(assets.get(target.href).isFile(), 'Invalid build link ' + value);
    if (url.hash && target.pathname.endsWith('.html')) {
      const targetHtml = await readFile(target, 'utf8');
      assert.ok(targetHtml.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), file + ' has an invalid anchor: ' + value);
    }
  }
}

console.log('Validated ' + exams.length + ' forms, ' + indexed + ' question/part entries, ' + codes.size + ' topics, and ' + documents.size + ' HTML pages.');
