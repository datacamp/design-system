import Markdown from '@datacamp/waffles-markdown';
import { Code, Heading, Paragraph } from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The markdown component"
        section="Component Library"
        subSection="Markdown"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A component to render markdown using the styles of this design
              system. It is available from the{' '}
              <code>@datacamp/waffles-markdown</code> package on npm. Note this
              is an initial version of this component and so is limited in its
              functionality. This documentation is also minimal, so if you are
              intending to use this component, please contact the design system
              squad for assistance.
            </Paragraph>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Properties
            </Heading>
            <Paragraph>
              The markdown component uses a <Code>source</Code> property to
              determine what to render.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={
                      '<Markdown\n  source={`\n## Example heading\nThis is some content\n`}\n/>;'
                    }
                    scope={{ Markdown }}
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
