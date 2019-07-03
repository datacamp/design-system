import Tag from '@datacamp/waffles-tag';
import { HintSpecimen, Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The tag component"
        section="Component Library"
        subSection="Tag"
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
                  <LazyLiveEditCells
                    code="<Tag>example</Tag>"
                    scope={{ Tag }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>color</th>
                  <td>string - optional</td>
                  <td>
                    The color of the tag. This should be one of the colors from
                    the <a href="/component-library/tokens">design tokens</a>.
                  </td>
                  <LazyLiveEditCells
                    code={'<Tag color="green">\n  content\n</Tag>'}
                    scope={{ Tag }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>textColor</th>
                  <td>string - optional</td>
                  <td>
                    The color of the text. This will default to a contrasting
                    color to the background if none is provided.
                  </td>
                  <LazyLiveEditCells
                    code={'<Tag textColor="red">\n  content\n</Tag>'}
                    scope={{ Tag }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>rounded</th>
                  <td>boolean - optional</td>
                  <td>
                    Sets the border-radius of the tag to DataCamp&apos;s default
                    radius.
                  </td>
                  <LazyLiveEditCells
                    code={'<Tag rounded>\n  content\n</Tag>'}
                    scope={{ Tag }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>extraClass</th>
                  <td>string - optional</td>
                  <td>Any extra css class required for the element.</td>
                  <LazyLiveEditCells
                    code={
                      '<Tag\n  extraClass="dc-u-fs-h4"\n>\n  content\n</Tag>'
                    }
                    scope={{ Tag }}
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
