import { pageLoader } from 'catalog';

export default {
  pages: [
    {
      content: pageLoader(() => import('../../pages/design/icons.js')),
      path: '/design/icons',
      title: 'Icons',
    },
    {
      content: pageLoader(() => import('../../pages/design/logo.js')),
      path: '/design/logo',
      title: 'Logo',
    },
  ],
  title: 'Design',
};
