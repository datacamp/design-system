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

            <p>
              Note that all waffles packages have had updates to colours, fonts
              etc. It is important to update all waffles packages to the beta
              versions in order to get all the updates.
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
                  <li>
                    Transparent colours have been removed. When using the
                    default export, <code>whiteTransparent</code> and{' '}
                    <code>blackTransparent</code> properties have been removed.
                    When using <code>future-tokens</code>, the whole{' '}
                    <code>color.transparent</code> section has been removed.
                  </li>
                  <li>
                    All the colours have changed. The following colours have
                    been removed from all forms of tokens, and will need to be
                    replaced:
                    <ul>
                      <li>
                        <code>geyser</code>
                      </li>
                      <li>
                        <code>grey</code>
                      </li>
                      <li>
                        <code>greyDark</code>
                      </li>
                      <li>
                        <code>greyLight</code>
                      </li>
                      <li>
                        <code>greyLighter</code>
                      </li>
                      <li>
                        <code>greyOslo</code>
                      </li>
                      <li>
                        <code>porcelain</code>
                      </li>
                      <li>
                        <code>primary</code>
                      </li>
                      <li>
                        <code>primaryDark</code>
                      </li>
                      <li>
                        <code>primaryDarker</code>
                      </li>
                      <li>
                        <code>primaryDarkest</code>
                      </li>
                      <li>
                        <code>primaryLight</code>
                      </li>
                      <li>
                        <code>primaryLighter</code>
                      </li>
                      <li>
                        <code>primaryLightest</code>
                      </li>
                      <li>
                        <code>raven</code>
                      </li>
                      <li>
                        <code>secondary</code>
                      </li>
                      <li>
                        <code>secondaryLight</code>
                      </li>
                      <li>
                        <code>white</code>
                      </li>
                    </ul>
                    Check the tokens documentation for details of the currently
                    available colours.
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
                  <li>
                    Transparent colours have been removed. This means that the
                    variables <code>$dc-white-transparent</code>,{' '}
                    <code>$dc-black-transparent</code>, and{' '}
                    <code>$white-transparent</code> are no longer available.
                    Also the following utility classes have been removed:
                    <ul>
                      <li>
                        <code>.dc-u-bgc-black-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-bgc-white-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-bc-black-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-bc-white-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-color-black-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-color-white-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-fill-black-transparent</code>
                      </li>
                      <li>
                        <code>.dc-u-fill-white-transparent</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    All the colours detailed above have had the associated scss
                    variables and utility classes removed. These come in the
                    following formats where the <code>*</code> is the name of
                    the deprecated colour:
                    <ul>
                      <li>
                        <code>$dc-*</code>
                      </li>
                      <li>
                        <code>.dc-u-bgc-*</code>
                      </li>
                      <li>
                        <code>.dc-u-bc-*</code>
                      </li>
                      <li>
                        <code>.dc-u-color-*</code>
                      </li>
                      <li>
                        <code>.dc-u-fill-*</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    A number of already deprecated scss variables such as{' '}
                    <code>$accent</code> have been removed.
                  </li>
                  <li>
                    The <code>getColor</code> and <code>getContrastColor</code>{' '}
                    javascript functions have been removed. Please access color
                    values directly from the tokens.
                  </li>
                  <li>
                    More details on deleted classes/components coming soon...
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
                  <li>
                    There are some new assets to reflect the ALPA loop, check
                    the asset docs for more information on how to use.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-tag</code>
                <ul>
                  <li>
                    The Tag component has been removed. The Badge component from
                    the <code>@datacamp/waffles-text</code> package should be
                    used instead.
                  </li>
                  <li>
                    The scss styles have been updated to bring the appearance in
                    line with the Badge component. The following classes have
                    been removed:
                    <ul>
                      <li>
                        <code>.dc-tag__close</code>
                      </li>
                      <li>
                        <code>.dc-tag--hue</code>
                      </li>
                      <li>
                        <code>.dc-tag--green</code>
                      </li>
                      <li>
                        <code>.dc-tag--primary-light</code>
                      </li>
                      <li>
                        <code>.dc-tag--secondary</code>
                      </li>
                      <li>
                        <code>.dc-tag--red</code>
                      </li>
                      <li>
                        <code>.dc-tag--white</code>
                      </li>
                    </ul>
                    Please now use the utility classes to set the color of your
                    tags. Check the <a href="/stylesheets/tag">documentation</a>{' '}
                    for more detail.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-text</code>
                <ul>
                  <li>
                    The <code>BetaBadge</code> component has been removed. This
                    was previously a wrapper around the <code>Badge</code>{' '}
                    component, that added the purple gradient background. Since
                    there are no longer gradients, the <code>Badge</code>{' '}
                    component can be used.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-button</code>
                <ul>
                  <li>
                    The <code>cta</code> intent has been removed from the button
                    component. In most cases <code>success</code> should be used
                    instead.
                  </li>
                  <li>
                    There is a new <code>b2b</code> intent that makes the button
                    yellow for use on b2b marketing pages.
                  </li>
                  <li>
                    There is a new <code>inverted</code> appearance that has
                    white text. It works in the same way as the existing{' '}
                    <code>default</code> appearance, in that it is only an
                    outline, but can be used against dark backgrounds.
                  </li>
                  <li>
                    Some of the scss class colours have been adapted to match
                    the react intents, but no classes have been deprecated.
                    Check the button docs to see the specific mapping, and
                    contact the design system team if there is a variation you
                    require and you are still using scss styling.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-popover</code>
                <ul>
                  <li>
                    This package/styles was only used in main-app, so has been
                    completely deprecated. If you find yourself working on
                    something that needs this, please contact the design system
                    team.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-tabbed-nav</code>
                <ul>
                  <li>
                    This package/styles was only used in inf selfserve, so has
                    been completely deprecated. If you find yourself working on
                    something that needs this, please contact the design system
                    team.
                  </li>
                </ul>
              </li>
              <li>
                <code>@datacamp/waffles-loaders</code>
                <ul>
                  <li>
                    This is a new package that contains a spinner based on the
                    new logo. Check the documentation for more details.
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
