import { getColor, getContrastColor } from '@datacamp/waffles-core';
import { colors } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';
import dashify from '../../../helpers/dashify';

export default () => {
  const obj = Object.keys(colors);
  return (
    <main>
      <CustomHeader
        description="Apply or override background colors."
        section="Utility Classes"
        subSection="Background"
      />

      <Page>
        <section>
          <p>
            Background color utility classes are named using the format{' '}
            <code>.dc-u-bgc-[color-name]</code>. They can be used for building
            or customizing an element.
          </p>

          <ul className="dc-u-fx dc-u-fx-fww dc-u-m-none dc-u-p-none">
            {obj.map(name => (
              <li
                className="dc-u-fx dc-u-fx-fdc dc-u-fx-aic dc-u-fx-jcc"
                key={name}
                style={{
                  background: getColor(name),
                  color: getContrastColor(name),
                  height: '128px',
                  width: '256px',
                }}
              >
                <code>{`.dc-u-bgc-${dashify(name)}`}</code>
              </li>
            ))}
          </ul>
        </section>
      </Page>
    </main>
  );
};
