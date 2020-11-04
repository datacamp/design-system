/* eslint-disable import/no-anonymous-default-export */
/* @jsx jsx */
import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const components = [
  { docLink: '/component-library/tag', name: 'Tag', status: 'Available' },
  { docLink: '/component-library/icons', name: 'Icon', status: 'Available' },
  { docLink: '/component-library/text', name: 'Text', status: 'Available' },
  { docLink: '/component-library/card', name: 'Card', status: 'Available' },
  { docLink: '/component-library/button', name: 'Button', status: 'Available' },
  { docLink: '/component-library/modals', name: 'Modals', status: 'Available' },
  {
    docLink: '/component-library/form-elements',
    name: 'Form Elements',
    status: 'Available',
  },
  {
    docLink: '/component-library/button',
    name: 'Tooltips',
    status: 'Available',
  },
  { docLink: '/component-library/toast', name: 'Toast', status: 'Available' },
  {
    docLink: '/component-library/text',
    name: 'Badge + Pill',
    status: 'Available',
  },
  { docLink: '/component-library/text', name: 'Link', status: 'Available' },

  { name: 'Checkbox', status: 'Planned' },
  { name: 'Switch', status: 'Planned' },
  { name: 'Assets', status: 'Planned' },

  { name: 'Navigation', status: 'Under Consideration' },
  { name: 'Code Editor', status: 'Under Consideration' },
  { name: 'Dropdown Menu', status: 'Under Consideration' },
  { name: 'Resizable Elements', status: 'Under Consideration' },
  { name: 'Progress Bar', status: 'Under Consideration' },
  { name: 'Fluid Stack Layout', status: 'Under Consideration' },
  { name: 'Collapsing Sections', status: 'Under Consideration' },
  { name: 'Avatars', status: 'Under Consideration' },
  { name: 'Key Value List', status: 'Under Consideration' },
  { name: 'Data Table', status: 'Under Consideration' },
  { name: 'Autocomplete', status: 'Under Consideration' },
  { name: 'Charts', status: 'Under Consideration' },
  { name: 'Tabs', status: 'Under Consideration' },
];

const tagColorMap = {
  Available: tokens.color.primary.green.value.hex,
  Planned: tokens.color.primary.purple.value.hex,
  'Under Consideration': tokens.color.neutral.beige300.value.hex,
};

export default () => {
  return (
    <main>
      <CustomHeader
        description="Use styled react components to build user interfaces"
        section="Component Library"
        subSection="Introduction"
      />

      <Page>
        <section className="dc-u-maxw-800">
          <div className="dc-card dc-u-p-24">
            <h4>Usage</h4>
            <p>
              The waffles component library is a collection of independent
              styled react components. To use them in applications, simply
              install the relevant package and use the components as documented
              on the relevant page on this site.
            </p>
          </div>
        </section>

        <section className="dc-u-maxw-800 dc-u-mt-32">
          <div className="dc-card dc-u-p-24">
            <h4>Component status</h4>
            <p>
              The waffles component library is an evolving system comprised of
              components big and small. Below you can see a summary of the
              currently available components along with those that are planned
              for the future. If you like to contribute to waffles, get in touch
              with the design system squad. We are always looking to collaborate
              to ship items on this list or any other ideas you may have.
            </p>
            <table className="dc-table dc-u-w-100pc">
              <thead className="dc-table__thead">
                <tr>
                  <th className="dc-table__th">Name</th>
                  <th className="dc-table__th" css={{ textAlign: 'right' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {components.map(({ docLink, name, status }) => (
                  <tr key={name}>
                    <td>{docLink ? <a href={docLink}>{name}</a> : name}</td>
                    <td css={{ textAlign: 'right' }}>
                      <Badge color={tagColorMap[status]} size="large">
                        {status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
