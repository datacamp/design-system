/* eslint-disable import/no-anonymous-default-export */
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Louis Bailey - 17 May 2019"
        section="Articles"
        subSection="The future of design tokens"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>Tokens are the core of the design system</h4>
            <p>
              As explained in the{' '}
              <a href="/component-library/tokens">documentation</a>, all the
              primitive values required for styling are included in{' '}
              <code>@datacamp/waffles-tokens</code> package. It is important to
              have this information available in many different environments;
              whether that is for engineers working with different technologies,
              designers in Sketch, or anybody producing content that should
              stylistically conform.
            </p>
            <h4>Current format</h4>
            <p>
              Up until recently tokens have been available in a{' '}
              <code>tokens.json</code> file exposed from{' '}
              <code>@datacamp/waffles-core</code>. We have now extracted this
              data into its own package <code>@datacamp/waffles-tokens</code> in
              order to reduce the need for teams to import the specific
              implementation of core if they don&apos;t need scss files. This
              file is now built from the source code in the tokens package. We
              encourage teams to import this instead of the version from core as
              in the future only the tokens package will expose these values.
            </p>
            <p>
              This file contains quite a flat data structure that can be seen in
              the <a href="/component-library/tokens">documentation</a>. This
              makes all the values easily accessible however there is little
              flexibility for consumers. Also as we introduce concepts such as
              full color palettes and intention based styling it will be hard to
              specify exactly what is required.
            </p>
            <h4>The future</h4>
            <p>
              The fact that we are using{' '}
              <a href="https://amzn.github.io/style-dictionary/#/">
                Style Dictionary
              </a>{' '}
              to build our tokens gives us a lot of control and flexibility in
              how they are output. As well as the main{' '}
              <code>core-tokens.json</code> file, we are also building scss
              variables and a more complete json file which for the moment is
              called <code>future-tokens.json</code>. This file is much closer
              to the source format. All the values are nested within a tree
              structure that allows for more variations in token type.
              Additionally properties can be augmented with other values to give
              more options to consumers. As an example let&apos;s have a look at
              how to access the hex value of our primary colour with the two
              different systems.
            </p>
            <ul>
              <li>
                From <code>core-tokens.json</code>
                <pre>
                  <code>const primaryColor = tokens.colors.primary;</code>
                </pre>
              </li>
              <li>
                From <code>future-tokens.json</code>
                <pre>
                  <code>
                    const primaryColor = tokens.color.opaque.primary.value.hex;
                  </code>
                </pre>
              </li>
            </ul>
            <p>
              While this is a little more convoluted, it adds a great deal of
              flexibility as not only the hex value is exposed. RGB and HSL
              strings are also available, and there is an element of structure
              that will become essential as we expand the color palette.
            </p>
            <h4>
              <span aria-label="" role="img">
                ⚠️
              </span>{' '}
              Warning
            </h4>
            <p>
              Although this file can be imported now from{' '}
              <code>@datacamp/waffles-tokens/lib/future-tokens.json</code>, it
              is not recommended as the exact tree structure is still under
              consideration. Within the other waffles packages we will be using
              this import as we can absorb breaking changes whilst we iterate on
              the format. At some point in the future we hope that the structure
              of these tokens will stabilise. At that point in time we will make
              it the default export from the package. Feel free to experiment
              with the <code>future-tokens.json</code> but do so at your own
              peril!
            </p>
          </div>
        </section>
      </Page>
    </main>
  );
};
