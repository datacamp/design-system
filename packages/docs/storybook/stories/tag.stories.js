import { getColor } from '@datacamp/waffles-core';
import Tag from '@datacamp/waffles-tag';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

const renderTable = (elements, { showDarkBackground = false } = {}) => (
  <table style={{ margin: '0 auto', width: 'auto' }}>
    <tbody>
      {elements.map(([color, props]) => (
        <tr key={color}>
          <td>{color}</td>
          <td style={{ padding: '12px' }}>
            <Tag {...props}>50XP</Tag>
          </td>
          {showDarkBackground && (
            <td style={{ background: '#f0f4f5', padding: '12px' }}>
              <Tag {...props}>50XP</Tag>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

storiesOf('waffles-tag', module)
  .add('Default', () => <Tag>Tag</Tag>)
  .add('Colors', () =>
    renderTable(
      getColor.validColors
        .map(color => [color, { color }])
        .concat([['default', undefined]]),
      {
        showDarkBackground: true,
      },
    ),
  )
  .add(
    'Customize',
    () => {
      const children = text('children', '50XP');
      const color = select('color', ['', ...getColor.validColors], '');
      const extraClass = text('extraClass ', '');
      const rounded = boolean('rounded', false);
      const textColor = select('textColor', ['', ...getColor.validColors], '');
      return (
        <Tag
          color={color || undefined}
          extraClass={extraClass}
          rounded={rounded}
          textColor={textColor || undefined}
        >
          {children}
        </Tag>
      );
    },
    { percy: { skip: true } },
  );
