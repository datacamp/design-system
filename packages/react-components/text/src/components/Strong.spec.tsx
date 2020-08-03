import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Strong from './Strong';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { example: 'testdata', item: 'othertest' };

describe('<Strong />', () => {
  it('renders', async () => {
    const { container } = await axeRender(
      <Strong className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Strong>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', async () => {
    const { getByText } = await axeRender(<Strong>{testText}</Strong>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Strong className={testClassName}>{testText}</Strong>,
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
      <Strong dataAttributes={testDataAttributes}>{testText}</Strong>,
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-item',
      testDataAttributes.item,
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-example',
      testDataAttributes.example,
    );
  });
});
