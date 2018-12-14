import React from 'react';
import { Page } from 'catalog';

import { COLORS } from '../../../packages/core/colors.js';

export default () => (
  <Page>
    {COLORS.map(name => (
      <p>{ color }</p>
    ))}
  </Page>
);