/* eslint-disable import/no-anonymous-default-export */
import { spatial } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const measures = Array.from(spatial.measure.split(' '));
const ratios = ['25', '50', '75', '100'];

export default () => {
  return (
    <main>
      <CustomHeader
        description="Apply or override min-height."
        section="Utility Classes"
        subSection="Min Height"
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>min-height</code> properties to an element,
            so they can be used for building or customizing an element.
          </p>
        </header>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Pixels</h4>
        <p>
          Min Height utilites can be used with pixels using the format{' '}
          <code>.dc-u-minh-[measure]</code>, where <code>[measure]</code> is one
          of the following: <code>0, {measures.join(', ')}</code>
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
                <code className="dc-u-ws-nowrap">.dc-u-minh-0</code>
              </td>
              <td>
                <code>min-height: 0px;</code>
              </td>
            </tr>
            {measures.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-minh-${value}`}</code>
                </td>
                <td>
                  <code>min-height: {value}px;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Percentages</h4>
        <p>
          Min Height utilites can also be used with the following percentage
          units.
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
                  <code className="dc-u-ws-nowrap">{`.dc-u-minh-${value}`}</code>
                </td>
                <td>
                  <code>min-height: {value}%;</code>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-minh-auto</code>
              </td>
              <td>
                <code>min-height: auto;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
