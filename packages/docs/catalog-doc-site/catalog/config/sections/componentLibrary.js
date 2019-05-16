import { pageLoader } from 'catalog';
import Tag from '@datacamp/waffles-tag';

export default {
  title: 'Component Library',
  pages: [
    {
      path: '/component-library',
      title: 'Introduction',
      content: pageLoader(() =>
        import('../../pages/componentLibrary/index.js')
      ),
    },
    {
      path: '/component-library/tokens',
      title: 'Tokens',
      content: pageLoader(() =>
        import('../../pages/componentLibrary/tokens.js')
      ),
    },
    {
      path: '/component-library/tag',
      title: 'Tag',
      content: pageLoader(() => import('../../pages/componentLibrary/tag.js')),
      imports: { Tag },
    },
  ],
};
