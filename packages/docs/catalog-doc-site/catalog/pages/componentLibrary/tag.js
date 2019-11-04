import Tag from '@datacamp/waffles-tag';
import TagMetadata from '@datacamp/waffles-tag/componentMetadata.json';
import { HintSpecimen, Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';
import PropTable from '../../components/PropTable';

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
            <table>
              <LazyLiveEditCells code={`<Tag>thing</Tag>`} scope={{ Tag }} />
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>Properties</h4>
            <PropTable
              componentData={TagMetadata['src/index.tsx'][0]}
              componentName="Tag"
            />
          </div>
        </section>
      </Page>
    </main>
  );
};
