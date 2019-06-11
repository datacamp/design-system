import { breakpoints } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';
import dashify from '../../../helpers/dashify';
import whitelist from '../../../helpers/whitelist';

const blacklist = ['ws', '4K', '5K', 'belowWs', 'below4K', 'below5K'];

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Display"
        description="Apply or override display."
      />
      <Page>
        <header>
          <p>
            These classes add <code>display</code> to an element, so they can be
            used for building or customizing an element.
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
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-b</code>
              </td>
              <td>
                <code>display: block;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-i</code>
              </td>
              <td>
                <code>display: inline;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-ib</code>
              </td>
              <td>
                <code>display: inline-block;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-none</code>
              </td>
              <td>
                <code>display: none;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-tbl</code>
              </td>
              <td>
                <code>display: table;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-d-tbl-cell</code>
              </td>
              <td>
                <code>display: table-cell;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Responsive Modifiers</h2>
          <p>
            Display utilities can be applied to individual common breakpoints
            using <code>@[size]</code> appended to the end of the class.
          </p>
        </header>

        <article className="dc-u-mh-4">
          <h4>Block</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-b@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Inline</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-i@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Inline-Block</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-ib@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>None</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-none@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Table</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-tbl@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>

        <article className="dc-u-mh-4">
          <h4>Table Cell</h4>
          <table className="table dc-u-w-auto">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Pixel Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(whitelist(blacklist, breakpoints)).map(
                ([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-d-tbl-cell@${dashify(
                        name
                      )}`}</code>
                    </td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </article>
      </Page>
    </main>
  );
};
