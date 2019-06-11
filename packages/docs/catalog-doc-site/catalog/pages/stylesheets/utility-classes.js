import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Stylesheets"
        subSection="Utility Classes"
        description="A utility class applies a single rule or a very simple, universal pattern."
      />

      <Page>
        <section className="dc-u-w-800">
          <div className="dc-card dc-u-p-24">
            <h4>Overview</h4>

            <ul>
              <li>
                <a href="/stylesheets/utility-classes/background">Background</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/border-radius">
                  Border Radius
                </a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/border">Border</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/box-shadow">Box Shadow</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/color">Color</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/cursor">Cursor</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/display">Display</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/flexbox-containers">
                  Flexbox Containers
                </a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/flexbox-items">
                  Flexbox Items
                </a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/font">Font</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/height">Height</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/letter-spacing">
                  Letter Spacing
                </a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/line-height">
                  Line Height
                </a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/list">List</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/margin">Margin</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/max-height">Max Height</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/max-width">Max Width</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/min-height">Min Height</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/min-width">Min Width</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/opacity">Opacity</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/overflow">Overflow</a>
              </li>
              <li>
                <a href="/stylesheets/utility-classes/word-break">Word Break</a>
              </li>
            </ul>

            <table className="dc-u-ta-center dc-u-w-100pc">
              <tr>
                <td className="dc-u-ta-left">
                  <a href="/stylesheets/utility-classes/background">
                    Background
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
