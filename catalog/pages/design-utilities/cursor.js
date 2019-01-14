import React from 'react';
import { Page } from 'catalog';

const docsHasBoxShadow = {
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15)'
};

export default () => {
  return (    
    <Page>
      <header>
        <h2>Additive</h2>
        <p>These classes add <code>cursor</code> properties to an element, so they can be used for building or customizing an element.</p>
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
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-auto</code></td>
            <td>Sets <code>cursor: auto;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-auto">Hover for the auto cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-default</code></td>
            <td>Sets <code>cursor: default;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-default">Hover for the default cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-grab</code></td>
            <td>Sets <code>cursor: grab;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-grab">Hover for the grab cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-help</code></td>
            <td>Sets <code>cursor: help;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-help">Hover for the help cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-move</code></td>
            <td>Sets <code>cursor: move;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-move">Hover for the move cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-pointer</code></td>
            <td>Sets <code>cursor: pointer;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-pointer">Hover for the pointer cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-text</code></td>
            <td>Sets <code>cursor: text;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-text">Hover for the text cursor</p></td>
          </tr>
          <tr>
            <td><code className="dc-u-ws-nowrap">.dc-u-cursor-not-allowed</code></td>
            <td>Sets <code>cursor: not-allowed;</code></td>
            <td><p className="dc-u-m-none dc-u-cursor-not-allowed">Hover for the not-allowed cursor</p></td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
};