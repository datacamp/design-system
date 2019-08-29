import Tag from '@datacamp/waffles-tag';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const components = [
  { docLink: '/component-library/tag', name: 'Tag', status: 'Available' },
  { docLink: '/component-library/icons', name: 'Icon', status: 'Available' },
  { docLink: '/component-library/text', name: 'Text', status: 'Available' },
  { docLink: '/component-library/card', name: 'Card', status: 'Available' },
  { name: 'Pill', status: 'Planned' },
  { name: 'Badge', status: 'Planned' },
  { name: 'Table', status: 'Planned' },
];

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
              for the future.
            </p>
            <table className="dc-table dc-u-w-100pc">
              <thead className="dc-table__thead">
                <tr>
                  <th className="dc-table__th">Name</th>
                  <th className="dc-table__th">Status</th>
                </tr>
              </thead>
              <tbody>
                {components.map(({ name, status, docLink }) => (
                  <tr key={name}>
                    <td>{docLink ? <a href={docLink}>{name}</a> : name}</td>
                    <td>
                      <Tag color={status === 'Available' ? 'green' : 'orange'}>
                        {status}
                      </Tag>
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
