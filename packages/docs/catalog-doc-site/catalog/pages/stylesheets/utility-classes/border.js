import React from 'react';
import { Page, HintSpecimen } from 'catalog';

import { colors } from '@datacamp/waffles-core/tokens.json';
import { getColor, getContrastColor } from '@datacamp/waffles-core';
import CustomHeader from '../../../components/CustomHeader';
import dashify from '../../../helpers/dashify';

const docsCustomBgLight = {
  background: '#f9fafa',
};

const docsHasBorder = {
  border: '1px solid #e6eaeb',
};

export default () => {
  const obj = Object.keys(colors);
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Border"
        description="Apply or override border."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>border</code> to an element, so they can be
            used for building or customizing an element.
          </p>
        </header>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-b</code>
              </td>
              <td>
                <code>border: 1px solid $dc-grey-lighter;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-b"
                  style={docsCustomBgLight}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bt</code>
              </td>
              <td>
                <code>border-top: 1px solid $dc-grey-lighter;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bt"
                  style={docsCustomBgLight}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-br</code>
              </td>
              <td>
                <code>border-right: 1px solid $dc-grey-lighter;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-br"
                  style={docsCustomBgLight}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bb</code>
              </td>
              <td>
                <code>border-bottom: 1px solid $dc-grey-lighter;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bb"
                  style={docsCustomBgLight}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bl</code>
              </td>
              <td>
                <code>border-left: 1px solid $dc-grey-lighter;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bl"
                  style={docsCustomBgLight}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Subtractive</h2>
          <p>
            These classes remove <code>border</code> from an element, so they
            can be used for customizing an element with <code>border</code>{' '}
            applied via CSS.
          </p>
        </header>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-b-none</code>
              </td>
              <td>
                <code>border: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-b-none"
                  style={{ ...docsHasBorder, ...docsCustomBgLight }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bt-none</code>
              </td>
              <td>
                <code>border-top: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bt-none"
                  style={{ ...docsHasBorder, ...docsCustomBgLight }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-br-none</code>
              </td>
              <td>
                <code>border-right: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-br-none"
                  style={{ ...docsHasBorder, ...docsCustomBgLight }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bb-none</code>
              </td>
              <td>
                <code>border-bottom: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bb-none"
                  style={{ ...docsHasBorder, ...docsCustomBgLight }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bl-none</code>
              </td>
              <td>
                <code>border-left: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-h-32 dc-u-w-32 dc-u-bl-none"
                  style={{ ...docsHasBorder, ...docsCustomBgLight }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Color</h2>
          <p>
            Border color utility classes are named using the format
            .dc-u-bc-[color].
          </p>

          <HintSpecimen>
            The color classes only output a <code>border-color</code>, so
            `.dc-u-b` class is necessary for adding border to an element.
          </HintSpecimen>
        </header>

        <section className="dc-u-bgc-white dc-u-mt-24 dc-u-p-8">
          <ul className="dc-u-fx dc-u-fx-fww dc-u-m-none dc-u-p-none">
            {obj.map(name => (
              <li
                className="dc-u-fx dc-u-fx-fdc dc-u-fx-aic dc-u-fx-jcc dc-u-m-8"
                key={name}
                style={{
                  border: `1px solid${getColor(name)}`,
                  width: '236px',
                  height: '118px',
                }}
              >
                <code>{`.dc-u-bc-${dashify(name)}`}</code>
              </li>
            ))}
          </ul>
        </section>
      </Page>
    </main>
  );
};
