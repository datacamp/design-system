import { GlobalFontFaces } from '@datacamp/waffles-text';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import React from 'react'
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

// always include the font faces similar to an app's root element
const fontFaceDecorator = storyfn => (
  <>
    <GlobalFontFaces />
    {storyfn()}
  </>
);
addDecorator(fontFaceDecorator);

configure(loadStories, module);
