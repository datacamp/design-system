/* eslint-disable import/no-anonymous-default-export */
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Apply or override letter spacing."
        section="Utility Classes"
        subSection="Letter Spacing"
      />
      <Page>
        <header>
          <h4 className="dc-u-mb-8">Additive</h4>
          <p className="dc-u-mt-0">
            These classes add <code>letter-spacing</code> properties to an
            element, so they can be used for building or customizing an element.
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
                <code className="dc-u-ws-nowrap">.dc-u-ls-1</code>
              </td>
              <td>
                Sets <code>letter-spacing: 1px;</code>
              </td>
              <td>
                <p className="dc-u-m-none dc-u-ls-1">
                  Adds 1px of letter spacing
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-ls-2</code>
              </td>
              <td>
                Sets <code>letter-spacing: 2px;</code>
              </td>
              <td>
                <p className="dc-u-m-none dc-u-ls-2">
                  Adds 2px of letter spacing
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h4 className="dc-u-mb-8">Subtractive</h4>
          <p className="dc-u-mt-0">
            This class overrides <code>letter-spacing</code> properties to an
            element, so it can be used for customizing an element.
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
                <code className="dc-u-ws-nowrap">.dc-u-ls-0</code>
              </td>
              <td>
                Sets <code>letter-spacing: 0;</code>
              </td>
              <td>
                <h5 className="dc-u-m-none dc-chapeau-title dc-u-ls-0">
                  Overrides letter spacing to 0
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
