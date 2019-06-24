import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Small from './Small';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Small />', () => {
  it('renders', () => {
    const { container } = render(
      <Small className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Small>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', () => {
    const { getByText } = render(<Small>{testText}</Small>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Small className={testClassName}>{testText}</Small>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
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
