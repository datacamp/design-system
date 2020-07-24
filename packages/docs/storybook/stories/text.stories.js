import './styles.css';

import {
  Badge,
  BetaBadge,
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
import { color } from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-text', module)
  .add('Flow all components', () => (
    <>
      <Heading as="h1" multiLine size={800}>
        This is a Heading with size 800
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
        quis nisi sollicitudin tincidunt in nec leo. Quisque mattis pretium
        nulla, id malesuada nisi viverra consectetur. Donec auctor dapibus nisl
        sit amet tempor. Integer nec diam sit amet sem sollicitudin consectetur.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
        quis nisi sollicitudin tincidunt in nec leo. Quisque mattis pretium
        nulla, id malesuada nisi viverra{' '}
        <Link href="https://datacamp.com">consectetur</Link>. Donec auctor
        dapibus nisl sit amet tempor. Integer nec diam sit amet sem sollicitudin
        consectetur.
      </Paragraph>
      <CodeBlock>{`this is the standard styling
gapminder %>%
  filter(year == 2007) %>%
  arrange(desc(gdpPercap))`}</CodeBlock>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
        quis nisi sollicitudin tincidunt in nec leo. Quisque mattis pretium
        nulla, id malesuada nisi viverra consectetur. Donec auctor dapibus nisl
        sit amet tempor. Integer nec diam sit amet sem sollicitudin consectetur.
      </Paragraph>
      <CodeBlock>{`this is the standard styling
gapminder %>%
  filter(year == 2007) %>%
  arrange(desc(gdpPercap))`}</CodeBlock>
      <CodeBlock>{`this is the standard styling
gapminder %>%
filter(year == 2007) %>%
arrange(desc(gdpPercap))`}</CodeBlock>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
        quis nisi sollicitudin tincidunt in nec leo. Quisque mattis pretium
        nulla, id malesuada nisi viverra consectetur. Donec auctor dapibus nisl
        sit amet tempor. Integer nec diam sit amet sem sollicitudin consectetur.
      </Paragraph>
      <List>
        <List.Item>item text</List.Item>
        <List.Item>
          nested items
          <List>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
          </List>
        </List.Item>
        <List.Item>item text</List.Item>
        <List.Item>item text</List.Item>
      </List>
      <Heading as="h2" size="800">
        This is a heading
      </Heading>
      <CodeBlock>{`this is the standard styling
gapminder %>%
filter(year == 2007) %>%
arrange(desc(gdpPercap))`}</CodeBlock>
      <Heading as="h2" size="700">
        This is a heading
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
        quis nisi sollicitudin tincidunt in nec leo. Quisque mattis pretium
        nulla, id malesuada nisi viverra consectetur. Donec auctor dapibus nisl
        sit amet tempor. Integer nec diam sit amet sem sollicitudin consectetur.
      </Paragraph>
    </>
  ))
  .add('Text Component', () => (
    <>
      <Text>This is the default text</Text>
      <br />
      <Text css={{ color: color.primary.greenText.value.hex }}>
        This has additional style added using a css prop
      </Text>
      <br />
      <Text className="example-class">
        This has additional style added using a className
      </Text>
      <br />
      <Text>
        This has <Strong>these words</Strong> made strong
      </Text>
      <br />
      <Text>
        This has <Small>these words</Small> made small
      </Text>
      <br />
      <Text>
        This has <Emphasis>these words</Emphasis> emphasized
      </Text>
    </>
  ))
  .add('Link Component', () => (
    <>
      <Link href="https://datacamp.com">This is the default text</Link>
      <br />
      <Link
        css={{ color: color.primary.greenText.value.hex }}
        href="https://datacamp.com"
      >
        This has additional style added using a css prop
      </Link>
      <br />
      <Link className="example-class" href="https://datacamp.com">
        This has additional style added using a className
      </Link>
    </>
  ))
  .add('Strong Component', () => (
    <Paragraph>
      This is a paragraph containing Strong components
      <br />
      <Strong>This is the default strong text</Strong>
      <br />
      <Strong css={{ color: color.primary.greenText.value.hex }}>
        This has additional style added using a css prop
      </Strong>
      <br />
      <Strong className="example-class">
        This has additional style added using a className
      </Strong>
      <br />
      <Strong>
        This has <Emphasis>emphasis text</Emphasis> as a child
      </Strong>
    </Paragraph>
  ))
  .add('Emphasis Component', () => (
    <Paragraph>
      This is a paragraph containing Emphasis components
      <br />
      <Emphasis>This is the default emphasis text</Emphasis>
      <br />
      <Emphasis css={{ color: color.primary.greenText.value.hex }}>
        This has additional style added using a css prop
      </Emphasis>
      <br />
      <Emphasis className="example-class">
        This has additional style added using a className
      </Emphasis>
      <br />
      <Emphasis>
        This has <Strong>strong text</Strong> nested inside
      </Emphasis>
    </Paragraph>
  ))
  .add('Small Component', () => (
    <Paragraph>
      This is a paragraph containing small components
      <br />
      <Small>This is the default small text</Small>
      <br />
      <Small css={{ color: color.primary.greenText.value.hex }}>
        This has additional style added using a css prop
      </Small>
      <br />
      <Small className="example-class">
        This has additional style added using a className
      </Small>
      <br />
      <Small>
        This contains some <Strong>strong text</Strong>
      </Small>
      <br />
      <Small>
        This contains some <Emphasis>emphasis text</Emphasis>
      </Small>
    </Paragraph>
  ))
  .add('Paragraph Component', () => (
    <>
      <Paragraph>
        This is a paragraph containing a string child. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec a enim quis nisi sollicitudin
        tincidunt in nec leo. Quisque mattis pretium nulla, id malesuada nisi
        viverra consectetur. Donec auctor dapibus nisl sit amet tempor. Integer
        nec diam sit amet sem sollicitudin consectetur. Vestibulum velit turpis,
        egestas eget massa non, consectetur volutpat quam. Sed eu mi eget sem
        euismod iaculis. Aenean a ante mattis orci dapibus pulvinar. Quisque
        convallis arcu eu neque tincidunt condimentum.
      </Paragraph>
      <Paragraph>
        This is a paragraph containing a some Text, Strong, Emphasis, Link, Code
        and Small children. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec a enim quis nisi{' '}
        <Link href="https://datacamp.com">sollicitudin tincidunt</Link> in nec
        leo. <Strong>Quisque mattis</Strong> pretium nulla,{' '}
        <Small>id malesuada nisi</Small> viverra consectetur. Donec auctor
        dapibus nisl sit amet tempor. Integer nec <Code>diam sit amet sem</Code>{' '}
        sollicitudin consectetur.{' '}
        <Text css={{ color: color.primary.greenText.value.hex }}>
          Vestibulum velit turpis
        </Text>
        , egestas eget massa non, consectetur volutpat quam. Sed eu mi eget sem
        euismod iaculis. Aenean a ante <Emphasis>mattis orci</Emphasis> dapibus
        pulvinar. Quisque convallis arcu eu neque tincidunt condimentum.
      </Paragraph>
      <Paragraph css={{ color: color.primary.greenText.value.hex }}>
        This has additional style added using a css prop
      </Paragraph>
      <Paragraph className="example-class">
        This has additional style added using a className
      </Paragraph>
    </>
  ))
  .add('Heading Component', () => {
    const element = select(
      'element',
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
    );
    return (
      <>
        <Paragraph>
          This is an initial paragraph so that the margin-top on first heading
          is visible
        </Paragraph>
        <Heading as={element} multiLine size={900}>
          This is a Heading with size 900
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={800}>
          This is a Heading with size 800
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={700}>
          This is a Heading with size 700
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={650}>
          This is a Heading with size 650
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={600}>
          This is a Heading with size 600
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={500}>
          This is a Heading with size 500
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={400}>
          This is a Heading with size 400
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} multiLine size={300}>
          This is a Heading with size 300
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading
          as={element}
          css={{ color: color.primary.greenText.value.hex }}
          size={600}
        >
          This is a Heading with styling added using a css prop
        </Heading>
        <Heading as={element} className="example-class" size={600}>
          This is a Heading with styling added using a className
        </Heading>
        <Paragraph>
          Below is a long Heading in a fixed box with multiLine=false
        </Paragraph>
        <div css={{ border: '1px solid black', width: 200 }}>
          <Heading as={element} size={600}>
            A lot of content that does not fit
          </Heading>
        </div>
        <Paragraph>
          Below is a long Heading in a fixed box with multiLine=true
        </Paragraph>
        <div css={{ border: '1px solid black', width: 200 }}>
          <Heading as={element} multiLine size={600}>
            A lot of content that does not fit
          </Heading>
        </div>
      </>
    );
  })
  .add('CodeBlock component', () => (
    <div css={{ height: '100%}', width: 300 }}>
      <CodeBlock>{`this is the standard styling
gapminder %>%
  filter(year == 2007) %>%
  arrange(desc(gdpPercap))`}</CodeBlock>
      <CodeBlock className="example-class">{`font colour set with a className
gapminder %>%
  filter(year == 2007) %>%
  arrange(desc(gdpPercap))`}</CodeBlock>
      <CodeBlock
        css={{ backgroundColor: color.neutral.grey100.value.rgb }}
      >{`background colour set with css prop
gapminder %>%
  filter(year == 2007) %>%
  arrange(desc(gdpPercap))`}</CodeBlock>
    </div>
  ))
  .add('Code Component', () => (
    <div css={{ height: '100%}', width: 200 }}>
      <Paragraph>This is a paragraph containing code components</Paragraph>
      <br />

      <Paragraph>
        This is the default code component:
        <br />
        We&apos;ve already loaded the <Code>Gapminder</Code>and{' '}
        <Code>dplyr</Code>
        packages.
        <br />
        Type gapminder in your <Code>R Terminal</Code>, to the right, to display
        the object.
      </Paragraph>
      <br />

      <Paragraph>
        This has additional style added using a css prop:
        <br />
        We&apos;ve already loaded the{' '}
        <Code css={{ color: color.primary.greenText.value.hex }}>
          Gapminder
        </Code>
        and{' '}
        <Code css={{ color: color.primary.greenText.value.hex }}>dplyr</Code>
        packages.
        <br />
        Type gapminder in your{' '}
        <Code css={{ color: color.primary.greenText.value.hex }}>
          R Terminal
        </Code>
        , to the right, to display the object.
      </Paragraph>
      <br />

      <Paragraph>
        This has additional style added using a className :
        <br />
        We&apos;ve already loaded the{' '}
        <Code className="example-class">Gapminder</Code>
        and <Code className="example-class">dplyr</Code>
        packages.
        <br />
        Type gapminder in your <Code className="example-class">R Terminal</Code>
        , to the right, to display the object.
        <br />
      </Paragraph>
      <br />
    </div>
  ))
  .add('Badge Component', () => (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 8,
          width: '600px',
        }}
      >
        <Badge color="#3ac" size="large">
          Badge
        </Badge>
        <Badge color="#ffc844" size="large">
          Badge
        </Badge>
        <Badge color="rgb(207, 220, 225)" size="large">
          Badge
        </Badge>
        <BetaBadge />
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '600px',
        }}
      >
        <Badge color="#3ac">Badge</Badge>
        <Badge color="#ffc844">Badge</Badge>
        <Badge color="rgb(207, 220, 225)">Badge</Badge>
      </div>
    </div>
  ))
  .add('List Component', () => (
    <div>
      <List>
        <List.Item>item text</List.Item>
        <List.Item>
          nested items
          <List>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
          </List>
        </List.Item>
        <List.Item>item text</List.Item>
        <List.Item>item text</List.Item>
      </List>
      <List ordered>
        <List.Item>item text</List.Item>
        <List.Item>
          nested items
          <List ordered>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
            <List.Item>item text</List.Item>
          </List>
        </List.Item>
        <List.Item>item text</List.Item>
        <List.Item>item text</List.Item>
      </List>
    </div>
  ));
