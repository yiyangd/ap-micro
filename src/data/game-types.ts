// Shared shape of a Monster Shooter level. One level per AP Microeconomics topic.
// Every scenario, number and figure is original; none reproduces an exam question.

export type Bilingual = { en: string; zh: string };

export type Choice = { text: Bilingual; hint?: Bilingual };

export type Step = {
  prompt: Bilingual;
  choices: readonly [Choice, Choice, Choice];
  correct: 0 | 1 | 2;
  explanation: Bilingual;
  /** Short line shown under the scenario once the step is cleared. Defaults to the correct choice. */
  takeaway?: Bilingual;
};

export type DataTable = {
  caption: Bilingual;
  columns: readonly Bilingual[];
  rows: readonly (readonly Bilingual[])[];
  /** Render the first cell of each row as a row header (payoff matrices, producer names). */
  rowHeaders?: boolean;
};

export type Figure = {
  /** File name under public/game/figures/. */
  file: string;
  description: Bilingual;
};

export type Mission = {
  id: string;
  title: Bilingual;
  topic: Bilingual;
  scenario: Bilingual;
  table?: DataTable;
  figure?: Figure;
  steps: readonly [Step, Step, Step];
};

export const text = (en: string, zh = en): Bilingual => ({ en, zh });
export const answer = (en: string, zh: string): Choice => ({ text: text(en, zh) });
export const distractor = (en: string, zh: string, hintEn: string, hintZh: string): Choice => ({
  text: text(en, zh),
  hint: text(hintEn, hintZh),
});
