import * as Icons from '@datacamp/waffles-icons';
import { colors } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import { chunk } from 'lodash';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The icon components"
        section="Component Library"
        subSection="Icons"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>About</h4>
            <p>
              A package containing all the icons available within waffles.
              Available as <code>@datacamp/waffles-icons</code> on npm.
            </p>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>React API</h4>
            <p>
              The main export of the package is a set of react components. These
              can be individually be imported using this syntax:
              <pre>
                <code>
                  {"import { AddCircleIcon } from '@datacamp/waffles-icons';"}
                </code>
              </pre>
              All these components accept the same set of properties as
              described below.
            </p>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th style={{ minWidth: '310px' }}>Example code</th>
                  <th>Live Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>size</th>
                  <td>number (12, 18, or 24) - optional</td>
                  <td>
                    The size in pixels to display the icon. This defaults to 18.
                  </td>
                  <LazyLiveEditCells
                    code={'<AddCircleIcon size={24} />'}
                    scope={{ AddCircleIcon: Icons.AddCircleIcon }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>color</th>
                  <td>string - optional</td>
                  <td>
                    The color of the icon. This defaults to
                    &quot;currentColor&quot;, and so will match the surrounding
                    text. If a custom color is required, then this prop can
                    accept any valid css color. We recommend using the{' '}
                    <a href="/component-library/tokens">waffles-tokens</a> to
                    maintain a consistent visual experience.
                  </td>
                  <LazyLiveEditCells
                    code={`<>
  <AddCircleIcon color="#3AC" />
  <br />
  <AddCircleIcon color={colors.primary} />
</>`}
                    scope={{ AddCircleIcon: Icons.AddCircleIcon, colors }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>className</th>
                  <td>string - optional</td>
                  <td>
                    Any extra className to pass to the root svg element. Can be
                    used to apply any extra custom styling required.
                  </td>
                  <LazyLiveEditCells
                    code={'<AddCircleIcon className="dc-u-wh-36" />'}
                    scope={{ AddCircleIcon: Icons.AddCircleIcon }}
                  />
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>Components</h4>
            <p>All available components are presented below:</p>
            <table>
              <tbody>
                {chunk(Object.entries(Icons), 3).map(icons => (
                  <tr>
                    {icons.map(([name, Component]) => (
                      <td>
                        <Component /> <span>{name}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>Sprites</h4>
            <p>
              For those that cannot use react components, there are also svg
              sprites available in the waffles-icons package. There are five
              different formats available at the file paths listed below. The
              differences between these different sprites are detailed{' '}
              <a href="https://github.com/jkphl/svg-sprite/blob/HEAD/docs/configuration.md#output-modes">
                here
              </a>
              . Feel free to use whichever makes most sense for your use case.
            </p>
            <ul>
              <li>
                <code>
                  @datacamp/waffles-icons/sprites/css/svg/sprite.css-bde2e71c.svg
                </code>
              </li>
              <li>
                <code>
                  @datacamp/waffles-icons/sprites/defs/svg/sprite.defs.svg
                </code>
              </li>
              <li>
                <code>
                  @datacamp/waffles-icons/sprites/stack/svg/sprite.stack.svg
                </code>
              </li>
              <li>
                <code>
                  @datacamp/waffles-icons/sprites/symbol/svg/sprite.symbol.svg
                </code>
              </li>
              <li>
                <code>
                  @datacamp/waffles-icons/sprites/view/svg/sprite.view-f796bea8.svg
                </code>
              </li>
            </ul>
          </div>
        </section>
      </Page>
    </main>
  );
};
