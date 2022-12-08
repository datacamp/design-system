> :warning: This version of Waffles Design System was deprecated at the end of **2022**. It's [main repository](https://github.com/datacamp/design-system) is archived. Please migrate your app to the [New Waffles](https://waffles.datacamp.com/).

This repository holds all of the code for the waffles design system. This includes but is not limited to the documentation site, design tokens and a react component library. Full details on usage can be found on [old-waffles.datacamp.com](https://old-waffles.datacamp.com).

## Running Locally

Waffles uses Yarn and Lerna to manage dependencies. Follow the following steps to work with the code on a local machine:

- Clone the repository
- Execute `yarn install` in the root directory
- Execute `yarn bootstrap` to install and link all subdependencies

In order to view and work with components locally, check out the [storybook package](https://github.com/datacamp-engineering/design-system/tree/master/packages/docs/storybook).

## Repository Structure

This repository is a mono-repo powered by lerna. All the source code can be found in the `/packages` directory. This is split into 3 directories to organise different types of packages:

- **docs** contains all packages relating to documentation
- **other** contains published packages that do are neither _react-components_ or _stylesheets_
- **react-components** contains styled react components
- **stylesheets** contains _scss_ stylesheets
- **tools** contains private packages that are used within this repo as dev dependencies. They are not published to the registry.

This separation is purely organisational, and does not affect the contents of each package. Every `package.json` should represent its dependencies as if they will be installed from the registry instead of as relative file paths. Lerna will link these packages locally when running the `bootstrap` command. Check the Readme files in each directory for more information.

## Contributing

For guidelines around ci, deployment and anything else you may need to contribute to this project, check out the [contribution guidelines](https://github.com/datacamp-engineering/design-system/blob/master/CONTRIBUTING.md)
