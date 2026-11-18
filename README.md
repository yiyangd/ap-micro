# STEMHUB · AP Microeconomics

[Open the site](https://yiyangd.github.io/ap-micro/) to browse the bilingual AP Microeconomics question index and play the six Unit 1 Market Missions.

## Contents

- The course index follows the six units and 36 topics in the [College Board framework](https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description.pdf).
- Question entries show a year, form or set, question number, source page, and an independently worded description of the economics skill. A free-response question can have multiple entries, one for each indexed part.
- The archive distinguishes past exams, practice forms, and forms whose provenance needs review. A paper or scoring link appears when it resolves to the matching College Board document. The [AP Central FRQ archive](https://apcentral.collegeboard.org/courses/ap-microeconomics/exam/past-exam-questions) also lists the exams currently released by College Board.
- Market Missions uses original scenarios, graphs, tables, choices, and feedback. The browser stores cleared levels locally.

## Build and verify

Use Node.js 24.

~~~sh
npm ci
npm run dev
npm run check
npm run build
npm run validate
npx playwright install chromium
npm run test:browser
~~~

The local development server uses the `/ap-micro/` base path. The browser checks start an ephemeral preview of the build. Set `TEST_ORIGIN` to test a deployment or `PLAYWRIGHT_CHANNEL=msedge` to use an installed copy of Edge.

The catalog snapshots in `src/data/` are the inputs to the static build. For updates, check numbering, PDF pages, duplicate forms, and classifications against their sources before editing the snapshots. Keep source PDFs, scans, OCR, and working audit files in local storage.

Push to `main` to deploy with the GitHub Actions workflow. In repository settings, select GitHub Actions as the GitHub Pages publishing source.
