import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import List from '.';

describe('List', () => {
  it('renders an unordered list', async () => {
    const { container } = await axeRender(
      <List className="test-class">
        <List.Item>top level item 1</List.Item>
        <List.Item>top level item 2</List.Item>
        <List.Item>
          nested items
          <List>
            <List.Item>nested item 1</List.Item>
            <List.Item>nested item 2</List.Item>
          </List>
        </List.Item>
      </List>
    );
    expect(container.firstChild).toHaveClass('test-class');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders an ordered list', async () => {
    const { container } = await axeRender(
      <List className="test-class">
        <List.Item>top level item 1</List.Item>
        <List.Item>top level item 2</List.Item>
        <List.Item>
          nested items
          <List>
            <List.Item>nested item 1</List.Item>
            <List.Item>nested item 2</List.Item>
          </List>
        </List.Item>
      </List>
    );
    expect(container.firstChild).toHaveClass('test-class');
    expect(container.firstChild).toMatchSnapshot();
  });
});
