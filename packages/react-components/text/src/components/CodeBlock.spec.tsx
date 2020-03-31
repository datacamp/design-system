import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import CodeBlock from './CodeBlock';

describe('<CodeBlock />', () => {
  it('renders the text in a <pre> and a <code> element', async () => {
    const exampleText = 'this is some code';
    const { getByText } = await axeRender(<CodeBlock>{exampleText}</CodeBlock>);
    const codeElement = getByText(exampleText) as HTMLElement;
    expect(codeElement.tagName).toEqual('CODE');
    expect((codeElement.parentElement as HTMLElement).tagName).toEqual('PRE');
  });

  it('sets the className on the pre element', async () => {
    const className = 'test-class';
    const { container } = await axeRender(
      <CodeBlock className={className}>example code</CodeBlock>,
    );

    expect(container.firstChild).toHaveClass(className);
  });

  it('sets the dataAttributes on the pre element', async () => {
    const data = { test: 'example' };
    const { container } = await axeRender(
      <CodeBlock dataAttributes={data}>example code</CodeBlock>,
    );

    expect(container.firstChild).toHaveAttribute('data-test', 'example');
  });

  describe('snapshots', () => {
    it('renders', async () => {
      const { container } = await axeRender(
        <CodeBlock>example code</CodeBlock>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
