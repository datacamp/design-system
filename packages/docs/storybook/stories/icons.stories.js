import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, color } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import * as Icons from '@datacamp/waffles-icons';

const Container = styled.div`
  display: 'grid',
  grid-template-columns: 'auto auto auto',
  width: '100%',
  place-items: 'center',
`;

storiesOf('Icons', module).add('All Icons', () => (
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
