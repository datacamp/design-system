import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';
import { spatial } from '@datacamp/waffles-core/tokens.json';

const sizes = Array.from((spatial.sizes.split(' ')));
const measures = Array.from((spatial.measure.split(' ')));
const percentages = Array.from((spatial.percentages.split(' ')));

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design Utilities"
        subSection="Min Width"
        description="Apply or override min-width."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>These classes add <code>min-width</code> properties to an element, so they can be used for building or customizing an element.</p>
        </header>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Pixels</h4>
        <p>
          Min Width utilites can be used with pixels using the format <code>.dc-u-minw-[measure]</code>, where <code>[measure]</code> is one of the following: <code>0, {sizes.join(', ')} {measures.join(', ')}</code>
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
                <code className="dc-u-ws-nowrap">.dc-u-minw-0</code>
              </td>
              <td>
                <code>min-width: 0px;</code>
              </td>
            </tr>
            {sizes.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-minw-${(value)}`}</code>
                </td>
                <td>
                  <code>min-width: {value}px;</code>
                </td>
              </tr>
            ))}
            {measures.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-minw-${(value)}`}</code>
                </td>
                <td>
                  <code>min-width: {value}px;</code>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-minw-auto</code>
              </td>
              <td>
                <code>min-width: auto;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Percentages</h4>
        <p>Min Width utilites can also be used with the following percentage units.</p>

        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {percentages.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-minw-${(value)}pc`}</code>
                </td>
                <td>
                  <code>min-width: {value}%;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Page>
    </main>
  );
};