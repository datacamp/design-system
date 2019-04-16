import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '@datacamp/waffles-heading';

const validElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const renderTable = elements => (
  <table style={{ width: 'auto', margin: '0 auto' }}>
    <tbody>
      {elements.map(([element, props]) => (
        <tr key={element}>
          <td style={{ padding: '12px' }}>
            <Heading {...props}>{element}. Heading</Heading>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

storiesOf('Heading', module)
  .add('Variants', () =>
    renderTable(
      validElements
        .map(element => [element, { element }])
        .concat([['default', undefined]])
    )
  )
  .add('Default', () => <Heading>h2. Default Heading</Heading>)
  .add('Customize', () => {
    const children = text('children', 'Heading');
    const element = select('element', validElements, 'h2');
    const extraClass = text('extraClass ', '');
    return (
      <Heading element={element} extraClass={extraClass}>
        {children}
      </Heading>
    );
  });
