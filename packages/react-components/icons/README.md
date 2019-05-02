# Icons

Usage documentation available at [waffles.datacamp.com/component-library/icons](https://waffles.datacamp.com/component-library/icons).

This package contains the all the source svg icons as well as the build process to generate react components and sprite files. This build process is handled using gulp.

## React Components
React components are generated in multiple steps:

- SVGs are loaded from the `/brandIcons`, `/invertedIcons` and `/standardIcons` directories.
- Components are created in the `/build` directory using [SVGR](https://www.smooth-code.com/open-source/svgr/) and a custom typescript template.
- An `index.ts` file is generated within `/build` to expose all the components.
- These typescript files are transpiled to javascript and typings files in the `/lib` directory to be exposed.

## SVG Sprites
SVG Sprites are also generated in multiple steps:

- SVGs are loaded from the `/brandIcons`, `/invertedIcons` and `/standardIcons` directories.
- Sprites of various types are created in the `/sprites` directory using [svg-sprite](https://github.com/jkphl/svg-sprite)
