import { pageLoader } from 'catalog';

export default [
  {
    content: pageLoader(() => import('../../pages/articles/01-tokens.js')),
    hideFromMenu: true,
    path: '/articles/01-tokens',
    title: 'Future of Tokens',
  },
];
