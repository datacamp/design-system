# Tokens

Usage documentation available at [waffles.datacamp.com/component-library/tokens](https://waffles.datacamp.com/component-library/tokens).

This package contains the all the design tokens used across waffles, and also the build methods to generate exposed files with these values.

## Structure

All tokens are stored in the `/properties` directory as json files. On build these are deep merged and augmented with the transforms. This full data structure is then passed to the formatters to output different files. This is all orchestrated using [Style Dictionary](https://amzn.github.io/style-dictionary/#/) and controlled with the `build.js` file.

## Outputs
- **core-tokens.json** is the main exported tokens file. It is a flattened and simplified version of the tokens.
- **future-tokens.json** is the full tokens file that will be made the main export in the future. The structure of this file is **not** fixed or documented, so should be used with caution! Within waffles packages this is the version that will be used, since breaking changes can be absorbed. At some point in the future once it is more stable, this will be made the main export of the package.
- **variables.scss** contains the same data as the **core-tokens** file but exposed as scss variables. This is used in to generate utility classes and stylesheets in other packages.
