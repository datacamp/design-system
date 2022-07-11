import React from 'react';

import BaseDialog, { CloseOrigin } from '../BaseDialog';
import Body from '../shared/Body';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import StepsIndicator from './StepsIndicator';

interface DialogProps {
  /**
   * The content of the dialog to render
   */
  children: React.ReactNode;
  /**
   * Only effective when used in conjunction with totalSteps. Determines how
   * many of the step indicators to highlight. The mechanism for controlling the
   * step and navigating between them, should be provided within your content.
   */
  currentStep?: number;
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
   * Class name applied directly to modal's portal
   */
  portalClassName?: string;
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
   * The total number of step indicators to show beneath the Dialog. When
   * present this can be used along with currentStep to display a multi-step
   * dialog.
   */
  totalSteps?: number;
  /**
   * The width of the Dialog in pixels. This will be used when the user's screen
   * is sufficiently large. Otherwise the Dialog will fit to the user's screen.
   */
  width: number;
}

const Dialog = ({
  children,
  currentStep,
  hideCloseButton = false,
  isOpen,
  onClose,
  portalClassName,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  totalSteps,
  width,
}: DialogProps): React.ReactElement => (
  <BaseDialog
    additionalContent={
      totalSteps && (
        <StepsIndicator currentStep={currentStep} totalSteps={totalSteps} />
      )
    }
    contentLabel="Dialog"
    hideCloseButton={hideCloseButton}
    isOpen={isOpen}
    onClose={onClose}
    portalClassName={portalClassName}
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
