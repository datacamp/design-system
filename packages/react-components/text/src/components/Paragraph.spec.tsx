import 'jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import Paragraph from './Paragraph';
import Strong from './Strong';
import Text from './Text';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Paragraph />', () => {
  it('renders with a string', () => {
    const { container } = render(
      <Paragraph className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Paragraph>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with Strong children', () => {
    const { container } = render(
      <Paragraph className={testClassName} dataAttributes={testDataAttributes}>
        Some example text <Strong>with strong</Strong> included, and also some{' '}
        <Text>custom text</Text>.
      </Paragraph>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', () => {
    const { getByText } = render(<Paragraph>{testText}</Paragraph>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', () => {
    const { getByText } = render(
      <Paragraph className={testClassName}>{testText}</Paragraph>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const { getByText } = render(
      <Paragraph dataAttributes={testDataAttributes}>{testText}</Paragraph>
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
