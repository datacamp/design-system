import { pageLoader } from 'catalog';

const pages = [
  {
    path: '/content/grammar',
    title: 'Grammar',
    content: pageLoader(() => import('../../pages/content/grammar.md')),
  },
  {
    path: '/content/messaging',
    title: 'Messaging',
    content: pageLoader(() => import('../../pages/content/messaging.md')),
  },
];

export default {
  title: 'Content',
  pages,
};
