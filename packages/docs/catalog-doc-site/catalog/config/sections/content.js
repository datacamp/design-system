import { pageLoader } from 'catalog';

const pages = [
  {
    content: pageLoader(() => import('../../pages/content/grammar.md')),
    path: '/content/grammar',
    title: 'Grammar',
  },
  {
    content: pageLoader(() =>
      import('../../pages/content/course-naming-guidelines.md')
    ),
    path: '/content/course-naming-guidelines',
    title: 'Course Naming',
  },
];

export default {
  pages,
  title: 'Content',
};
