import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design Utilities"
        subSection="Intro"
        description="Utility classes are the foundation of how UI is built at DataCamp."
      >
      </CustomHeader>

      <Page>
        <section>
          <h4 class="dc-u-mb-8">Waffles Needs You!</h4>
          <div class="dc-card dc-u-p-24">
            Uh oh, this page isn't baked yet. <a href="https://github.com/datacamp/design-system">Help make some Waffles</a>.
          </div>
        </section>
      </Page>
    </main>
  );
};
