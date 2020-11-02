import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import userEvent from '@testing-library/user-event';
import React from 'react';

import CloseButton from '.';

describe('CloseButton', () => {
  it('renders the close button', async () => {
    const { container } = await axeRender(<CloseButton onClick={() => {}} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('sets className on the button element', async () => {
    const testClass = 'test-className';
    const { container } = await axeRender(
      <CloseButton className={testClass} onClick={() => {}} />,
    );

    expect(container.firstChild).toHaveClass(testClass);
  });

  it('renders the disabled property', async () => {
    const { container } = await axeRender(
      <CloseButton disabled onClick={() => {}} />,
    );

    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it('calls the function on click', async () => {
    const onClick = jest.fn();
    const { container } = await axeRender(<CloseButton onClick={onClick} />);
    userEvent.click(container.firstChild);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
