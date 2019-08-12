import Card, { elevationMap } from '@datacamp/waffles-card';
import { Paragraph } from '@datacamp/waffles-text';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-card').add('elevation levels', () => (
  <div
    css={{
      backgroundColor: '#F0F4F5',
      height: '100%',
      paddingTop: '16px',
      width: '100%',
    }}
  >
    {Object.keys(elevationMap).map(elevation => (
      <Card
        key={elevation}
        css={{ margin: 16, padding: 24, width: 300 }}
        elevation={elevation}
        hoverElevation={4}
      >
        <Paragraph>This is a paragraph with some padding.</Paragraph>
      </Card>
    ))}
  </div>
));
