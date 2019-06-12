import './styles.css';

import { Text } from '@datacamp/waffles-text';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-text', module).add('Text Component', () => (
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
  </>
));
