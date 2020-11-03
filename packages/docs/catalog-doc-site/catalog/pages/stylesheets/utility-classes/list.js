import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const Additive = [
  { class: 'circle', value: 'circle' },
  { class: 'decimal', value: 'decimal' },
  { class: 'dlz', value: 'decimal-leading-zero' },
  { class: 'disc', value: 'disc' },
  { class: 'latin-lower', value: 'lower-latin' },
  { class: 'latin-upper', value: 'upper-latin' },
  { class: 'roman-lower', value: 'lower-roman' },
  { class: 'roman-upper', value: 'upper-roman' },
  { class: 'square', value: 'square' },
];

const Subtractive = [{ class: 'none', value: 'none' }];

export default () => {
  return (
    <main>
      <CustomHeader
        description="Apply or override lists."
        section="Utility Classes"
        subSection="List"
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>list-style</code> properties to an element,
            so they can be used for building or customizing an element.
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
            {Additive.map((a) => (
              <tr key={a.class}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-lst-${a.class}`}</code>
                </td>
                <td>
                  <code>list-style-type: {a.value};</code>
                </td>
                <td>
                  <ul className={`dc-u-m-none dc-u-pl-16 dc-u-lst-${a.class}`}>
                    <li className="dc-u-m-none dc-u-p-none">List Item</li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <header>
          <h2>Subtractive</h2>
          <p>
            These classes remove <code>list-style</code> properties from an
            element, so they can be used for customizing an element.
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
            {Subtractive.map((s) => (
              <tr key={s.class}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-lst-${s.class}`}</code>
                </td>
                <td>
                  <code>list-style-type: {s.value};</code>
                </td>
                <td>
                  <ul className={`dc-u-m-none dc-u-pl-16 dc-u-lst-${s.class}`}>
                    <li className="dc-u-m-none dc-u-p-none">List Item</li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Page>
    </main>
  );
};
