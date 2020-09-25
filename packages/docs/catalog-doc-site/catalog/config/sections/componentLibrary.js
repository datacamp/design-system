import { pageLoader } from 'catalog';

export default {
  pages: [
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/index.js'),
      ),
      path: '/component-library',
      title: 'Introduction',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/tokens.js'),
      ),
      path: '/component-library/tokens',
      title: 'Tokens',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/assets.js'),
      ),
      path: '/component-library/assets',
      title: 'Assets',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/button.js'),
      ),
      path: '/component-library/button',
      title: 'Button',
    },
    {
      content: pageLoader(() => import('../../pages/componentLibrary/card.js')),
      path: '/component-library/card',
      title: 'Card',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/formElements.js'),
      ),
      path: '/component-library/form-elements',
      title: 'Form Elements',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/icons.js'),
      ),
      path: '/component-library/icons',
      title: 'Icons',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/loaders.js'),
      ),
      path: '/component-library/loaders',
      title: 'Loaders',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/markdown.js'),
      ),
      path: '/component-library/markdown',
      title: 'Markdown',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/modals.js'),
      ),
      path: '/component-library/modals',
      title: 'Modals',
    },
    {
      content: pageLoader(() => import('../../pages/componentLibrary/text.js')),
      path: '/component-library/text',
      title: 'Text',
    },
    {
      content: pageLoader(() =>
        import('../../pages/componentLibrary/toast.js'),
      ),
      path: '/component-library/toast',
      title: 'Toast',
    },
  ],
  title: 'Component Library',
};
