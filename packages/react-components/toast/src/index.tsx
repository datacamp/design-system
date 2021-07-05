import { toast as toastify, ToastOptions } from 'react-toastify';

import Toast from './Toast';

export { default as ToastContainer } from './ToastContainer';
export { default as Toast } from './Toast';

export const toast = (
  {
    description,
    intent,
    title,
  }: { description?: string; intent: 'success' | 'error'; title: string },
  options?: ToastOptions,
): string | number =>
  toastify(
    ({ closeToast }: { closeToast: () => void }) => (
      <Toast
        closeToast={closeToast}
        description={description}
        intent={intent}
        title={title}
      />
    ),
    options,
  );
