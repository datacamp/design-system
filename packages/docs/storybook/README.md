# Waffles Storybook
The waffles storybook provides a way to work with react components locally.

## Running Locally
It's important to have the full waffles ecosystem linked up locally. The instructions for this can be found on [the readme for the repository](https://github.com/datacamp-engineering/design-system).

Within this directory run `yarn start` to run the storybook. This will watch for changes in the *stories* directory.

**important note**: In order to be agnostic to the internals of the components, the storybook uses the built version of packages in the same way as a consumer application will. This means that components should be rebuilt for the changes to propogate into the stories. The *react-components* all have a watch script in order to facilitate this.
