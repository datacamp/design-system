import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
  require('./styleguide.scss'); // eslint-disable-line global-require
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
