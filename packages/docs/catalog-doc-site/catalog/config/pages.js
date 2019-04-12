import { pageLoader } from 'catalog';
import stylesheetSection from './sections/stylesheets';

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../pages/index.js')),
  },
  stylesheetSection,
];

export default pages;
