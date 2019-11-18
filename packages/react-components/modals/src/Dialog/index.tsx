import React from 'react';

import BaseDialog, { CloseOrigin } from '../BaseDialog';
import Body from '../shared/Body';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

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
   * This function is called whenever the user requests to close the Dialog. It
   * is the responsibility of the application to handle this correctly and set
   * isOpen to false. This function will be called with an origin string that
   * specifies how the user requested to close the modal.
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
Dialog.Body = Body;
Dialog.Footer = Footer;

export default Dialog;
