/* eslint-disable sonarjs/no-duplicate-string */
import '@testing-library/jest-dom/extend-expect';

import { act, render } from '@testing-library/react';

import { toast, ToastContainer } from '.';

describe('toast', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('mounts a success toast', () => {
    const title = 'test toast title';
    const { getByRole, getByText } = render(<ToastContainer />);
    toast({ intent: 'success', title });
    act(() => {
      jest.runAllTimers();
    });
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title);

    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });

  it('mounts an error toast', () => {
    const title = 'test toast title';
    const { getByRole, getByText } = render(<ToastContainer />);
    toast({ intent: 'error', title });
    act(() => {
      jest.runAllTimers();
    });
    const renderedToast = getByRole('alert');
    const titleElement = getByText(title);

    expect(renderedToast).toContainElement(titleElement);
    expect(renderedToast).toMatchSnapshot();
  });

  it('shows title and description if it is provided', () => {
    const title = 'test toast title';
    const description = 'test toast description';
    const { getByText } = render(<ToastContainer />);
    toast({ description, intent: 'success', title });
    act(() => {
      jest.runAllTimers();
    });
    const titleElement = getByText(title);
    const descriptionElement = getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('sets the dataAttributes on the toast wrapper element', () => {
    const title = 'test toast title';
    const { getByTestId } = render(<ToastContainer />);
    toast({ dataAttributes: { test: 'example' }, intent: 'success', title });
    act(() => {
      jest.runAllTimers();
    });

    const toastWrapper = getByTestId('toast-wrapper');

    expect(toastWrapper).toHaveAttribute('data-test', 'example');
  });
});
