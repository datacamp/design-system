import Card from '@datacamp/waffles-card';
import {
  Badge,
  Code,
  CodeBlock,
  Emphasis,
  Heading,
  Link,
  List,
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
            <List>
              <List.Item>
                <Strong>GlobalFontFaces –</Strong> A global component that loads
                the font faces used by the other components. If the waffles scss
                is not being used, this component should be mounted on the page.
              </List.Item>
              <List.Item>
                <Strong>Text –</Strong> The base text component that can be used
                as a building block for everthing else.
              </List.Item>
              <List.Item>
                <Strong>Paragraph –</Strong> Renders a block of text.
              </List.Item>
              <List.Item>
                <Strong>Heading –</Strong> Renders various sized headings.
              </List.Item>
              <List.Item>
                <Strong>Strong –</Strong> Renders bold text.
              </List.Item>
              <List.Item>
                <Strong>Emphasis –</Strong> Renders italic text.
              </List.Item>
              <List.Item>
                <Strong>Small –</Strong> Renders text at a size smaller than the
                default.
              </List.Item>
              <List.Item>
                <Strong>Code –</Strong> Renders inline code.
              </List.Item>
              <List.Item>
                <Strong>CodeBlock –</Strong> Renders a preformatted block of
                code.
              </List.Item>
              <List.Item>
                <Strong>Link –</Strong> Renders an anchor component.
              </List.Item>
              <List.Item>
                <Strong>Badge –</Strong> Renders a coloured badge.
              </List.Item>
              <List.Item>
                <Strong>List –</Strong> Renders either an ordered or unordered
                list.
              </List.Item>
            </List>
            <CodeBlock>
              {`import {
  Badge,
  Code,
  CodeBlock,
  Emphasis,
  Heading,
  Link,
  List,
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
    pretium nulla, <Small>id malesuada nisi</Small>{" "}
    viverra consectetur. Donec auctor dapibus nisl
    sit amet tempor. Integer nec{" "}
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
  <List>
    <List.Item>First Item</List.Item>
    <List.Item>Second Item</List.Item>
  </List>
  <Badge color={colors.green}>badge</Badge>
  <Heading size={600} as="h3" multiLine>
    Some extra content with a long name that needs
    to wrap
  </Heading>
  <CodeBlock>{\`gapminder %>%
filter(year == 2007) %>%
arrange(desc(gdpPercap))\`}</CodeBlock>
  <Badge color={colors.navy} size="large">
    Badge
  </Badge>
</>`}
              scope={{
                Badge,
                Code,
                CodeBlock,
                colors,
                Emphasis,
                Heading,
                Link,
                List,
                Paragraph,
                Small,
                Strong,
                Text,
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
            componentData={TextData['src/components/Heading.tsx'][0]}
            componentName="Heading"
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

          <PropTable
            componentData={TextData['src/components/List/index.tsx'][0]}
            componentName="List"
          />

          <PropTable
            componentData={TextData['src/components/List/ListItem.tsx'][0]}
            componentName="List.Item"
          />
        </section>
      </Page>
    </main>
  );
};
