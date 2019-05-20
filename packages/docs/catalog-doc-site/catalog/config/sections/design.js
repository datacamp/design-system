import { pageLoader } from 'catalog';

export default {
  title: 'Design',
  pages: [
    {
      path: '/design/icons',
      title: 'Icons',
      content: pageLoader(() => import('../../pages/design/icons.js')),
    },
    {
      path: '/design/logo',
      title: 'Logo',
      content: pageLoader(() => import('../../pages/design/logo.js')),
    },
  ],
};
