import {
  Logos,
  Technologies,
  Topics,
} from '@datacamp/waffles-asset-components';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-asset-components', module)
  .add('Logos White Background', () => {
    return Object.values(Logos).map(LogoCollection =>
      Object.values(LogoCollection).map(Logo => <Logo />),
    );
  })
  .add('Logos Black Background', () => {
    return (
      <div css={{ backgroundColor: 'black' }}>
        {Object.values(Logos).map(LogoCollection =>
          Object.values(LogoCollection).map(Logo => <Logo />),
        )}
      </div>
    );
  })
  .add('Technologies', () => {
    return Object.values(Technologies).map(Technology => <Technology />);
  })
  .add('Topics', () => {
    return Object.values(Topics).map(Topic => <Topic />);
  });
