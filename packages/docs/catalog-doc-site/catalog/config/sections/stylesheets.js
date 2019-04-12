import { pageLoader } from 'catalog';
import Tag from '@datacamp/waffles-tag';

const utilityClassPages = [
  {
    path: '/stylesheets/utility-classes/background',
    title: 'Background',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/background.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/border',
    title: 'Border',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/border.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/border-radius',
    title: 'Border Radius',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/border-radius.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/box-shadow',
    title: 'Box Shadow',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/box-shadow.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/color',
    title: 'Color',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/color.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/cursor',
    title: 'Cursor',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/cursor.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/display',
    title: 'Display',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/display.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/flexbox-containers',
    title: 'Flexbox Containers',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/flexbox-containers.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/flexbox-items',
    title: 'Flexbox Items',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/flexbox-items.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/font',
    title: 'Font',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/font.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/height',
    title: 'Height',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/height.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/letter-spacing',
    title: 'Letter Spacing',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/letter-spacing.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/line-height',
    title: 'Line Height',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/line-height.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/list',
    title: 'List',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/list.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/margin',
    title: 'Margin',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/margin.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/max-height',
    title: 'Max Height',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/max-height.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/max-width',
    title: 'Max Width',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/max-width.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/min-height',
    title: 'Min Height',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/min-height.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/min-width',
    title: 'Min Width',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/min-width.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/opacity',
    title: 'Opacity',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/opacity.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/overflow',
    title: 'Overflow',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/overflow.js')
    ),
  },
  {
    path: '/stylesheets/utility-classes/word-break',
    title: 'Word Break',
    hideFromMenu: true,
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/word-break.js')
    ),
  },
];

const pages = [
  {
    path: '/stylesheets',
    title: 'Introduction',
    content: pageLoader(() => import('../../pages/stylesheets/index.js')),
  },
  {
    path: '/stylesheets/utility-classes',
    title: 'Utility Classes',
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes.js')
    ),
  },
  {
    path: '/stylesheets/button',
    title: 'Button',
    content: pageLoader(() => import('../../pages/stylesheets/button.md')),
  },
  {
    path: '/stylesheets/card',
    title: 'Card',
    content: pageLoader(() => import('../../pages/stylesheets/card.md')),
  },
  {
    path: '/stylesheets/count-indicator',
    title: 'Count Indicator',
    content: pageLoader(() =>
      import('../../pages/stylesheets/count-indicator.md')
    ),
  },
  {
    path: '/stylesheets/dropdown',
    title: 'Dropdown',
    content: pageLoader(() => import('../../pages/stylesheets/dropdown.md')),
  },
  {
    path: '/stylesheets/flash-banner',
    title: 'Flash Banner',
    content: pageLoader(() =>
      import('../../pages/stylesheets/flash-banner.md')
    ),
  },
  {
    path: '/stylesheets/icon',
    title: 'Icon',
    content: pageLoader(() => import('../../pages/stylesheets/icon.js')),
  },
  {
    path: '/stylesheets/pagination',
    title: 'Pagination',
    content: pageLoader(() => import('../../pages/stylesheets/pagination.md')),
  },
  {
    path: '/stylesheets/popover',
    title: 'Popover',
    content: pageLoader(() => import('../../pages/stylesheets/popover.md')),
  },
  {
    path: '/stylesheets/progress-bar',
    title: 'Progress Bar',
    content: pageLoader(() =>
      import('../../pages/stylesheets/progress-bar.md')
    ),
  },
  {
    path: '/stylesheets/tabbed-nav',
    title: 'Tabbed Nav',
    content: pageLoader(() => import('../../pages/stylesheets/tabbed-nav.md')),
  },
  {
    path: '/stylesheets/table',
    title: 'Table',
    content: pageLoader(() => import('../../pages/stylesheets/table.md')),
  },
  {
    path: '/stylesheets/tabs',
    title: 'Tabs',
    content: pageLoader(() => import('../../pages/stylesheets/tabs.md')),
  },
  {
    path: '/stylesheets/tag',
    title: 'Tag',
    content: pageLoader(() => import('../../pages/stylesheets/tag.md')),
    imports: { Tag },
  },
];

const combinedPages = pages.concat(utilityClassPages);

export default {
  title: 'Stylesheets',
  pages: combinedPages,
};
