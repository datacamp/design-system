import Card from '@datacamp/waffles-card';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The card component"
        section="Component Library"
        subSection="Card"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A primitive layout component to display content, available from
              the <code>@datacamp/waffles-card</code> package on npm. It can be
              used both as a building block for other components, and also as a
              way to separate content into logical sections.
            </Paragraph>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Properties
            </Heading>
            <Paragraph>
              The Card component takes the same <code>className</code> prop as
              the other components. By default it will render using an html{' '}
              <code>div</code> element, but this can be overriden using the{' '}
              <code>as</code> prop. To style the card an <code>elevation</code>{' '}
              can be provided between 0 and 4, this will set the border or
              shadow of the Card.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={
                      '<Card as="section" elevation={0}>\n  <Paragraph>Here is some content</Paragraph>\n</Card>'
                    }
                    scope={{ Card, Paragraph }}
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
