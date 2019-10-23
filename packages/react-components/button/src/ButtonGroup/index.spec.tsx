import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React from 'react';
import ErrorBoundary from 'react-error-boundary';

import Button from '../Button';
import CompactButtonGroup from '../CompactButtonGroup';
import ButtonGroup from '.';

describe('ButtonGroup', () => {
  it('renders the buttons or CompactButtonGroups with spaces', async () => {
    const { container, getByText } = await axeRender(
      <ButtonGroup>
        <Button type="submit">Button 1</Button>
        <Button type="submit">Button 2</Button>
        <Button type="submit">Button 3</Button>
        <CompactButtonGroup className="compact">
          <Button type="submit">Button 4</Button>
          <Button type="submit">Button 5</Button>
        </CompactButtonGroup>
        {false /* ensures conditional rendering is ok */}
      </ButtonGroup>
    );

    expect(
      (getByText('Button 1') as HTMLElement).closest('button')
    ).toHaveStyle('margin-left: 0;');

    expect(
      (getByText('Button 2') as HTMLElement).closest('button')
    ).toHaveStyle(`margin-left: ${tokens.size.space[16].value}px;`);

    expect(
      (getByText('Button 3') as HTMLElement).closest('button')
    ).toHaveStyle(`margin-left: ${tokens.size.space[16].value}px;`);

    expect(container.querySelector(`.compact`) as HTMLElement).toHaveStyle(
      `margin-left: ${tokens.size.space[16].value}px;`
    );
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

  it('throws an error when different size buttons are provided', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    const onError = jest.fn();
    await axeRender(
      <ErrorBoundary onError={onError}>
        <ButtonGroup>
          <Button type="submit">Button 1</Button>
          <Button type="submit">Button 2</Button>
          <Button size="small" type="submit">
            Button 3
          </Button>
        </ButtonGroup>
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(
      Error('All Buttons in ButtonGroup must be the same size'),
      expect.anything()
    );
  });

  it('throws an error when different size buttons are provided within a nested CompactButtonGroup', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    const onError = jest.fn();
    await axeRender(
      <ErrorBoundary onError={onError}>
        <ButtonGroup>
          <Button type="submit">Button 1</Button>
          <Button type="submit">Button 2</Button>
          <CompactButtonGroup>
            <Button size="small" type="submit">
              Button 3
            </Button>
            <Button size="small" type="submit">
              Button 4
            </Button>
          </CompactButtonGroup>
        </ButtonGroup>
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(
      Error('All Buttons in ButtonGroup must be the same size'),
      expect.anything()
    );
  });
});
