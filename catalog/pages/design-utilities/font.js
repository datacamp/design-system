import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';
import { breakpoints } from '../../../packages/core/tokens.json';
import dashify from '../../helpers/dashify';
import whitelist from '../../helpers/whitelist.js';

const blacklist = ['ws', '4K', '5K', 'belowWs', 'below4K', 'below5K'];

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design Utilities"
        subSection="Font"
        description="Apply or override font family, size, style, and weight."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>These classes add <code>cursor</code> properties to an element, so they can be used for building or customizing an element.</p>
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
          <p>Font size utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <article className="dc-u-mh-4">
          <h4>Base</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-base@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Micro</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-micro@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Small</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-small@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H1</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h1@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H2</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h2@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H3</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h3@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H4</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h4@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H5</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h5@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>H6</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">{`.dc-u-fs-h6@${dashify(name)}`}</code>
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Style</h4>
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
              <td><code className="dc-u-ws-nowrap">.dc-u-fst-italic</code></td>
              <td><code>font-style: italic;</code></td>
              <td><p className="dc-u-m-none dc-u-fst-italic">Italic font style</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fst-normal</code></td>
              <td><code>font-style: normal;</code></td>
              <td><p className="dc-u-m-none dc-u-fst-normal">Normal font style</p></td>
            </tr>
          </tbody>
        </table>

        <h4 className="dc-u-mb-8 dc-u-minw-100pc">Weight</h4>
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
              <td><code className="dc-u-ws-nowrap">.dc-u-fw-light</code></td>
              <td><code>font-weight: 300;</code></td>
              <td><p className="dc-u-m-none dc-u-fw-light">Light font weight</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fw-regular</code></td>
              <td><code>font-weight: 400;</code></td>
              <td><p className="dc-u-m-none dc-u-fw-regular">Regular font weight</p></td>
            </tr>
            <tr>
              <td><code className="dc-u-ws-nowrap">.dc-u-fw-bold</code></td>
              <td><code>font-weight: 700;</code></td>
              <td><p className="dc-u-m-none dc-u-fw-bold">Bold font weight</p></td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};