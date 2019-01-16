import React from 'react';
import { Page } from 'catalog';

import { colors } from '../../../packages/core/tokens.json';
import { getColor, getContrastColor } from '../../../packages/core/js/colors';
import { dashify } from '../../helpers/dashify';

export default () => {
  const obj = Object.keys(colors);
  return (
    <Page>
      {obj.map(name => (
        <li
          className="dc-u-fx dc-u-fx-fdc dc-u-fx-aic dc-u-fx-jcc"
          key={name}
          style={{
            background: getColor(name),
            width: '192px',
            height: '128px',
            color: getContrastColor(name),
          }}
        >
          <p>{name}</p>
          <p>{`dc-${dashify(name)}`}</p>
        </li>
      ))}
    </Page>
  );
};
