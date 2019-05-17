import { pageLoader } from 'catalog';

export default [
  {
    path: '/articles/01-tokens',
    title: 'Future of Tokens',
    content: pageLoader(() => import('../../pages/articles/01-tokens.js')),
    hideFromMenu: true,
  },
];
