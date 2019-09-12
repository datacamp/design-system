import React from 'react';

import BaseDialog, { CloseOrigin } from '../BaseDialog';
import Header from './Header';

interface DialogProps {
  /**
   * The content of the dialog to render
   */
  children: React.ReactNode;
  /**
   * When true, the close button in the top right corner will not be shown
   */
  hideCloseButton?: boolean;
  /**
   * Whether to hide or show the Dialog
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed
   * @param origin The original source of the request to close.
   */
  onClose: (origin: CloseOrigin) => void;
  /**
   * When true (default), the Dialog will close when the Esc key is pressed.
   */
  shouldCloseOnEsc?: boolean;
  /**
   * When true (default), the Dialog will close when the bckground overlay is
   * clicked.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Forces a specific width
   */
  width?: string;
}

const Dialog = ({
  children,
  hideCloseButton = false,
  isOpen,
  onClose,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  width,
}: DialogProps): React.ReactElement => (
  <BaseDialog
    contentLabel="Dialog"
    hideCloseButton={hideCloseButton}
    isOpen={isOpen}
    onClose={onClose}
    shouldCloseOnEsc={shouldCloseOnEsc}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    width={width}
  >
    {children}
  </BaseDialog>
);

Dialog.Header = Header;

export default Dialog;
