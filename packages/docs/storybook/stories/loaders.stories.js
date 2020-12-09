import { LogomarkSpinner } from '@datacamp/waffles-loaders';
import { color } from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-loaders', module).add('LogomarkSpinner', () => {
  return (
    <div css={{ backgroundColor: color.neutral.beige400.value.hex }}>
      <LogomarkSpinner />
      <LogomarkSpinner size="200px" />
      <LogomarkSpinner color="white" />
    </div>
  );
});
