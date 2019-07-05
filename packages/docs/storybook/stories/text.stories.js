import './styles.css';

import {
  Emphasis,
  Heading,
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
  .add('Text Component', () => (
    <>
      <Text>This is the default text</Text>
      <br />
      <Text css={{ color: color.opaque.primary.value.hex }}>
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
  .add('Strong Component', () => (
    <Paragraph>
      This is a paragraph containing Strong components
      <br />
      <Strong>This is the default strong text</Strong>
      <br />
      <Strong css={{ color: color.opaque.primary.value.hex }}>
        This has additional style added using a css prop
      </Strong>
      <br />
      <Strong className="example-class">
        This has additional style added using a className
      </Strong>
    </Paragraph>
  ))
  .add('Emphasis Component', () => (
    <Paragraph>
      This is a paragraph containing Emphasis components
      <br />
      <Emphasis>This is the default emphasis text</Emphasis>
      <br />
      <Emphasis css={{ color: color.opaque.primary.value.hex }}>
        This has additional style added using a css prop
      </Emphasis>
      <br />
      <Emphasis className="example-class">
        This has additional style added using a className
      </Emphasis>
    </Paragraph>
  ))
  .add('Small Component', () => (
    <Paragraph>
      This is a paragraph containing small components
      <br />
      <Small>This is the default small text</Small>
      <br />
      <Small css={{ color: color.opaque.primary.value.hex }}>
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
        This is a paragraph containing a some Text, Strong, Emphasis and Small
        children. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        a enim quis nisi sollicitudin tincidunt in nec leo.{' '}
        <Strong>Quisque mattis</Strong> pretium nulla,{' '}
        <Small>id malesuada nisi</Small> viverra consectetur. Donec auctor
        dapibus nisl sit amet tempor. Integer nec diam sit amet sem sollicitudin
        consectetur.{' '}
        <Text css={{ color: color.opaque.primary.value.hex }}>
          Vestibulum velit turpis
        </Text>
        , egestas eget massa non, consectetur volutpat quam. Sed eu mi eget sem
        euismod iaculis. Aenean a ante <Emphasis>mattis orci</Emphasis> dapibus
        pulvinar. Quisque convallis arcu eu neque tincidunt condimentum.
      </Paragraph>
      <Paragraph css={{ color: color.opaque.primary.value.hex }}>
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
      'h3'
    );
    return (
      <>
        <Paragraph>
          This is an initial paragraph so that the margin-top on first heading
          is visible
        </Paragraph>
        <Heading as={element} size={800} multiLine>
          This is a Heading with size 800
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} size={700} multiLine>
          This is a Heading with size 700
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} size={600} multiLine>
          This is a Heading with size 600
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} size={500} multiLine>
          This is a Heading with size 500
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} size={400} multiLine>
          This is a Heading with size 400
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading as={element} size={300} multiLine>
          This is a Heading with size 300
        </Heading>
        <Paragraph>
          This is some content in a paragraph to demonstrate the spacing below
          the last Heading.
        </Paragraph>
        <Heading
          as={element}
          css={{ color: color.opaque.primary.value.hex }}
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
          <Heading as={element} size={600} multiLine>
            A lot of content that does not fit
          </Heading>
        </div>
      </>
    );
  });
