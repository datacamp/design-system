import { pageLoader } from 'catalog';

export default {
  pages: [
    {
      content: pageLoader(() => import('../../pages/design/colors.js')),
      path: '/design/colors',
      title: 'Colors',
    },
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
    {
      content: pageLoader(() => import('../../pages/design/typography.js')),
      path: '/design/typography',
      title: 'Typography',
    },
  ],
  title: 'Design',
};
