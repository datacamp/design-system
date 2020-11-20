import {
  ALPA,
  ALPALoop,
  DatacampLogo,
  Logos,
  TechLogo,
  Technologies,
  Topics,
} from '@datacamp/waffles-asset-components';
import tokens from '@datacamp/waffles-tokens';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-asset-components', module)
  .add('Logos White Background', () => {
    return Object.values(Logos).map((LogoCollection) =>
      Object.values(LogoCollection).map((Logo) => <Logo />),
    );
  })
  .add('Logos Black Background', () => {
    return (
      <div css={{ backgroundColor: 'black' }}>
        {Object.values(Logos).map((LogoCollection) =>
          Object.values(LogoCollection).map((Logo) => <Logo />),
        )}
      </div>
    );
  })
  .add('ALPA', () => {
    return (
      <div css={{ backgroundColor: tokens.colors.navy }}>
        {Object.values(ALPA).map((ALPATHING) => (
          <ALPATHING />
        ))}
      </div>
    );
  })
  .add('Technologies', () => {
    return Object.values(Technologies).map((Technology) => <Technology />);
  })
  .add('TechLogo', () => {
    return <TechLogo technology={text('technology', 'R')} />;
  })
  .add('ALPALoop', () => {
    return (
      <div css={{ backgroundColor: tokens.colors.navy }}>
        <ALPALoop
          highlight={select(
            'highlight',
            ['', 'Practice', 'Learn', 'Apply', 'Assess'],
            '',
          )}
        />
      </div>
    );
  })
  .add('DatacampLogo', () => {
    const logomarkColor = text('logomarkColor', '#03EF62');
    const height = text('height', '36');
    return (
      <>
        <DatacampLogo height={height} logomarkColor={logomarkColor} />
        <DatacampLogo
          height={height}
          logomarkColor={logomarkColor}
          showWordmark
          wordmarkColor={text('wordmarkColor', '#05192D')}
        />
      </>
    );
  });
