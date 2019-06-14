import './styles.css';

import { Paragraph, Strong, Text } from '@datacamp/waffles-text';
import { color } from '@datacamp/waffles-tokens/lib/future-tokens.json';
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
    </>
  ))
  .add('Strong Component', () => (
    <>
      <Strong>This is the default strong text</Strong>
      <br />
      <Strong css={{ color: color.opaque.primary.value.hex }}>
        This has additional style added using a css prop
      </Strong>
      <br />
      <Strong className="example-class">
        This has additional style added using a className
      </Strong>
    </>
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
        This is a paragraph containing a some Text and Strong children. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim quis
        nisi sollicitudin tincidunt in nec leo. <Strong>Quisque mattis</Strong>{' '}
        pretium nulla, id malesuada nisi viverra consectetur. Donec auctor
        dapibus nisl sit amet tempor. Integer nec diam sit amet sem sollicitudin
        consectetur.{' '}
        <Text css={{ color: color.opaque.primary.value.hex }}>
          Vestibulum velit turpis
        </Text>
        , egestas eget massa non, consectetur volutpat quam. Sed eu mi eget sem
        euismod iaculis. Aenean a ante mattis orci dapibus pulvinar. Quisque
        convallis arcu eu neque tincidunt condimentum.
      </Paragraph>
      <Paragraph css={{ color: color.opaque.primary.value.hex }}>
        This has additional style added using a css prop
      </Paragraph>
      <Paragraph className="example-class">
        This has additional style added using a className
      </Paragraph>
    </>
  ));
