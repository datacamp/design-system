import { pageLoader } from 'catalog';

export default {
  title: 'Design',
  pages: [
    {
      path: '/design/logo',
      title: 'Logo',
      content: pageLoader(() => import('../../pages/design/logo.js')),
    },
  ],
};
