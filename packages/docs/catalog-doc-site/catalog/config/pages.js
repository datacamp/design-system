import { pageLoader } from 'catalog';
import stylesheetSection from './sections/stylesheets';
import componentLibrarySection from './sections/componentLibrary';
import contentSection from './sections/content';

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../pages/index.js')),
  },
  contentSection,
  componentLibrarySection,
  stylesheetSection,
];

export default pages;
