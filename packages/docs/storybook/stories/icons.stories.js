import * as Icons from '@datacamp/waffles-icons';
import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

Object.entries(Icons).forEach(([name, Component]) => {
  storiesOf('waffles-icons', module).add(name, () => (
    <>
      <Component color={color('color', 'currentColor')} size={12} />{' '}
      <Component color={color('color', 'currentColor')} size={18} />{' '}
      <Component color={color('color', 'currentColor')} size={24} />
    </>
  ));
});
