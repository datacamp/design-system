import { pageLoader } from 'catalog';

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
      path: '/component-library/icons',
      title: 'Icons',
      content: pageLoader(() =>
        import('../../pages/componentLibrary/icons.js')
      ),
    },
    {
      path: '/component-library/tag',
      title: 'Tag',
      content: pageLoader(() => import('../../pages/componentLibrary/tag.js')),
    },
  ],
};
