// eslint-disable-next-line filenames/match-exported
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
} from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { Fragment } from 'react';

import { PlaygroundConfig } from '../../types';

const initialCode = `
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
} from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';

function Playground(): JSX.Element {
  return (
    <Fragment>
      <Heading as="h1" size={700}>
        Live example content
      </Heading>
      <Paragraph>
        This is a paragraph containing some Text, Strong, Emphasis, Link, Code
        and Small children. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec a enim quis nisi{' '}
        <Link href="https://datacamp.com">sollicitudin tincidunt</Link> in nec
        leo. <Strong>Quisque mattis</Strong> pretium nulla,{' '}
        id malesuada nisi viverra consectetur. Donec auctor
        dapibus nisl sit amet tempor. Integer nec <Code>diam sit amet sem</Code>{' '}
        sollicitudin consectetur. Vestibulum velit turpis, egestas eget massa
        non, consectetur volutpat quam. Sed eu mi eget sem euismod iaculis.
        Aenean a ante <Emphasis>mattis orci</Emphasis> dapibus pulvinar. Quisque
        convallis arcu eu neque tincidunt condimentum.
      </Paragraph>
      <List>
        <List.Item>
          <Badge color={tokens.colors.green}>badge</Badge>{' '}
          First Item
        </List.Item>
        <List.Item>
          <Badge color={tokens.colors.navy} size="large">Badge</Badge>{' '}
          Second Item
        </List.Item>
      </List>
      <Heading as="h3" multiLine size={600}>
        Some extra content with a long name that needs to wrap
      </Heading>
      <CodeBlock>{\`gapminder %>%
filter(year == 2007) %>%
arrange(desc(gdpPercap))\`}</CodeBlock>
      <Small>Some additional copyright info.</Small>
    </Fragment>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Badge,
    Code,
    CodeBlock,
    Emphasis,
    Fragment,
    Heading,
    Link,
    List,
    Paragraph,
    Small,
    Strong,
    tokens,
  },
};

export default playgroundConfig;
