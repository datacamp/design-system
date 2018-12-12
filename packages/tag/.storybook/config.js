import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

const reqStories = require.context('../src/', true, /^.+\.stories\.js$/);
const loadStories = () => {
  require('./styleguide.scss'); // eslint-disable-line global-require
  reqStories.keys().forEach(reqStories);
};

setAddon(JSXAddon);
addDecorator(withKnobs);

configure(loadStories, module);
