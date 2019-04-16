import { pageLoader } from 'catalog';
import stylesheetSection from './sections/stylesheets';
import contentSection from './sections/content';

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../pages/index.js')),
  },
  contentSection,
  stylesheetSection,
];

export default pages;
