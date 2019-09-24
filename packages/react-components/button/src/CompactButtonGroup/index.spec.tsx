import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Button from '../Button';
import CompactButtonGroup from '.';

describe('CompactButtonGroup', () => {
  it('renders the buttons next to each other', async () => {
    const { container, getByText } = await axeRender(
      <CompactButtonGroup>
        <Button type="submit">Button 1</Button>
        <Button type="submit">Button 2</Button>
        <Button type="submit">Button 3</Button>
      </CompactButtonGroup>
    );

    const button1 = (getByText('Button 1') as HTMLElement).closest('button');
    const button2 = (getByText('Button 2') as HTMLElement).closest('button');
    const button3 = (getByText('Button 3') as HTMLElement).closest('button');

    expect(button1).toHaveStyle('margin-left: 0;');
    expect(button1).toHaveStyle('border-radius: 4px 0px 0px 4px;');

    expect(button2).toHaveStyle(`margin-left: -1px;`);
    expect(button2).toHaveStyle('border-radius: 0px;');

    expect(button3).toHaveStyle(`margin-left: -1px;`);
    expect(button3).toHaveStyle('border-radius: 0px 4px 4px 0px;');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('adds the className to the group', async () => {
    const testClass = 'test';
    const { container } = await axeRender(
      <CompactButtonGroup className={testClass}>
        <Button type="submit">Button 1</Button>
        <Button type="submit">Button 2</Button>
        <Button type="submit">Button 3</Button>
      </CompactButtonGroup>
    );

    expect(container.firstChild).toHaveClass(testClass);
  });
});
