import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Emphasis from './Emphasis';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { example: 'testdata', item: 'othertest' };

describe('<Emphasis />', () => {
  it('renders', async () => {
    const { container } = await axeRender(
      <Emphasis className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Emphasis>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', async () => {
    const { getByText } = await axeRender(<Emphasis>{testText}</Emphasis>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Emphasis className={testClassName}>{testText}</Emphasis>,
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
      <Emphasis dataAttributes={testDataAttributes}>{testText}</Emphasis>,
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
