import React from 'react';
import { Page } from 'catalog';

import { colors } from '../../../packages/core/tokens.json';

export default () => {
  const boom = Object.values(colors);
  return(
    <Page>

      {boom.map(name => (
        <li
          className="dc-u-fx dc-u-m-24 dc-u-fx-fdc dc-u-fx-aic dc-u-w-192"
          key={name}
        >
          <p>{name}</p>
        </li>
      ))}
      
    </Page>
  )
};