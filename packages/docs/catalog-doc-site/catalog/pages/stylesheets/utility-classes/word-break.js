import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

const Additive = [
  { class: 'ba', value: 'break-all' },
  { class: 'bw', value: 'break-word' },
  { class: 'ka', value: 'keep-all' },
];

const Subtractive = [
  {
    class: 'normal',
    value: 'normal',
  },
];

export default () => (
  <main>
    <CustomHeader
      section="Utility Classes"
      subSection="Word Break"
      description="Set where line breaks appear wherever text would otherwise overflow."
    />
    <Page>
      <header>
        <h2>Additive</h2>
        <p>
          These classes add <code>word-break</code> properties to an element, so
          they can be used for building or customizing an element.
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
          {Additive.map(a => (
            <tr key={a.class}>
              <td>
                <code className="dc-u-ws-nowrap">{`.dc-u-wb-${a.class}`}</code>
              </td>
              <td>
                <code className="dc-u-ws-nowrap">word-break: {a.value};</code>
              </td>
              <td>
                <p className={`dc-u-m-none dc-u-wb-${a.class}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum nec ornare ligula, a facilisis odio.
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <span className="dc-u-fw-bold">Note:</span> please see
        <a href="https://caniuse.com/#feat=word-break">
          https://caniuse.com/#feat=word-break
        </a>{' '}
        for more details.
      </p>

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
          {Subtractive.map(s => (
            <tr key={s.class}>
              <td>
                <code className="dc-u-ws-nowrap">{`.dc-u-wb-${s.class}`}</code>
              </td>
              <td>
                <code className="dc-u-ws-nowrap">word-break: {s.value};</code>
              </td>
              <td>
                <p className={`dc-u-m-none dc-u-wb-${s.class}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum nec ornare ligula, a facilisis odio.
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  </main>
);
