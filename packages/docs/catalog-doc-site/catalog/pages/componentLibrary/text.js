import Card from '@datacamp/waffles-card';
import {
  Badge,
  Code,
  CodeBlock,
  Emphasis,
  Heading,
  Link,
  Paragraph,
  Small,
  Strong,
  Text,
} from '@datacamp/waffles-text';
import TextData from '@datacamp/waffles-text/componentMetadata.json';
import { colors } from '@datacamp/waffles-tokens';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';
import PropTable from '../../components/PropTable';

export default () => {
  return (
    <main>
      <CustomHeader
        description="All the components available in the @datacamp/waffles-text package"
        section="Component Library"
        subSection="Text"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes several components from the{' '}
              <Code>@datacamp/waffles-text</Code> package.
            </Paragraph>
            <ul>
              <li>
                <Text>
                  <Strong>GlobalFontFaces –</Strong> A global component that
                  loads the font faces used by the other components. If the
                  waffles scss is not being used, this component should be
                  mounted on the page.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Text –</Strong> The base text component that can be
                  used as a building block for everthing else.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Paragraph –</Strong> Renders a block of text.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Heading –</Strong> Renders various sized headings.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Strong –</Strong> Renders bold text.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Emphasis –</Strong> Renders italic text.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Small –</Strong> Renders text at a size smaller than
                  the default.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Code –</Strong> Renders inline code.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>CodeBlock –</Strong> Renders a preformatted block of
                  code.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Link –</Strong> Renders an anchor component.
                </Text>
              </li>
              <li>
                <Text>
                  <Strong>Badge –</Strong> Renders a coloured badge.
                </Text>
              </li>
            </ul>
            <CodeBlock>
              {`import {
  Badge,
  Code,
  CodeBlock,
  Emphasis,
  Heading,
  Link,
  Paragraph,
  Small,
  Strong,
  Text,
} from '@datacamp/waffles-text';`}
            </CodeBlock>
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Example
            </Heading>
            <LazyLiveEditCells
              code={`<>
  <Heading size={700} as="h1">
    Some content
  </Heading>
  <Paragraph>
    This is a paragraph containing a some Text,
    Strong, Emphasis, Link, Code and Small
    children. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec a enim quis
    nisi{" "}
    <Link href="https://datacamp.com">
      sollicitudin tincidunt
    </Link>{" "}
    in nec leo. <Strong>Quisque mattis</Strong>{" "}
    pretium nulla,{" "}
    <Small>id malesuada nisi</Small> viverra
    consectetur. Donec auctor dapibus nisl sit
    amet tempor. Integer nec{" "}
    <Code>diam sit amet sem</Code> sollicitudin
    consectetur.{" "}
    <Text className="dc-u-color-red">
      Vestibulum velit turpis
    </Text>
    , egestas eget massa non, consectetur volutpat
    quam. Sed eu mi eget sem euismod iaculis.
    Aenean a ante <Emphasis>mattis orci</Emphasis>{" "}
    dapibus pulvinar. Quisque convallis arcu eu
    neque tincidunt condimentum.
  </Paragraph>
  <Heading size={600} as="h3" multiLine>
    Some extra content with a long name that needs
    to wrap
  </Heading>
  <CodeBlock>{\`gapminder %>%
filter(year == 2007) %>%
arrange(desc(gdpPercap))\`}</CodeBlock>
<Badge color={colors.primary} size="large">Badge</Badge>
</>`}
              scope={{
                Badge,
                Code,
                CodeBlock,
                Emphasis,
                Heading,
                Link,
                Paragraph,
                Small,
                Strong,
                Text,
                colors,
              }}
            />
          </Card>
          <Heading as="h2" size={600}>
            Properties
          </Heading>
          <PropTable
            componentData={TextData['src/components/Text.tsx'][0]}
            componentName="Text"
          />

          <PropTable
            componentData={TextData['src/components/Paragraph.tsx'][0]}
            componentName="Paragraph"
          />

          <PropTable
            componentData={TextData['src/components/Strong.tsx'][0]}
            componentName="Strong"
          />

          <PropTable
            componentData={TextData['src/components/Emphasis.tsx'][0]}
            componentName="Emphasis"
          />

          <PropTable
            componentData={TextData['src/components/Small.tsx'][0]}
            componentName="Small"
          />

          <PropTable
            componentData={TextData['src/components/CodeBlock.tsx'][0]}
            componentName="CodeBlock"
          />

          <PropTable
            componentData={TextData['src/components/Code.tsx'][0]}
            componentName="Code"
          />

          <PropTable
            componentData={TextData['src/components/Link.tsx'][0]}
            componentName="Link"
          />

          <PropTable
            componentData={TextData['src/components/Badge.tsx'][0]}
            componentName="Badge"
          />
        </section>
      </Page>
    </main>
  );
};
