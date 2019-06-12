import * as Icons from '@datacamp/waffles-icons';
import styled from '@emotion/styled';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

const Container = styled.div`
  display: 'grid',
  grid-template-columns: 'auto auto auto',
  width: '100%',
  place-items: 'center',
`;

storiesOf('waffles-icons', module).add('All Icons', () => (
  <Container>
    {Object.entries(Icons).map(([name, Component]) => (
      <p key={name}>
        {name}{' '}
        <Component
          size={select('size', [12, 18, 24], 18)}
          color={color('color', 'currentColor')}
        />
      </p>
    ))}
  </Container>
));
