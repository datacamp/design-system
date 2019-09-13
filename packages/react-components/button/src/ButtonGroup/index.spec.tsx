import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React from 'react';

import Button from '../Button';
import ButtonGroup from '.';

describe('ButtonGroup', () => {
  it('renders the buttons with spaces', async () => {
    const { container, getByText } = await axeRender(
      <ButtonGroup>
        <Button type="submit">Button 1</Button>
        <Button type="submit">Button 2</Button>
        <Button type="submit">Button 3</Button>
      </ButtonGroup>
    );

    expect(
      (getByText('Button 1') as HTMLElement).closest('button')
    ).toHaveStyle('margin-left: 0;');

    expect(
      (getByText('Button 2') as HTMLElement).closest('button')
    ).toHaveStyle(`margin-left: ${tokens.size.space[16].value};`);

    expect(
      (getByText('Button 3') as HTMLElement).closest('button')
    ).toHaveStyle(`margin-left: ${tokens.size.space[16].value};`);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('adds the className to the group', async () => {
    const testClass = 'test';
    const { container } = await axeRender(
      <ButtonGroup className={testClass}>
        <Button type="submit">Button 1</Button>
        <Button type="submit">Button 2</Button>
        <Button type="submit">Button 3</Button>
      </ButtonGroup>
    );

    expect(container.firstChild).toHaveClass(testClass);
  });
});
