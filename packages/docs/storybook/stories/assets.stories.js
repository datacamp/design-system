import {
  DatacampLogo,
  Logos,
  TechLogo,
  Technologies,
  Topics,
} from '@datacamp/waffles-asset-components';
import { text } from '@storybook/addon-knobs';
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
  })
  .add('TechLogo', () => {
    return <TechLogo technology={text('technology', 'R')} />;
  })
  .add('DatacampLogo', () => {
    return (
      <DatacampLogo
        logomarkColor={text('logomarkColor', '#03EF62')}
        wordmarkColor={text('wordmarkColor', '#05192D')}
      />
    );
  });
