import Card from '@datacamp/waffles-card';
import { ClassNames } from '@emotion/core';
import React from 'react';
import ReactModal from 'react-modal';

import CloseButton from '../shared/CloseButton';
import {
  bodyOpenStyle,
  overlayStyle,
  overlayStyleAfterOpen,
  overlayStyleBeforeClose,
} from '../sharedStyles';
import {
  animationTime,
  contentStyle,
  contentStyleAfterOpen,
  contentStyleBeforeClose,
} from './DialogStyles';

interface DialogProps {
  /**
   * The content of the Dialog
   */
  children: React.ReactNode;
  /**
   * When true the closeButton will be disabled
   */
  closeButtonDisabled?: boolean;
  /**
   * Used to set the ariaLabel for the modal
   */
  contentLabel: string;
  /**
   * Used to set data- html attributes
   */
  dataAttributes?: { [key: string]: string };
  /**
   * When set to true, a close button will show in the top right corner
   */
  hideCloseButton: boolean;
  /**
   * Show or hide the dialog
   */
  isOpen: boolean;
  /**
   * function that is executed immediately after opening the modal
   */
  onAfterOpen?: () => void;
  /**
   * Called when the modal is closed
   * @param origin The original source of the request to close.
   */
  onClose: (origin: CloseOrigin) => void;
  /**
   * When set to true the Esc key can be used to close the dialog
   */
  shouldCloseOnEsc: boolean;
  /**
   * When set to true the dialog will close when the background is clicked
   */
  shouldCloseOnOverlayClick: boolean;
  /**
   * Forces a specific width on the Modal
   */
  width?: string;
}

export type CloseOrigin = 'overlayClick' | 'escKey' | 'closeButton';

const Dialog: React.FC<DialogProps> = ({
  children,
  contentLabel,
  dataAttributes,
  closeButtonDisabled = false,
  hideCloseButton,
  isOpen,
  onAfterOpen,
  onClose,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  width,
}) => {
  // Callbacks to set the correct origin when closing
  const onCloseButton = (): void => onClose('closeButton');
  const onRequestClose = (
    event: React.MouseEvent | React.KeyboardEvent
  ): void => onClose(event.type === 'click' ? 'overlayClick' : 'escKey');

  return (
    <ClassNames>
      {({ css: generateClassName, cx }) => {
        const modalClassName = {
          afterOpen: generateClassName(contentStyleAfterOpen),
          base: generateClassName(contentStyle, { width }),
          beforeClose: generateClassName(contentStyleBeforeClose),
        };
        const overlayClassName = {
          afterOpen: generateClassName(overlayStyleAfterOpen),
          base: cx('modal-overlay', generateClassName(overlayStyle)),
          beforeClose: generateClassName(overlayStyleBeforeClose),
        };
        const bodyOpenClassName = generateClassName(bodyOpenStyle);
        return (
          <ReactModal
            bodyOpenClassName={bodyOpenClassName}
            className={modalClassName}
            closeTimeoutMS={animationTime}
            contentLabel={contentLabel}
            data={dataAttributes}
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            overlayClassName={overlayClassName}
            shouldCloseOnEsc={shouldCloseOnEsc}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          >
            {!hideCloseButton && (
              <CloseButton
                disabled={closeButtonDisabled}
                onClick={onCloseButton}
              />
            )}
            <Card elevation={4}>
              <>{children}</>
            </Card>
          </ReactModal>
        );
      }}
    </ClassNames>
  );
};

export default Dialog;
