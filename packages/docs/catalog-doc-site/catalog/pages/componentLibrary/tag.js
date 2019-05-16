import React from 'react';
import { Page, HintSpecimen } from 'catalog';
import Tag from '@datacamp/waffles-tag';
import CustomHeader from '../../components/CustomHeader';
import LiveEditCells from '../../components/LiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Component Library"
        subSection="Tag"
        description="The tag component"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <HintSpecimen warning>
            This component will soon be deprecated in favour of the upcoming
            Badge/Pill.
          </HintSpecimen>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>About</h4>
            <p>
              A small tag element to show small numbers or single words. This is
              the only export from the <code>@datacamp/waffles-tag</code>{' '}
              package.
            </p>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>Properties</h4>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th style={{ minWidth: '275px' }}>Example code</th>
                  <th>Live Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>children</th>
                  <td>string - required</td>
                  <td>The content of the tag.</td>
                  <LiveEditCells scope={{ Tag }} code="<Tag>example</Tag>" />
                </tr>
                <tr className="dc-table__tr">
                  <th>color</th>
                  <td>string - optional</td>
                  <td>
                    The color of the tag. This should be one of the colors from
                    the <a href="/component-library/tokens">design tokens</a>.
                  </td>
                  <LiveEditCells
                    scope={{ Tag }}
                    code={'<Tag color="green">\n  content\n</Tag>'}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>textColor</th>
                  <td>string - optional</td>
                  <td>
                    The color of the text. This will default to a contrasting
                    color to the background if none is provided.
                  </td>
                  <LiveEditCells
                    scope={{ Tag }}
                    code={'<Tag textColor="red">\n  content\n</Tag>'}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>rounded</th>
                  <td>boolean - optional</td>
                  <td>
                    Sets the border-radius of the tag to DataCamp&apos;s default
                    radius.
                  </td>
                  <LiveEditCells
                    scope={{ Tag }}
                    code={'<Tag rounded>\n  content\n</Tag>'}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>extraClass</th>
                  <td>string - optional</td>
                  <td>Any extra css class required for the element.</td>
                  <LiveEditCells
                    scope={{ Tag }}
                    code={
                      '<Tag\n  extraClass="dc-u-fs-h4"\n>\n  content\n</Tag>'
                    }
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
