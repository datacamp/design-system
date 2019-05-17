import { pageLoader } from 'catalog';

const pages = [
  {
    path: '/content/grammar',
    title: 'Grammar',
    content: pageLoader(() => import('../../pages/content/grammar.md')),
  },
];

export default {
  title: 'Content',
  pages,
};
