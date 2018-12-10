import { pageLoader } from 'catalog'

// design: typography, colors, etc.
const design = {
  title: 'Design',
  pages: [
    {
      path: '/design',
      title: 'Design',
      content: pageLoader(() => import('../pages/design/index.md'))
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
      content: pageLoader(() => import('../pages/content/index.md'))
    }
  ]
}

// components: DataCamp design system React components.
const components = {
  title: 'Components',
  pages: [
    {
      path: '/components',
      title: 'Components',
      content: pageLoader(() => import('../pages/components/index.md'))
    }
  ]
}

// patterns: Design patterns using components and utility classes.
const patterns = {
  title: 'Patterns',
  pages: [
    {
      path: '/patterns',
      title: 'Patterns',
      content: pageLoader(() => import('../pages/patterns/index.md'))
    }
  ]
}

// export all pages to Catalog.
const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('../pages/index.md'))
  },
  design,
  content,
  components,
  patterns
]

export default pages
