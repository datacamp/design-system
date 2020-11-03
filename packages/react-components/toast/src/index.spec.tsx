import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { toast, ToastContainer } from '.';

jest.useFakeTimers();

describe('toast', () => {
  it('mounts a success toast', () => {
    const title = 'test toast title';
    const { getByRole, getByText } = render(<ToastContainer />);
    toast({ intent: 'success', title });
    jest.runAllTimers();
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title) as HTMLElement;
    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });

  it('mounts an error toast', () => {
    const title = 'test toast title';
    const { getByRole, getByText } = render(<ToastContainer />);
    toast({ intent: 'error', title });
    jest.runAllTimers();
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title) as HTMLElement;
    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });
});
