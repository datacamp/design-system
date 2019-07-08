import 'jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Emphasis from './Emphasis';
import Small from './Small';
import Strong from './Strong';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Small />', () => {
  it('renders with a string', async () => {
    const { container } = await axeRender(
      <Small className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Small>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with Strong and Emphasis children', async () => {
    const { container } = await axeRender(
      <Small className={testClassName} dataAttributes={testDataAttributes}>
        Some example text <Strong>with strong</Strong> and{' '}
        <Emphasis>emphasis text</Emphasis> included.
      </Small>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', async () => {
    const { getByText } = await axeRender(<Small>{testText}</Small>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Small className={testClassName}>{testText}</Small>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
      <Small dataAttributes={testDataAttributes}>{testText}</Small>
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-cy',
      testDataAttributes.cy
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-example',
      testDataAttributes.example
    );
  });
});
