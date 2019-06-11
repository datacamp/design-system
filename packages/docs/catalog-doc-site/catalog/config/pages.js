import { pageLoader } from 'catalog';
import stylesheetSection from './sections/stylesheets';
import articlesPages from './sections/articles';
import designSection from './sections/design';
import contentSection from './sections/content';
import componentLibrarySection from './sections/componentLibrary';

const pages = [
  {
    content: pageLoader(() => import('../pages/index.js')),
    path: '/',
    title: 'Introduction',
  },
  ...articlesPages,
  designSection,
  contentSection,
  componentLibrarySection,
  stylesheetSection,
];

export default pages;
