import React from 'react';
import { Page } from 'catalog';

import { colors } from '../../../packages/core/tokens.json';
import { getColor, getContrastColor } from '../../../packages/core/js/colors';
import { dashify } from '../../helpers/dashify';

export default () => {
  const obj = Object.keys(colors);
  return (
    <Page>
      <section>
        <p>Background color utility classes are named using the format <code>.dc-u-bgc-[color-name]</code>. They can be used for building or customizing an element.</p>
        
        <ul class="dc-u-fx dc-u-fx-fww dc-u-m-none dc-u-p-none">
          {obj.map(name => (
            <li
              className="dc-u-fx dc-u-fx-fdc dc-u-fx-aic dc-u-fx-jcc"
              key={name}
              style={{
                background: getColor(name),
                width: '256px',
                height: '128px',
                color: getContrastColor(name),
              }}
            >
              <code>{`.dc-u-bgc-${dashify(name)}`}</code>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
};
