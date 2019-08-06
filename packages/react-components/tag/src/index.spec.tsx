import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import { getColor, getContrastColor } from '@datacamp/waffles-core';
import { matchers } from 'jest-emotion';
import React from 'react';

import Tag from '.';

expect.extend(matchers);

const exampleTagBody = '50XP';

describe('<Tag />', () => {
  it('creates a default tag', async () => {
    const { container } = await axeRender(<Tag>{exampleTagBody}</Tag>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets the background color and infers text color', async () => {
    const { getByText } = await axeRender(
      <Tag color="red">{exampleTagBody}</Tag>
    );
    const backgroundColor = getColor('red');
    const textColor = getContrastColor('red');

    expect(getByText(exampleTagBody)).toHaveStyleRule(
      'background-color',
      backgroundColor
    );
    expect(getByText(exampleTagBody)).toHaveStyleRule('color', textColor);
  });

  it('sets the text color based on the property when provided', async () => {
    const { getByText } = await axeRender(
      <Tag textColor="red">{exampleTagBody}</Tag>
    );

    expect(getByText(exampleTagBody)).toHaveStyleRule('color', getColor('red'));
  });

  it('has a default border radius', async () => {
    const { getByText } = await axeRender(<Tag>{exampleTagBody}</Tag>);

    expect(getByText(exampleTagBody)).toHaveStyleRule('border-radius', '12px');
  });

  it('sets the border radius when rounded=true', async () => {
    const { getByText } = await axeRender(<Tag rounded>{exampleTagBody}</Tag>);

    expect(getByText(exampleTagBody)).toHaveStyleRule('border-radius', '4px');
  });

  it('Adds the extraClass to the className', async () => {
    const { getByText } = await axeRender(
      <Tag extraClass="test-class">{exampleTagBody}</Tag>
    );

    expect(getByText(exampleTagBody)).toHaveClass('test-class');
  });
});
