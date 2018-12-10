import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';

import readme from '../README.md';

import Tag from './index';

import { getColor } from '@datacamp/dc-design-system-core/colors';

const renderTable = (elements, { showDarkBackground = false } = {}) => (
  <table style={{ width: 'auto', margin: '0 auto' }}>
    <tbody>
      {elements.map(([color, props]) => (
        <tr key={color}>
          <td>{color}</td>
          <td>
            <Tag {...props}>50XP</Tag>
          </td>
          {showDarkBackground && (
            <td style={{ background: '#f0f4f5' }}>
              <Tag {...props}>50XP</Tag>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

storiesOf('Tag', module)
  .addDecorator(withReadme(readme))
  .add('Colors', () =>
    renderTable(
      getColor.validColors
        .map(color => [color, { color }])
        .concat([['default', undefined]]),
      {
        showDarkBackground: true,
      }
    )
  )
  .add('Default', () => <Tag>Tag</Tag>)
  .add('Customise', () => {
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
  });
