import React from 'react';
import { Page, HintSpecimen } from 'catalog';

import { spatial } from '@datacamp/waffles-core/tokens.json';
import CustomHeader from '../../../components/CustomHeader';

const docsCustomBgLight = {
  background: '#f9fafa',
};
const docsCustomP = {
  margin: '8px',
};
const Sizes = Array.from(spatial.sizes.split(' '));

export default () => {
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Margin"
        description="Apply or clear margins."
      />
      <Page>
        <header>
          <h2>Additive</h2>
          <p>
            These classes add <code>margin</code> properties to an element, so
            they can be used for building or customizing an element.
          </p>
        </header>

        <h4 className="dc-u-mb-0 dc-u-minw-100pc">All</h4>
        <HintSpecimen>
          Margin utilites can be used with pixels using the format{' '}
          <code>.dc-u-m-[size]</code>, where <code>size</code> is one of the
          following:
          <code>{Sizes.join(', ')}</code>
        </HintSpecimen>

        <table className="table dc-u-mt-16">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {Sizes.map(size => (
              <tr key={size}>
                <td>
                  <code className="dc-u-ws-nowrap">{`.dc-u-m-${size}`}</code>
                </td>
                <td>
                  <code>margin: {size}px;</code>
                </td>
                <td style={docsCustomBgLight}>
                  <div
                    className={`dc-u-fs-micro dc-u-bgc-white dc-u-b dc-u-m-${size}`}
                  >
                    {size}px
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-m-auto</code>
              </td>
              <td>
                <code>margin: auto;</code>
              </td>
              <td style={docsCustomBgLight}>
                <div className="dc-u-fs-micro dc-u-bgc-white dc-u-b dc-u-m-auto">
                  auto
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Top</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-top</code> specifically, use{' '}
            <code>.dc-u-mt-[size]</code>, where <code>size</code> is{' '}
            <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mt-2</code>, will output{' '}
            <code>margin-top: 2px;</code>
          </p>
        </div>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Right</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-right</code> specifically, use{' '}
            <code>.dc-u-mr-[size]</code>, where <code>size</code> is{' '}
            <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mt-2</code>, will output{' '}
            <code>margin-right: 2px;</code>
          </p>
        </div>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Bottom</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-bottom</code> specifically, use{' '}
            <code>.dc-u-mb-[size]</code>, where <code>size</code> is{' '}
            <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mt-2</code>, will output{' '}
            <code>margin-bottom: 2px;</code>
          </p>
        </div>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Left</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-left</code> specifically, use{' '}
            <code>.dc-u-ml-[size]</code>, where <code>size</code> is{' '}
            <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mt-2</code>, will output{' '}
            <code>margin-left: 2px;</code>
          </p>
        </div>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Horizontal</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-left</code> and <code>margin-right</code>{' '}
            together, use <code>.dc-u-mh-[size]</code>, where <code>size</code>{' '}
            is <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mh-2</code>, will output{' '}
            <code>margin-left: 2px;margin-right: 2px;</code>
          </p>
        </div>

        <h4 className="dc-u-mb-0 dc-u-mt-32 dc-u-minw-100pc">Vertical</h4>
        <div className="dc-card dc-u-mt-16">
          <p className="dc-u-mt-0">
            To set the <code>margin-bottom</code> and <code>margin-top</code>{' '}
            together, use <code>.dc-u-mv-[size]</code>, where <code>size</code>{' '}
            is <code>auto</code> or one of the following:{' '}
            <code>{Sizes.join(', ')}</code>
          </p>
          <p className="dc-u-mb-0">
            Example: <code>.dc-u-mv-2</code>, will output{' '}
            <code>margin-bottom: 2px;margin-top: 2px;</code>
          </p>
        </div>

        <header className="dc-u-mt-32">
          <h2>Subtractive</h2>
          <p>
            These classes add <code>margin</code> properties to an element, so
            they can be used for building or customizing an element.
          </p>
          <p>
            These classes remove <code>margin</code>, so they can be used for
            customizing an element that has <code>margin</code> applied via CSS.
          </p>
        </header>

        <table className="table dc-u-mt-16">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-m-none</code>
              </td>
              <td>
                <code>margin: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-m-none"
                  style={docsCustomP}
                >
                  Paragraph with default margins
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-mt-0</code>
              </td>
              <td>
                <code>margin-top: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-mt-0"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-mr-0</code>
              </td>
              <td>
                <code>margin-right: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-mr-0"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-mb-0</code>
              </td>
              <td>
                <code>margin-bottom: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-mb-0"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-ml-0</code>
              </td>
              <td>
                <code>margin-left: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-ml-0"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-mh-none</code>
              </td>
              <td>
                <code>margin-left: 0; margin-right: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-mh-none"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-mv-none</code>
              </td>
              <td>
                <code>margin-bottom: 0; margin-top: 0;</code>
              </td>
              <td style={docsCustomBgLight}>
                <p
                  className="dc-u-bgc-white dc-u-b dc-u-mv-none"
                  style={docsCustomP}
                >
                  Paragraph with `margin: 8px;` set in CSS
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Page>
    </main>
  );
};
