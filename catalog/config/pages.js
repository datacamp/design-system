import { pageLoader } from 'catalog';

// design: typography, colors, etc.
const design = {
  title: 'Design',
  pages: [
    {
      path: '/design',
      title: 'Intro',
      content: pageLoader(() => import('../pages/design/index.md')),
    },
    {
      path: '/design/text',
      title: 'Text',
      content: pageLoader(() => import('../pages/design/text.md')),
    },
    {
      path: '/design/headings',
      title: 'Headings',
      content: pageLoader(() => import('../pages/design/headings.md')),
    },
    {
      path: '/design/links',
      title: 'Links',
      content: pageLoader(() => import('../pages/design/links.md')),
    },
    {
      path: '/design/form-inputs',
      title: 'Form Inputs',
      content: pageLoader(() => import('../pages/design/form-inputs.md')),
    },
  ],
};

// design: typography, colors, etc.
const designUtilities = {
  title: 'Design Utilities',
  pages: [
    {
      path: '/design-utilities',
      title: 'Intro',
      content: pageLoader(() => import('../pages/design-utilities/index.md')),
    },
    {
      path: '/design-utilities/background',
      title: 'Background',
      content: pageLoader(() =>
        import('../pages/design-utilities/background.js')
      ),
    },
  ],
};

// content: tone, voice, etc.
const content = {
  title: 'Content',
  pages: [
    {
      path: '/content',
      title: 'Content',
      content: pageLoader(() => import('../pages/content/index.md')),
    },
  ],
};

// components: DataCamp design system React components.
const components = {
  title: 'Components',
  pages: [
    {
      path: '/components',
      title: 'Intro',
      content: pageLoader(() => import('../pages/components/index.md')),
    },
    {
      path: '/components/button',
      title: 'Button',
      content: pageLoader(() => import('../pages/components/button.md')),
    },
    {
      path: '/components/card',
      title: 'Card',
      content: pageLoader(() => import('../pages/components/card.md')),
    },
    {
      path: '/components/count-indicator',
      title: 'Count Indicator',
      content: pageLoader(() => import('../pages/components/count-indicator.md')),
    },
    {
      path: '/components/dropdown',
      title: 'Dropdown',
      content: pageLoader(() => import('../pages/components/dropdown.md')),
    },
    {
      path: '/components/flash-banner',
      title: 'Flash Banner',
      content: pageLoader(() => import('../pages/components/flash-banner.md')),
    },
    {
      path: '/components/icon',
      title: 'Icon',
      content: pageLoader(() => import('../pages/components/icon.md')),
    },
    {
      path: '/components/pagination',
      title: 'Pagination',
      content: pageLoader(() => import('../pages/components/pagination.md')),
    },
    {
      path: '/components/popover',
      title: 'Popover',
      content: pageLoader(() => import('../pages/components/popover.md')),
    },
    {
      path: '/components/tag',
      title: 'Tag',
      content: pageLoader(() => import('../pages/components/tag.md')),
      imports: { Tag: require('../../packages/tag') },
    },
  ],
};

// recipes: Design patterns using components and utility classes.
const patterns = {
  title: 'Recipes',
  pages: [
    {
      path: '/recipes',
      title: 'Intro',
      content: pageLoader(() => import('../pages/recipes/index.md')),
    },
    {
      path: '/recipes/bucket',
      title: 'Bucket',
      content: pageLoader(() => import('../pages/recipes/bucket.md')),
    },
    {
      path: '/recipes/edge-to-edge',
      title: 'Edge-to-Edge',
      content: pageLoader(() => import('../pages/recipes/edge-to-edge.md')),
    },
  ],
};

// export all pages to Catalog.
const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('../pages/index.md')),
  },
  design,
  designUtilities,
  components,
  patterns,
  content,
];

export default pages;
