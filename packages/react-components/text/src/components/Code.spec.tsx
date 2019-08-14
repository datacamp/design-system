import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Code from './Code';

describe('<Code /', () => {
  it('renders the text in a <code> element', async () => {
    const exampleText = 'this is some code';
    const { getByText } = await axeRender(<Code>{exampleText}</Code>);
    expect((getByText(exampleText) as HTMLElement).tagName).toEqual('CODE');
  });
});

it('sets the className on the code element', async () => {
  const className = 'test-class';
  const { container } = await axeRender(
    <Code className={className}>example code</Code>
  );

  expect(container.firstChild).toHaveClass(className);
});

it('sets the dataAttributes on the code element', async () => {
  const data = { test: 'example' };
  const { container } = await axeRender(
    <Code dataAttributes={data}>example code</Code>
  );

  expect(container.firstChild).toHaveAttribute('data-test', 'example');
});

describe('snapshots', () => {
  it('renders', async () => {
    const { container } = await axeRender(<Code>example code</Code>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
