import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../../components/CustomHeader';

const docsHasBorderRadius = {
  borderRadius: '4px',
};

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Border Radius"
        description="Apply or override border radius."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>border-radius</code> to an element, so they
            can be used for building or customizing an element.
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
                <code className="dc-u-ws-nowrap">.dc-u-brad-all</code>
              </td>
              <td>
                <code>border-radius: 4px;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-all" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-bl</code>
              </td>
              <td>
                <code>border-bottom-left-radius: 4px;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-bl" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-br</code>
              </td>
              <td>
                <code>border-bottom-right-radius: 4px;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-br" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-tl</code>
              </td>
              <td>
                <code>border-top-left-radius: 4px;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-tl" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-tr</code>
              </td>
              <td>
                <code>border-top-right-radius: 4px;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-tr" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-b</code>
              </td>
              <td>
                <code>
                  border-bottom-left-radius: 4px; border-bottom-right-radius:
                  4px;
                </code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-b" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-t</code>
              </td>
              <td>
                <code>
                  border-top-left-radius: 4px; border-top-right-radius: 4px;
                </code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-t" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-circle</code>
              </td>
              <td>
                <code>border-radius: 50%;</code>
              </td>
              <td>
                <div className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-circle" />
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Subtractive</h2>
          <p>
            These classes remove <code>border-radius</code>, so they can be used
            for customizing an element that has <code>border-radius</code>{' '}
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
                <code className="dc-u-ws-nowrap">.dc-u-brad-none</code>
              </td>
              <td>
                <code>border-radius: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-none"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-bl-0</code>
              </td>
              <td>
                <code>border-bottom-left-radius: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-bl-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-br-0</code>
              </td>
              <td>
                <code>border-bottom-right-radius: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-br-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-tl-0</code>
              </td>
              <td>
                <code>border-top-left-radius: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-tl-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-tr-0</code>
              </td>
              <td>
                <code>border-top-right-radius: 0;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-tr-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-b-0</code>
              </td>
              <td>
                <code className="dc-u-ws-pre">
                  border-bottom-left-radius: 0; border-bottom-right-radius: 0;
                </code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-b-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-brad-t-0</code>
              </td>
              <td>
                <code className="dc-u-ws-pre">
                  border-top-left-radius: 0; border-top-right-radius: 0;
                </code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-primary-dark dc-u-h-32 dc-u-w-32 dc-u-brad-t-0"
                  style={docsHasBorderRadius}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
