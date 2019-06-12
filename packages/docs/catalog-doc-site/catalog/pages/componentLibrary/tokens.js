import tokens from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Component Library"
        subSection="Tokens"
        description="The primitive values used to style anything and everything"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <h4>About</h4>
            <p>
              The <code>@datacamp/waffles-tokens</code> package exposes a json
              file containing all the primitive values necessary to produce apps
              with the datacamp styling rules. These values can be accessed and
              used to style applications using a variety of tools, including
              CSS-in-JS libraries such as emotion.
            </p>
            <h4>Usage</h4>
            <p>
              To use any of the styles, simply import the{' '}
              <code>@datacamp/waffles-tokens</code> package and directly access
              the necessary properties. For example if the primary color is
              needed then it should be accessed as follows.
            </p>
            <pre>
              <code>{`import { colors } from '@datacamp/waffles-tokens';

const primaryColorValue = colors.primary;`}</code>
            </pre>
            <p>
              This hex code can then be used wherever is necessary. All the
              tokens can be accessed and used in the same way since it is just a
              json file.
            </p>
            <h4>Available tokens</h4>
            <pre>
              <code>{JSON.stringify(tokens, null, 2)}</code>
            </pre>
          </div>
        </section>
      </Page>
    </main>
  );
};
