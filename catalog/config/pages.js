import { pageLoader } from 'catalog';

// design: typography, colors, etc.
const design = {
  title: 'Design',
  pages: [
    {
      path: '/design',
      title: 'Intro',
      content: pageLoader(() => import('../pages/design/index.js')),
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
      content: pageLoader(() => import('../pages/design-utilities/index.js')),
    },
    {
      path: '/design-utilities/background',
      title: 'Background',
      content: pageLoader(() =>
        import('../pages/design-utilities/background.js')
      ),
    },
    {
      path: '/design-utilities/border',
      title: 'Border',
      content: pageLoader(() =>
        import('../pages/design-utilities/border.js')
      ),
    },
    {
      path: '/design-utilities/border-radius',
      title: 'Border Radius',
      content: pageLoader(() =>
        import('../pages/design-utilities/border-radius.js')
      ),
    },
    {
      path: '/design-utilities/box-shadow',
      title: 'Box Shadow',
      content: pageLoader(() =>
        import('../pages/design-utilities/box-shadow.js')
      ),
    },
    {
      path: '/design-utilities/color',
      title: 'Color',
      content: pageLoader(() =>
        import('../pages/design-utilities/color.js')
      ),
    },
    {
      path: '/design-utilities/cursor',
      title: 'Cursor',
      content: pageLoader(() =>
        import('../pages/design-utilities/cursor.js')
      ),
    },
    {
      path: '/design-utilities/display',
      title: 'Display',
      content: pageLoader(() =>
        import('../pages/design-utilities/display.js')
      ),
    },
    {
      path: '/design-utilities/flexbox-containers',
      title: 'Flexbox Containers',
      content: pageLoader(() =>
        import('../pages/design-utilities/flexbox-containers.js')
      ),
    },
    {
      path: '/design-utilities/flexbox-items',
      title: 'Flexbox Items',
      content: pageLoader(() =>
        import('../pages/design-utilities/flexbox-items.js')
      ),
    },
    {
      path: '/design-utilities/font',
      title: 'Font',
      content: pageLoader(() =>
        import('../pages/design-utilities/font.js')
      ),
    },
    {
      path: '/design-utilities/height',
      title: 'Height',
      content: pageLoader(() =>
        import('../pages/design-utilities/height.js')
      ),
    },
    {
      path: '/design-utilities/letter-spacing',
      title: 'Letter Spacing',
      content: pageLoader(() =>
        import('../pages/design-utilities/letter-spacing.js')
      ),
    },
    {
      path: '/design-utilities/line-height',
      title: 'Line Height',
      content: pageLoader(() =>
        import('../pages/design-utilities/line-height.js')
      ),
    },
    {
      path: '/design-utilities/list',
      title: 'List',
      content: pageLoader(() =>
        import('../pages/design-utilities/list.js')
      ),
    },
    {
      path: '/design-utilities/margin',
      title: 'Margin',
      content: pageLoader(() =>
        import('../pages/design-utilities/margin.js')
      ),
    },
    {
      path: '/design-utilities/max-height',
      title: 'Max Height',
      content: pageLoader(() =>
        import('../pages/design-utilities/max-height.js')
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
      content: pageLoader(() => import('../pages/components/index.js')),
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
      content: pageLoader(() => import('../pages/components/icon.js')),
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
      path: '/components/progress-bar',
      title: 'Progress Bar',
      content: pageLoader(() => import('../pages/components/progress-bar.md')),
    },
    {
      path: '/components/tabbed-nav',
      title: 'Tabbed Nav',
      content: pageLoader(() => import('../pages/components/tabbed-nav.md')),
    },
    {
      path: '/components/table',
      title: 'Table',
      content: pageLoader(() => import('../pages/components/table.md')),
    },
    {
      path: '/components/tabs',
      title: 'Tabs',
      content: pageLoader(() => import('../pages/components/tabs.md')),
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
    content: pageLoader(() =>
      import('../pages/index.js')
    ),
  },
  design,
  designUtilities,
  components,
  patterns,
  content,
];

export default pages;
