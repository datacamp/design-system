import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Emphasis from './Emphasis';
import Link from './Link';
import Paragraph from './Paragraph';
import Small from './Small';
import Strong from './Strong';
import Text from './Text';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Paragraph />', () => {
  it('renders with a string', async () => {
    const { container } = await axeRender(
      <Paragraph className={testClassName} dataAttributes={testDataAttributes}>
        {testText}
      </Paragraph>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with Strong, Small, Text, Link and Emphasis children', async () => {
    const { container } = await axeRender(
      <Paragraph className={testClassName} dataAttributes={testDataAttributes}>
        Some example text <Strong>with strong</Strong> included, and also some{' '}
        <Text>custom text</Text>. It has some <Small>small text</Small> and{' '}
        <Emphasis>emphasis text</Emphasis>. It also contains{' '}
        <Link href="https://datacamp.com">a link</Link>.
      </Paragraph>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the span', async () => {
    const { getByText } = await axeRender(<Paragraph>{testText}</Paragraph>);
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Paragraph className={testClassName}>{testText}</Paragraph>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
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
