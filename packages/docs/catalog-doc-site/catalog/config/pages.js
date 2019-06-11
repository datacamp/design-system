import { pageLoader } from 'catalog';

import articlesPages from './sections/articles';
import componentLibrarySection from './sections/componentLibrary';
import contentSection from './sections/content';
import designSection from './sections/design';
import stylesheetSection from './sections/stylesheets';

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
