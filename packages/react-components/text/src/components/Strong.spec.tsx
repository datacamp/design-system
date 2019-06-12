import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Strong from './Strong';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Strong />', () => {
  it('renders', () => {
    const { container } = render(
      <Strong className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Strong>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', () => {
    const { getByText } = render(<Strong>{testText}</Strong>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Strong className={testClassName}>{testText}</Strong>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
      <Strong dataAttributes={testDataAttributes}>{testText}</Strong>
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
