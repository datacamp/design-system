import { TechLogo } from '@datacamp/waffles-asset-components';
import Card, { elevationMap } from '@datacamp/waffles-card';
import { Paragraph } from '@datacamp/waffles-text';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-card', module)
  .add('elevation levels', () => {
    const hoverElevation = select('hoverElevation', [0, 1, 2, 3, 4]);
    return (
      <div
        css={{
          height: '100%',
          paddingTop: '16px',
          width: '100%',
        }}
      >
        {Object.keys(elevationMap).map((elevation) => (
          <Card
            css={{ margin: 16, padding: 24, width: 300 }}
            elevation={parseInt(elevation, 10)}
            hoverElevation={
              hoverElevation > elevation ? hoverElevation : undefined
            }
            key={elevation}
          >
            <Paragraph>This is a paragraph with some padding.</Paragraph>
          </Card>
        ))}
      </div>
    );
  })
  .add('headStones', () => {
    return (
      <Card
        css={{ padding: 24, width: 300 }}
        headStone={<TechLogo height={40} width={40} />}
      >
        <Paragraph>
          This is a paragraph with a TechLogo in the headStone
        </Paragraph>
      </Card>
    );
  });
