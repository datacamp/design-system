import { pageLoader } from 'catalog';

export default {
  pages: [
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/index.js')
      ),
      path: '/component-library',
      title: 'Introduction',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/tokens.js')
      ),
      path: '/component-library/tokens',
      title: 'Tokens',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/icons.js')
      ),
      path: '/component-library/icons',
      title: 'Icons',
    },
    {
      content: pageLoader(() => import('../../pages/componentLibrary/tag.js')),
      path: '/component-library/tag',
      title: 'Tag',
    },
  ],
  title: 'Component Library',
};
