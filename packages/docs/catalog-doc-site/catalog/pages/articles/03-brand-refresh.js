import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Louis Bailey"
        section="Articles"
        subSection="Brand Refresh"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <p>
              As part of the brand refresh, there are a number of changes made
              to waffles packages. This article provides a guide of how to get
              the new branding into your applications, and what will probably
              have to be changed within your codebases.
            </p>

            <h3>How to upgrade?</h3>

            <p>
              All brand refresh updates to waffles packages are being published
              to npm under the <code>beta</code> tag. New versions are
              continually being published under this tag as we work on the brand
              refresh, so be sure to use the latest <code>beta</code> tagged
              packages.
            </p>

            <h3>Breaking Changes</h3>
            <p>
              Unsurprisingly there are a number of breaking changes to the
              packages. What follows are the details of which packages have had
              breaking changes and some proposed solutions to keep in mind when
              upgrading.
            </p>
            <ul>
              <li>
                <code>@datacamp/waffles-tokens</code>
                <ul>
                  <li>Standard font has changed to Studio Feixen Sans.</li>
                  <li>Monospace font has changed to Jetbrains Mono.</li>
                  <li>
                    Letter Spacing and Line Heights now reflect the new fonts.
                  </li>
                  <li>
                    Gradients section has been removed. There are no longer any
                    gradients, please use solid colours for backgrounds going
                    forwards.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-core</code>
                <ul>
                  <li>
                    All gradients have been removed. This means that all scss
                    variables of the form <code>$dc-gradient-*</code> have been
                    removed. Also all utility classes of the form{' '}
                    <code>.dc-u-bgg-*</code> no longer exist. Make sure to
                    search your codebase for references to these and replace
                    with solid colours.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-assets</code> &{' '}
                <code>@datacamp/waffles-asset-components</code>
                <ul>
                  <li>
                    All existing DataCamp logos have been removed. The new logos
                    follow a different naming convention. We recommend moving
                    over to use the new <code>DatacampLogo</code> component in
                    react apps. When outside of a react environment, please
                    check with a designer as to which logo asset is the most
                    appropriate for your use case.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </Page>
    </main>
  );
};
