import './styles.css';

import { Strong, Text } from '@datacamp/waffles-text';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-text', module)
  .add('Text Component', () => (
    <>
      <Text>This is the default text</Text>
      <br />
      <Text css={{ color: 'blue' }}>
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
      <Strong css={{ color: 'blue' }}>
        This has additional style added using a css prop
      </Strong>
      <br />
      <Strong className="example-class">
        This has additional style added using a className
      </Strong>
    </>
  ));
