import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Text from './Text';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Text />', () => {
  it('renders', () => {
    const { container } = render(
      <Text className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Text>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', () => {
    const { getByText } = render(<Text>{testText}</Text>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Text className={testClassName}>{testText}</Text>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
      <Text dataAttributes={testDataAttributes}>{testText}</Text>
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
