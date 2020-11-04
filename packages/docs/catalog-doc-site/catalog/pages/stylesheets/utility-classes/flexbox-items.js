/* eslint-disable import/no-anonymous-default-export */
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const widths = [
  '2',
  '4',
  '8',
  '12',
  '16',
  '24',
  '32',
  '48',
  '64',
  '80',
  '96',
  '128',
  '192',
  '256',
  '320',
  '480',
  '640',
  '800',
  '960',
];
const percentages = [
  '1',
  '5',
  '10',
  '15',
  '20',
  '25',
  '30',
  '40',
  '50',
  '60',
  '70',
  '75',
  '80',
  '90',
  '100',
];

export default () => {
  return (
    <main>
      <CustomHeader
        description="Customize flex items."
        section="Utility Classes"
        subSection="Flex Items"
      />
      <Page>
        <header className="dc-u-w-100pc">
          <h2>Grow</h2>
          <p>
            These classes add <code>flex-grow</code> to an element, so they can
            be used for building or customizing an element.
          </p>
          <p>
            While <code>flex-grow</code> is technically a ratio, we used it
            primarily like a binary, with <code>0</code> being{' '}
            <code>false</code> and <code>1</code> being <code>true</code>.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-fg-0</code>
              </td>
              <td>
                <code>flex-grow: 0;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-fg-1</code>
              </td>
              <td>
                <code>flex-grow: 1;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header className="dc-u-w-100pc">
          <h2>Shrink</h2>
          <p>
            These classes add <code>flex-shrink</code> to an element, so they
            can be used for building or customizing an element.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-fs-0</code>
              </td>
              <td>
                <code>flex-shrink: 0;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-fs-1</code>
              </td>
              <td>
                <code>flex-shrink: 1;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header className="dc-u-w-100pc">
          <h2>Order</h2>
          <p>
            These classes add <code>flex-wrap</code> to an element, so they can
            be used for building or customizing an element.
          </p>

          <p>
            Utility classes can be used for basic reordering, but custom CSS is
            necessary for complex changes.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-o-0</code>
              </td>
              <td>
                <code>order: 0;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-o-1</code>
              </td>
              <td>
                <code>order: 1;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header className="dc-u-w-100pc">
          <h2>Align Self</h2>
          <p>
            These classes add <code>align-self</code> to an element, so they can
            be used for building or customizing an element.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-asb</code>
              </td>
              <td>
                <code>align-self: baseline;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-asc</code>
              </td>
              <td>
                <code>align-self: center;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-asfe</code>
              </td>
              <td>
                <code>align-self: flex-end;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-asfs</code>
              </td>
              <td>
                <code>align-self: flex-start;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-ass</code>
              </td>
              <td>
                <code>align-self: stretch;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header className="dc-u-w-100pc">
          <h2>Basis</h2>
          <p>
            These classes add <code>align-self</code> to an element, so they can
            be used for building or customizing an element.
          </p>

          <p>
            Flex Basis utilites can be used with pixels using the format{' '}
            <code>dc-u-fxi-fb-[size]</code> or percentages using the format{' '}
            <code>dc-u-fxi-fb-[percentage]pc</code>.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-fb-auto</code>
              </td>
              <td>
                <code>flex-basis: auto;</code>
              </td>
            </tr>
            {widths.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-fxi-fb-${value}`}</code>
                </td>
                <td>
                  <code>flex-basis: {value}px;</code>
                </td>
              </tr>
            ))}
            {percentages.map((value) => (
              <tr key={value}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-fxi-fb-${value}pc`}</code>
                </td>
                <td>
                  <code>flex-basis: {value}%;</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <header className="dc-u-w-100pc">
          <h2>Item</h2>
          <p>
            These classes add <code>align-self</code> to an element, so they can
            be used for building or customizing an element.
          </p>

          <p>
            Flex Basis utilites can be used with pixels using the format{' '}
            <code>dc-u-fxi-fb-[size]</code> or percentages using the format{' '}
            <code>dc-u-fxi-fb-[percentage]pc</code>.
          </p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-f-0</code>
              </td>
              <td>
                <code>flex: 0 auto;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-f-1</code>
              </td>
              <td>
                <code>flex: 1;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-f-auto</code>
              </td>
              <td>
                <code>flex: auto;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fxi-f-none</code>
              </td>
              <td>
                <code>flex: none;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
