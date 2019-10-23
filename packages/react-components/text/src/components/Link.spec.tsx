import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Link from './Link';

const testText = 'Some example text.';
const testClassName = 'example-class';
const testDataAttributes = { cy: 'othertest', example: 'testdata' };

describe('<Text />', () => {
  it('renders with a string', async () => {
    const { container } = await axeRender(
      <Link
        className={testClassName}
        dataAttributes={testDataAttributes}
        href="https://datacamp.com"
      >
        {testText}
      </Link>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the text in the a', async () => {
    const { getByText } = await axeRender(
      <Link href="https://datacamp.com">{testText}</Link>
    );
    expect(getByText(testText)).toBeDefined();
  });

  it('sets the className', async () => {
    const { getByText } = await axeRender(
      <Link className={testClassName} href="https://datacamp.com">
        {testText}
      </Link>
    );
    expect(getByText(testText)).toHaveClass(testClassName);
  });

  it('sets the data attributes', async () => {
    const { getByText } = await axeRender(
      <Link dataAttributes={testDataAttributes} href="https://datacamp.com">
        {testText}
      </Link>
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
