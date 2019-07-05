import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Emphasis from './Emphasis';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Emphasis />', () => {
  it('renders', () => {
    const { container } = render(
      <Emphasis className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Emphasis>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', () => {
    const { getByText } = render(<Emphasis>{testText}</Emphasis>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Emphasis className={testClassName}>{testText}</Emphasis>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
      <Emphasis dataAttributes={testDataAttributes}>{testText}</Emphasis>
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
