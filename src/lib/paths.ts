export const sitePath = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

export const unitPath = (id: number) => sitePath(`units/${id}/`);
export const topicPath = (id: string) => sitePath(`topics/${id}/`);
export const examPath = (id: string) => sitePath(`exams/${id}/`);
export const playPath = (topic?: string) => sitePath(topic ? `play/?topic=${topic}` : 'play/');

export const official = {
  course: 'https://apcentral.collegeboard.org/courses/ap-microeconomics',
  framework: 'https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description.pdf',
  archive: 'https://apcentral.collegeboard.org/courses/ap-microeconomics/exam/past-exam-questions',
  classroom: 'https://apclassroom.collegeboard.org/',
};
