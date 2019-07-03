import { spatial } from '@datacamp/waffles-tokens';
import { HintSpecimen, Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const sizes = Array.from(spatial.sizes.split(' '));
const ratios = ['25', '50', '75', '100'];

export default () => {
  return (
    <main>
      <CustomHeader
        description="Apply pixel, percentage, or viewport heights."
        section="Utility Classes"
        subSection="Height"
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>height</code> properties to an element, so
            they can be used for building or customizing an element.
          </p>
        </header>

        <h4 className="dc-u-mb-0 dc-u-minw-100pc">Pixel</h4>

        <HintSpecimen>
          Height utilites can be used with pixels using the format{' '}
          <code>.dc-u-h-[size]</code>, where <code>size</code> is one of the
          following:
          <code>{sizes.join(', ')}</code>
        </HintSpecimen>

        <table className="table dc-u-mt-16">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map(value => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-h-${value}`}</code>
                </td>
                <td>
                  <code>height: {value}px;</code>
                </td>
                <td>
                  <div className={`dc-u-bgc-grey-light dc-u-h-${value}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Percentage</h4>
        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {ratios.map(value => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-h-${value}pc`}</code>
                </td>
                <td>
                  <code>height: {value}px;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Viewport</h4>
        <table className="table">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {ratios.map(value => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-h-${value}vh`}</code>
                </td>
                <td>
                  <code>height: {value}px;</code>
                </td>
                <td>
                  <div className={`dc-u-bgc-grey-light dc-u-h-${value}vh`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Page>
    </main>
  );
};
