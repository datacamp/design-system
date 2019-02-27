import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';

const opacities = ['0', '1'];

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design Utilities"
        subSection="Opacity"
        description="Apply or override lists."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>These classes add <code>opacity</code> properties to an element, so they can be used for building or customizing an element.</p>
        </header>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {opacities.map(value =>
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-op-${value}`}</code>
                </td>
                <td>
                  <code>opacity: {value};</code>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Page>
    </main>
  );
};