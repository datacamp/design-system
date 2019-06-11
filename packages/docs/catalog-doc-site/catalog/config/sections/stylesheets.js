import Tag from '@datacamp/waffles-tag';
import { pageLoader } from 'catalog';

const utilityClassPages = [
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/background.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/background',
    title: 'Background',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/border.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/border',
    title: 'Border',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/border-radius.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/border-radius',
    title: 'Border Radius',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/box-shadow.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/box-shadow',
    title: 'Box Shadow',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/color.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/color',
    title: 'Color',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/cursor.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/cursor',
    title: 'Cursor',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/display.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/display',
    title: 'Display',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/flexbox-containers.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/flexbox-containers',
    title: 'Flexbox Containers',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/flexbox-items.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/flexbox-items',
    title: 'Flexbox Items',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/font.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/font',
    title: 'Font',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/height.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/height',
    title: 'Height',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/letter-spacing.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/letter-spacing',
    title: 'Letter Spacing',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/line-height.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/line-height',
    title: 'Line Height',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/list.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/list',
    title: 'List',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/margin.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/margin',
    title: 'Margin',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/max-height.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/max-height',
    title: 'Max Height',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/max-width.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/max-width',
    title: 'Max Width',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/min-height.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/min-height',
    title: 'Min Height',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/min-width.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/min-width',
    title: 'Min Width',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/opacity.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/opacity',
    title: 'Opacity',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/overflow.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/overflow',
    title: 'Overflow',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes/word-break.js')
    ),
    hideFromMenu: true,
    path: '/stylesheets/utility-classes/word-break',
    title: 'Word Break',
  },
];

const pages = [
  {
    content: pageLoader(() => import('../../pages/stylesheets/index.js')),
    path: '/stylesheets',
    title: 'Introduction',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/utility-classes.js')
    ),
    path: '/stylesheets/utility-classes',
    title: 'Utility Classes',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/button.md')),
    path: '/stylesheets/button',
    title: 'Button',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/card.md')),
    path: '/stylesheets/card',
    title: 'Card',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/count-indicator.md')
    ),
    path: '/stylesheets/count-indicator',
    title: 'Count Indicator',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/dropdown.md')),
    path: '/stylesheets/dropdown',
    title: 'Dropdown',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/flash-banner.md')
    ),
    path: '/stylesheets/flash-banner',
    title: 'Flash Banner',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/icon.js')),
    path: '/stylesheets/icon',
    title: 'Icon',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/pagination.md')),
    path: '/stylesheets/pagination',
    title: 'Pagination',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/popover.md')),
    path: '/stylesheets/popover',
    title: 'Popover',
  },
  {
    content: pageLoader(() =>
      import('../../pages/stylesheets/progress-bar.md')
    ),
    path: '/stylesheets/progress-bar',
    title: 'Progress Bar',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/tabbed-nav.md')),
    path: '/stylesheets/tabbed-nav',
    title: 'Tabbed Nav',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/table.md')),
    path: '/stylesheets/table',
    title: 'Table',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/tabs.md')),
    path: '/stylesheets/tabs',
    title: 'Tabs',
  },
  {
    content: pageLoader(() => import('../../pages/stylesheets/tag.md')),
    imports: { Tag },
    path: '/stylesheets/tag',
    title: 'Tag',
  },
];

const combinedPages = pages.concat(utilityClassPages);

export default {
  pages: combinedPages,
  title: 'Stylesheets',
};
