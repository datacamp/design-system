import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Heading, { Size } from './Heading';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

const headerSizes: Size[] = [300, 400, 500, 600, 700, 800];

describe('<Heading />', () => {
  describe('renders at each size', () => {
    headerSizes.forEach(size =>
      [true, false].forEach(multiLine => {
        it(`renders at size ${size}, multiLine=${multiLine}`, () => {
          const { container } = render(
            <Heading
              as="h2"
              className={testClassName}
              dataAttributes={testDataAttributes}
              multiLine={multiLine}
              size={size}
            >
              {testText}
            </Heading>
          );
          expect(container.firstChild).toMatchSnapshot();
        });
      })
    );
  });

  it('sets the text in the heading', () => {
    const { getByText } = render(
      <Heading as="h2" size={400}>
        {testText}
      </Heading>
    );
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Heading as="h2" className={testClassName} size={300}>
        {testText}
      </Heading>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('uses the correct element', () => {
    const { container } = render(
      <Heading as="h5" dataAttributes={testDataAttributes} size={300}>
        {testText}
      </Heading>
    );
    expect(container.querySelector('h5')).not.toBeNull();
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
      <Heading as="h2" dataAttributes={testDataAttributes} size={300}>
        {testText}
      </Heading>
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
