import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Line Height"
        description="Apply or override line height."
      />
      <Page>
        <header>
          <h4 className="dc-u-mb-8">Additive</h4>
          <p className="dc-u-mt-0">These classes add <code>line-height</code> properties to an element, so they can be used for building or customizing an element.</p>
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
              <td><code className="dc-u-ws-nowrap">.dc-u-lh-base</code></td>
              <td>Sets <code>line-height: 1.5;</code></td>
              <td><p className="dc-u-m-none dc-u-lh-base">Applies a multiplier of 1.5</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-lh-heading</code></td>
              <td>Sets <code>line-height: 1.25;</code></td>
              <td><p className="dc-u-m-none dc-u-lh-heading">Applies a multiplier of 1.25</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-lh-1</code></td>
              <td>Sets <code>line-height: 1;</code></td>
              <td><p className="dc-u-m-none dc-u-lh-1">Applies a multiplier of 1</p></td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
