import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const Additive = [
  { class: 'of-auto', value: 'overflow: auto' },
  { class: 'of-hidden', value: 'overflow: hidden' },
  { class: 'of-scroll', value: 'overflow: scroll' },
  { class: 'of-visible', value: 'overflow: visible' },
  { class: 'ofx-auto', value: 'overflow-x: auto' },
  { class: 'ofx-hidden', value: 'overflow-x: hidden' },
  { class: 'ofx-scroll', value: 'overflow-x: scroll' },
  { class: 'ofx-visible', value: 'overflow-x: visible' },
  { class: 'ofy-auto', value: 'overflow-y: auto' },
  { class: 'ofy-hidden', value: 'overflow-y: hidden' },
  { class: 'ofy-scroll', value: 'overflow-y: scroll' },
  { class: 'ofy-visible', value: 'overflow-y: visible' },
];

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Overflow"
        description="Apply or override overflow."
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
            </tr>
          </thead>
          <tbody>
            {Additive.map(a => (
              <tr key={a.class}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-${a.class}`}</code>
                </td>
                <td>
                  <code>{a.value};</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Page>
    </main>
  );
};
