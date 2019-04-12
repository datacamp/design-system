import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../../components/CustomHeader';

const docsHasBoxShadow = {
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
};

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Box Shadow"
        description="Apply or override box-shadow."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>box-shadow</code> to an element, so they can
            be used for building or customizing an element.
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
                <code className="dc-u-ws-nowrap">.dc-u-bs-border</code>
              </td>
              <td>
                <code>box-shadow: $dc-box-shadow-border;</code>
              </td>
              <td>
                <div className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-border" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bs-sm</code>
              </td>
              <td>
                <code>box-shadow: $dc-box-shadow-sm;</code>
              </td>
              <td>
                <div className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-sm" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bs-md</code>
              </td>
              <td>
                <code>box-shadow: $dc-box-shadow-md;</code>
              </td>
              <td>
                <div className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-md" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bs-lg</code>
              </td>
              <td>
                <code>box-shadow: $dc-box-shadow-lg;</code>
              </td>
              <td>
                <div className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-lg" />
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-bs-xl</code>
              </td>
              <td>
                <code>box-shadow: $dc-box-shadow-xl;</code>
              </td>
              <td>
                <div className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-xl" />
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Subtractive</h2>
          <p>
            These classes remove <code>box-shadow</code>, so they can be used
            for customizing an element that has <code>box-shadow</code> applied
            via CSS.
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
                <code className="dc-u-ws-nowrap">.dc-u-bs-none</code>
              </td>
              <td>
                <code>box-shadow: none;</code>
              </td>
              <td>
                <div
                  className="dc-u-bgc-white dc-u-h-32 dc-u-w-32 dc-u-bs-none"
                  style={docsHasBoxShadow}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
