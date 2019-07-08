import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

function loadStories() {
  const req = require.context('../stories', true, /^.+\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  a11y: {
    options: {
      runOnly: [
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
        'section508',
        'best-practice',
      ],
    },
  },
});

configure(loadStories, module);
