import * as Icons from '@datacamp/waffles-icons';
import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

Object.entries(Icons).forEach(([name, Component]) => {
  storiesOf('waffles-icons', module).add(name, () => (
    <>
      <Component size={12} color={color('color', 'currentColor')} />{' '}
      <Component size={18} color={color('color', 'currentColor')} />{' '}
      <Component size={24} color={color('color', 'currentColor')} />
    </>
  ));
});
