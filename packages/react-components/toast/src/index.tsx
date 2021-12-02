import { toast as toastify, ToastOptions } from 'react-toastify';

import Toast from './Toast';

export { default as ToastContainer } from './ToastContainer';
export { default as Toast } from './Toast';

type ToastConfig = {
  dataAttributes?: { [key: string]: string };
  description?: string;
  intent: 'success' | 'error';
  title: string;
};

export const toast = (
  { dataAttributes, description, intent, title }: ToastConfig,
  options?: ToastOptions,
): string | number =>
  toastify(({ closeToast }: { closeToast: () => void }) => {
    return (
      <Toast
        closeToast={closeToast}
        dataAttributes={dataAttributes}
        description={description}
        intent={intent}
        title={title}
      />
    );
  }, options);
