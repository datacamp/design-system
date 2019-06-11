import { pageLoader } from 'catalog';

const pages = [
  {
    content: pageLoader(() => import('../../pages/content/grammar.md')),
    path: '/content/grammar',
    title: 'Grammar',
  },
];

export default {
  pages,
  title: 'Content',
};
