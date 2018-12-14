import { pageLoader } from 'catalog';

// design: typography, colors, etc.
const design = {
  title: 'Design',
  pages: [
    {
      path: '/design',
      title: 'Intro',
      content: pageLoader(() => import('../pages/design/index.md'))
    },
    {
      path: '/design/text',
      title: 'Text',
      content: pageLoader(() => import('../pages/design/text.md'))
    },
    {
      path: '/design/headings',
      title: 'Headings',
      content: pageLoader(() => import('../pages/design/headings.md'))
    },
    {
      path: '/design/links',
      title: 'Links',
      content: pageLoader(() => import('../pages/design/links.md'))
    },
    {
      path: '/design/form-inputs',
      title: 'Form Inputs',
      content: pageLoader(() => import('../pages/design/form-inputs.md'))
    }
  ]
}

// design: typography, colors, etc.
const designUtilities = {
  title: 'Design Utilities',
  pages: [
    {
      path: '/design-utilities',
      title: 'Intro',
      content: pageLoader(() => import('../pages/design-utilities/index.md'))
    },
    {
      path: '/design-utilities/background',
      title: 'Background',
      content: pageLoader(() => import('../pages/design-utilities/background.md'))
    }
  ]
}

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
      title: 'Components',
      content: pageLoader(() => import('../pages/components/index.md')),
    },
  ],
};

// patterns: Design patterns using components and utility classes.
const patterns = {
  title: 'Patterns',
  pages: [
    {
      path: '/patterns',
      title: 'Intro',
      content: pageLoader(() => import('../pages/patterns/index.md')),
    },
    {
      path: '/patterns/bucket',
      title: 'Bucket',
      content: pageLoader(() => import('../pages/patterns/bucket.md')),
    },
    {
      path: '/patterns/edge-to-edge',
      title: 'Edge-to-Edge',
      content: pageLoader(() => import('../pages/patterns/edge-to-edge.md')),
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
  content,
  components,
  patterns,
];

export default pages;
