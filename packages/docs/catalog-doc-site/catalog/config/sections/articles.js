import { pageLoader } from 'catalog';

export default [
  {
    content: pageLoader(() => import('../../pages/articles/overview.js')),
    hideFromMenu: false,
    path: '/articles',
    title: 'Articles',
  },
  {
    content: pageLoader(() => import('../../pages/articles/01-tokens.js')),
    hideFromMenu: true,
    path: '/articles/01-tokens',
    title: 'Future of Tokens',
  },
  {
    content: pageLoader(() =>
      import('../../pages/articles/02-icon-migration.js'),
    ),
    hideFromMenu: true,
    path: '/articles/02-icon-migration',
    title: 'Migrating Icons',
  },
];
