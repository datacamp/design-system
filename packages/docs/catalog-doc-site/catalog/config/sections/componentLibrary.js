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
  ],
};
