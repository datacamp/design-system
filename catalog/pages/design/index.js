import React from 'react';
import { Page, HintSpecimen } from 'catalog';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design"
        subSection="Intro"
        description="Find out how we approach the visual elements of our interface with purpose."
      />

      <Page>
        <section className="dc-u-maxw-800">
          <div className="dc-card dc-u-p-24">
            <h4>Usage</h4>
            <p>The Design package contains the "core" styles that are necessary to build UIs at DataCamp. Ingredients is an option that will import all of the styles, including <a href="/design-utilities">Design Utilities</a>.</p>

            <h5 id="installation">Install Core</h5>
            <p>
              <code>npm i @datacamp/waffles-core</code>
            </p>

            <h5 className="dc-u-mb-16 dc-u-mt-32">Choose Your Own Adventure</h5>

            <article className="dc-u-fx">
              <div className="dc-u-bgc-grey-lighter dc-u-brad-circle dc-u-fx-center dc-u-h-48 dc-u-w-48"><strong>A</strong></div>
              <div className="dc-u-pl-16">
                <h5 className="dc-u-mb-0 dc-u-mt-0">SCSS to Build</h5>
                <p className="dc-u-mb-8 dc-u-mt-4">Import all of the Design SCSS as part of your build.</p>
                <code className="dc-u-ml-0">@import "@datacamp/waffles-core/lib/scss/ingredients";</code>
              </div>
            </article>

            <article className="dc-u-fx dc-u-mt-32">
              <div className="dc-u-bgc-grey-lighter dc-u-brad-circle dc-u-fx-center dc-u-h-48 dc-u-w-48"><strong>B</strong></div>
              <div className="dc-u-pl-16">
                <h5 className="dc-u-mb-0 dc-u-mt-0">Tokens Only</h5>
                <p className="dc-u-mb-8 dc-u-mt-4">Import tokens for global use or within styled components. See <a href="https://github.com/datacamp/design-system/blob/master/packages/core/tokens.json">all tokens</a> and an example <code>import</code> below.</p>
                <code className="dc-u-ml-0">import &#123;colors&#125; from '@datacamp/waffles-core/tokens.json';</code>
              </div>
            </article>

            <article className="dc-u-fx dc-u-mt-32">
              <div className="dc-u-bgc-grey-lighter dc-u-brad-circle dc-u-fx-center dc-u-h-48 dc-u-w-48"><strong>C</strong></div>
              <div className="dc-u-pl-16">
                <h5 className="dc-u-mb-0 dc-u-mt-0">CSS from a CDN</h5>
                <p className="dc-u-mb-8 dc-u-mt-4">Coming soon to a Waffles near you. You'll be able to <code>link</code> a stylesheet without building SCSS.</p>
                <code className="dc-u-ml-0">&lt;link href="???" rel="stylesheet" /&gt;</code>
              </div>
            </article>
          </div>
        </section>

        <section className="dc-u-maxw-800 dc-u-mt-32">
          <div className="dc-card dc-u-p-24">
            <h4>Converting from the Style Guide SCSS</h4>

            <HintSpecimen warning>
              Multiple Core Components were deprecated. The SCSS for these items needs to be manually brought into an app that uses them.

              <p class="dc-u-mt-8">Deprecated items: <strong><a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_circle.scss">Circles</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_collapse.scss">Collapse Toggle</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_headers.scss">Headers</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_headstone.scss">Headstones</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_image-file-uploader.scss">Image File Uploader</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_range-slider.scss">Range Slider</a>, <a href="https://github.com/datacamp/styleguide/blob/master/src/assets/toolkit/styles/core-components/_sidebar-navigation.scss">Sidebar Navigation</a></strong></p>
            </HintSpecimen>

            <ol className="dc-u-pl-16">
              <li>
                Choose and complete an <a href="#installation">installation</a> option.
              </li>
              <li>
                Import any components (SCSS or React) that were being imported from the style guide.
              </li>
              <li>
                If your app uses deprecated items from Core, add a <code>legacy</code> file and copy the SCSS from the style guide into it. <a href="https://github.com/datacamp/main-app/blob/master/app/assets/stylesheets/outdated/_legacy.scss">Example in main-app</a>.
              </li>
              <li>
                Remove the style guide imports and
                <code>npm uninstall @datacamp/styleguide</code>
              </li>
            </ol>
          </div>
        </section>
      </Page>
    </main >
  );
};