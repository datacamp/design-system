/* eslint-disable import/no-anonymous-default-export */
import { spatial } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const pixels = Array.from(spatial.measure.split(' '));
const ratios = ['25', '50', '75', '100'];

export default () => {
  return (
    <main>
      <CustomHeader
        description="Apply or override max-height."
        section="Utility Classes"
        subSection="Max Height"
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>max-height</code> properties to an element,
            so they can be used for building or customizing an element.
          </p>
        </header>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Pixels</h4>
        <p>
          Max Height utilites can be used with pixels using the format{' '}
          <code>.dc-u-maxh-[measure]</code>, where <code>[measure]</code> is one
          of the following: <code>0, {pixels.join(', ')}</code>
        </p>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-maxh-0</code>
              </td>
              <td>
                <code>max-height: 0px;</code>
              </td>
            </tr>
            {pixels.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-maxh-${value}`}</code>
                </td>
                <td>
                  <code>max-height: {value}px;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Ratios</h4>
        <p>
          Max Height utilites can also be used with the following percentage
          units and auto.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {ratios.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-maxh-${value}`}</code>
                </td>
                <td>
                  <code>max-height: {value}%;</code>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-maxh-auto</code>
              </td>
              <td>
                <code>max-height: auto;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
