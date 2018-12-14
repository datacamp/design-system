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
      title: 'Patterns',
      content: pageLoader(() => import('../pages/patterns/index.md')),
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
  content,
  components,
  patterns,
];

export default pages;
