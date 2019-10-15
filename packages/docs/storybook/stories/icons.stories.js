import * as Icons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-icons', module)
  .addParameters({ percy: { widths: [500] } })
  .add('icons', () => (
    <table css={{ width: '100%' }}>
      <tbody>
        {Object.entries(Icons).map(([name, Component]) => (
          <tr key={name}>
            <td>
              <Text>{name}</Text>
            </td>
            <td>
              <Component color={color('color', 'currentColor')} size={12} />
            </td>
            <td>
              <Component color={color('color', 'currentColor')} size={18} />
            </td>
            <td>
              <Component color={color('color', 'currentColor')} size={24} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));
