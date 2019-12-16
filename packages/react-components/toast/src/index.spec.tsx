import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import { toast, ToastContainer } from '.';

jest.useFakeTimers();

describe('toast', () => {
  it('mounts a success toast', async () => {
    const title = 'test toast title';
    const { getByText, getByRole } = await axeRender(<ToastContainer />);
    toast({ intent: 'success', title });
    jest.runAllTimers();
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title) as HTMLElement;
    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });

  it('mounts an error toast', async () => {
    const title = 'test toast title';
    const { getByText, getByRole } = await axeRender(<ToastContainer />);
    toast({ intent: 'error', title });
    jest.runAllTimers();
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title) as HTMLElement;
    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });
});
