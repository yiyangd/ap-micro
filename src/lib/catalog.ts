import curriculum from '../data/curriculum.json';
import frq from '../data/frq.json';
import mcq from '../data/mcq.json';
import { examPath, topicPath } from './paths';

export interface Bilingual {
  en: string;
  zh: string;
}

export interface Classification {
  topic: string;
  secondary?: string[];
  summary: Bilingual;
}

export interface ExamPart extends Classification {
  label: string;
  page: number;
}

export interface ExamQuestion extends Partial<Classification> {
  number: number;
  page: number;
  parts?: ExamPart[];
}

export interface Exam {
  id: string;
  year: number;
  form: string;
  kind: 'FRQ' | 'MCQ';
  category: 'exam' | 'practice' | 'unverified';
  paperUrl?: string;
  scoringUrl?: string;
  note?: string;
  questions: ExamQuestion[];
}

export interface Entry extends Classification {
  exam: Exam;
  number: number;
  part: string;
  page: number;
  anchor: string;
}

export const units = curriculum.map(unit => ({
  ...unit,
  topics: unit.topics.map(([id, en, zh]) => ({ id, en, zh, unitId: unit.id })),
}));
export const topics = units.flatMap(unit => unit.topics);
export const topicsById = new Map(topics.map(topic => [topic.id, topic]));

export const exams = ([...frq, ...mcq] as Exam[]).sort((a, b) =>
  b.year - a.year || a.kind.localeCompare(b.kind) || a.form.localeCompare(b.form, 'en', { numeric: true }));

export function entriesForQuestion(exam: Exam, question: ExamQuestion): Entry[] {
  const base = { exam, number: question.number };
  const anchor = `q${question.number}`;
  if (question.parts?.length) {
    return question.parts.map(({ label, ...part }) => ({
      ...base,
      ...part,
      part: label,
      anchor: anchor + '-' + (label.match(/[a-z]+|\d+/gi) ?? []).join('-').toLowerCase(),
    }));
  }
  const { topic, summary, secondary, page } = question;
  return topic && summary ? [{ ...base, topic, summary, secondary, page, part: '', anchor }] : [];
}

export const entries = exams.flatMap(exam => exam.questions.flatMap(question => entriesForQuestion(exam, question)));
export const entryPath = (entry: Entry) => `${examPath(entry.exam.id)}#${entry.anchor}`;
export const entriesForTopic = (id: string) =>
  entries.filter(entry => entry.topic === id || entry.secondary?.includes(id));
export const primaryCount = (ids: string[]) => entries.filter(entry => ids.includes(entry.topic)).length;
export const verifiedExams = exams.filter(exam => exam.category === 'exam' && exam.questions.length);
export const releasedYears = [...new Set(verifiedExams.map(exam => exam.year))];
export const mcqCount = entries.filter(entry => entry.exam.kind === 'MCQ').length;
export const frqCount = entries.filter(entry => entry.exam.kind === 'FRQ').length;

export const categoryLabels: Record<Exam['category'], Bilingual> = {
  exam: { en: 'Past exam', zh: '历年真题' },
  practice: { en: 'Practice', zh: '样题／练习卷' },
  unverified: { en: 'Source pending', zh: '来源待核' },
};

export const kindLabels: Record<Exam['kind'], Bilingual> = {
  FRQ: { en: 'Free response', zh: '简答题' },
  MCQ: { en: 'Multiple choice', zh: '选择题' },
};

export function topicLinks(ids: string[]) {
  return ids.map(id => ({ ...topicsById.get(id), id, href: topicPath(id) }));
}

export function sourcePage(url: string, page: number) {
  const link = new URL(url);
  if (link.pathname.toLowerCase().endsWith('.pdf')) link.hash = `page=${page}`;
  return link.href;
}
