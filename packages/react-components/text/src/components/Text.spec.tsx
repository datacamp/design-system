import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Small from './Small';
import Strong from './Strong';
import Text from './Text';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Text />', () => {
  it('renders with a string', async () => {
    const { container } = await axeRender(
      <Text className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Text>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with Strong children', async () => {
    const { container } = await axeRender(
      <Text className={testClassName} dataAttributes={testDataAttributes}>
        Some example text <Strong>with strong</Strong> included.
      </Text>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with Small children', async () => {
    const { container } = await axeRender(
      <Text className={testClassName} dataAttributes={testDataAttributes}>
        Some example text <Small>with strong</Small> included.
      </Text>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', async () => {
    const { getByText } = await axeRender(<Text>{testText}</Text>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Text className={testClassName}>{testText}</Text>,
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
      <Text dataAttributes={testDataAttributes}>{testText}</Text>,
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-cy',
      testDataAttributes.cy,
    );
    expect(getByText(testText)).toHaveAttribute(
      'data-example',
      testDataAttributes.example,
    );
  });
});
