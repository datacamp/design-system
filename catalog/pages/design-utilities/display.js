import React from 'react';
import { Page } from 'catalog';

export default () => {
  return (    
    <Page>
      <header>
        <p>These classes add <code>display</code> to an element, so they can be used for building or customizing an element.</p>
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
    </Page>
  );
};