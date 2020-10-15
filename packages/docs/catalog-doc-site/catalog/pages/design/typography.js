/* @jsx jsx */
import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import _ from 'lodash';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Typgraphy is key to all aspects of our brand."
        section="Design"
        subSection="Typography"
      />

      <Page>
        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h4>Font</h4>
            <p>
              The DataCamp font is Studio Feixen Sans. For full details on
              usage, download the{' '}
              <a href="/DC Guidelines (July 8).pdf">brand guidelines</a>.
            </p>
            <h4>How can I include this font in my application?</h4>
            <p>
              When building for the web, using the waffles packages detailed on
              this site will correctly add this font and associated styling to
              the application. Check out the docs for{' '}
              <a href="/component-library/text">waffles-text</a> in particular
              for usage.
            </p>
            <h4>Our new brand font isn’t available in G Suite—help!</h4>
            <p>
              We know, for a company that spends so much time in Google docs and
              slides, this is a tough one! It’s important to remember that we
              chose a non-open-source font for a reason: We want to build a
              brand that’s unique to DataCamp, and that includes using a font
              that won’t be as widely used by other organizations.
            </p>
            <p>
              The solution: To keep our Google materials as on-brand as
              possible, please use Poppins in all public-facing Google docs and
              slides. It’s not an exact match to our new brand font, but Poppins
              comes closest to reflecting the style of our new branding.
            </p>
            <h4>How can I use the font for something else?</h4>
            <p>
              If you're deisgning or making something that isn't covered above,
              you will probably need to install the font on your computer. For
              DataCamp employees, please reach out in the{' '}
              <a href="https://slack.com/app_redirect?channel=design-system-squad">
                #design-system-squad
              </a>{' '}
              slack channel and we can provide you with the font files.
            </p>
          </div>
        </section>
      </Page>
    </main>
  );
};
