import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../../components/CustomHeader';

const sizes = ['base', 'micro', 'small', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Font"
        description="Apply or override font family, size, style, and weight."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>These classes add <code>font</code> properties to an element, so they can be used for building or customizing an element.</p>
        </header>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Family</h4>
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
              <td><code className="dc-u-ws-nowrap">.dc-u-ff-sans-serif</code></td>
              <td><code>font-family: $dc-font-family-sans-serif;</code></td>
              <td><p className="dc-u-m-none dc-u-ff-sans-serif">Sans Serif Family</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-ff-mono</code></td>
              <td><code>font-family: $dc-font-family-mono;</code></td>
              <td><p className="dc-u-m-none dc-u-ff-mono">Mono Family</p></td>
            </tr>
          </tbody>
        </table>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Size</h4>
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
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-base</code></td>
              <td><code>font-size: 16px;</code></td>
              <td><p className="dc-u-m-none dc-u-fs-base">Base Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-micro</code></td>
              <td><code>font-size: 0.75rem; //12px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-micro">Micro Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-small</code></td>
              <td><code>font-size: 0.875rem; //14px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-small">Small Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h1</code></td>
              <td><code>font-size: 2.5rem; //40px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h1">H1 Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h2</code></td>
              <td><code>font-size: 2rem; //32px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h2">H2 Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h3</code></td>
              <td><code>font-size: 1.5rem; //24px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h3">H3 Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h4</code></td>
              <td><code>font-size: 1.25rem; //20px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h4">H4 Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h5</code></td>
              <td><code>font-size: 1.25rem; //18px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h5">H5 Font Size</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fs-h6</code></td>
              <td><code>font-size: 1rem; //16px</code></td>
              <td><p className="dc-u-m-none dc-u-fs-h6">H6 Font Size</p></td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Responsive Size Modifiers</h2>
          <p>Font size utilities can be applied to individual common breakpoints using <code>@[size]</code> appended to the end of the class.</p>
        </header>

        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((name) => (
              <tr className="dc-u-bt">
                <td>
                  <code>.dc-u-fs-{name}</code>
                </td>
                <td className="dc-u-ta-center">
                  <span className="dc-icon dc-icon--size-18 dc-icon--green">
                    <svg className="dc-icon__svg">
                      <use xlinkHref="#checkmark_circle" />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Page>
    </main>
  );
};
