import { pageLoader } from 'catalog';
import stylesheetSection from './sections/stylesheets';
import articlesPages from './sections/articles';
import designSection from './sections/design';
import contentSection from './sections/content';
import componentLibrarySection from './sections/componentLibrary';

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../pages/index.js')),
  },
  ...articlesPages,
  designSection,
  contentSection,
  componentLibrarySection,
  stylesheetSection,
];

export default pages;
