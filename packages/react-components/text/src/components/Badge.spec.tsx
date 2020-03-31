import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React from 'react';

import Badge from './Badge';

describe('Badge', () => {
  const testContent = 'test content';
  it('renders with the provided colour, className and content', async () => {
    const { getByText } = await axeRender(
      <Badge className="test-class" color="black">
        {testContent}
      </Badge>,
    );
    const element = getByText(testContent) as HTMLElement;
    expect(element).toHaveStyle('background-color: black');
    expect(element).toHaveClass('test-class');
    expect(element).toMatchSnapshot();
  });

  describe('size', () => {
    it('renders a small badge', async () => {
      const { getByText } = await axeRender(
        <Badge color="black" size="small">
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`font-size: ${tokens.size.font[200].value}`);
      expect(element).toHaveStyle(`line-height: 18px`);
      expect(element).toHaveStyle(
        `padding-left: ${tokens.size.space[4].value}px`,
      );
      expect(element).toHaveStyle(
        `padding-right: ${tokens.size.space[4].value}px`,
      );
    });
    it('renders a large badge', async () => {
      const { getByText } = await axeRender(
        <Badge color="black" size="large">
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`font-size: ${tokens.size.font[300].value}`);
      expect(element).toHaveStyle(`line-height: 24px`);
      expect(element).toHaveStyle(
        `padding-left: ${tokens.size.space[8].value}px`,
      );
      expect(element).toHaveStyle(
        `padding-right: ${tokens.size.space[8].value}px`,
      );
    });
  });

  describe('textColor', () => {
    it('sets the text color to white on a primary background', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.color.opaque.primary.value.hex}>
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle('color: white');
    });

    it('sets the text color to dark transparent grey on a light background', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.color.opaque.greyLighter.value.hex}>
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle('color: rgba(12, 22, 38, 0.8)');
    });
  });
});
