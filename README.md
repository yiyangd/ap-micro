# STEMHUB · AP Microeconomics

[Open the site](https://yiyangd.github.io/ap-micro/) to browse the bilingual AP Microeconomics question index and play Monster Shooter, a 36-level game with one level per topic.

## Contents

- The course index follows the six units and 36 topics in the [College Board framework](https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description.pdf).
- Question entries show a year, form or set, question number, source page, and an independently worded description of the economics skill. A free-response question can have multiple entries, one for each indexed part.
- The archive distinguishes past exams, practice forms, and forms whose provenance needs review. A paper or scoring link appears when it resolves to the matching College Board document. The [AP Central FRQ archive](https://apcentral.collegeboard.org/courses/ap-microeconomics/exam/past-exam-questions) also lists the exams currently released by College Board.
- Monster Shooter uses the game engine from the [STEMHUB AMC 8 workbook](https://yiyangd.github.io/AMC8/play/). Each unit is a section, and each topic is a level of three steps with hints for every wrong answer. The final level of each unit is its boss. After every answer, right or wrong, the game pauses on an explanation: why that choice is wrong or right, and a "What this tests" line naming the concept. The player continues with the button, Enter, or a click, so guessing A, B, then C is never faster than reading. Scenarios, numbers, tables and graphs are original; none reproduces an exam question. A topic page links to its level (`play/?topic=2.3`), and a unit page links to its section (`play/?section=2`).
- Level content lives in `src/data/game-unit1.ts` to `game-unit6.ts` and uses the `Mission` type in `src/data/game-types.ts`. Each step needs a `concept`, and each wrong choice needs a hint that explains the mistake; `npm run validate` checks both. `src/data/shooter.ts` converts it for the engine in `public/game/monster-shooter.js`. Graphs are SVG files in `public/game/figures/`. Tables with four or more rows display sideways.

## Build and verify

Use Node.js 24. On Windows, run `npm run dev` from the repository root; the source PDFs in this folder are ignored by Git.

~~~sh
npm ci
npm run dev
npm run check
npm run build
npm run validate
npx playwright install chromium
npm run test:browser
~~~

The local development server uses the `/ap-micro/` base path. The browser checks start an ephemeral preview of the build and play every Monster Shooter level. Set `TEST_ORIGIN` to test a deployment or `PLAYWRIGHT_CHANNEL=msedge` to use an installed copy of Edge.

The catalog snapshots in `src/data/` are the inputs to the static build. For updates, check numbering, PDF pages, duplicate forms, and classifications against their sources before editing the snapshots. Keep source PDFs, scans, OCR, and working audit files in local storage.

Push to `main` to deploy with the GitHub Actions workflow. In repository settings, select GitHub Actions as the GitHub Pages publishing source.
