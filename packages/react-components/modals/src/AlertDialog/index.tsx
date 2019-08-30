import Button from '@datacamp/waffles-button';
import Card from '@datacamp/waffles-card';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { ClassNames, css } from '@emotion/core';
import React, { createRef } from 'react';
import ReactModal from 'react-modal';

import {
  animationTime,
  bodyOpenStyle,
  contentStyle,
  contentStyleAfterOpen,
  contentStyleBeforeClose,
  overlayStyle,
  overlayStyleAfterOpen,
  overlayStyleBeforeClose,
} from './AlertDialogStyles';
import CloseButton from './CloseButton';

interface AlertModalProps {
  cancelButtonText?: string;
  confirmButtonText?: string;
  dataAttributes?: { [key: string]: string };
  description: string;
  intent?: 'neutral' | 'success' | 'warning' | 'danger';
  isLoading?: boolean;
  isOpen: boolean;
  onClose: (origin: CloseOrigin) => void;
  onConfirm: () => void;
  title: string;
}
type CloseOrigin = 'cancelButton' | 'overlayClick' | 'escKey' | 'closeButton';

const AlertDialog: React.FC<AlertModalProps> = ({
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Confirm',
  dataAttributes,
  description,
  intent = 'neutral',
  isLoading = false,
  isOpen,
  onClose,
  onConfirm,
  title,
}) => {
  // Callbacks to set the correct origin when closing
  const onCancelButton = (): void => onClose('cancelButton');
  const onCloseButton = (): void => onClose('closeButton');
  const onRequestClose = (
    event: React.MouseEvent | React.KeyboardEvent
  ): void => onClose(event.type === 'click' ? 'overlayClick' : 'escKey');

  // Focus on the button when the Modal opens
  const cancelButtonRef = createRef<HTMLButtonElement>();
  const confirmButtonRef = createRef<HTMLButtonElement>();
  const onAfterOpen = (): void => {
    const focusButtonRef =
      intent === 'neutral' || intent === 'success'
        ? confirmButtonRef
        : cancelButtonRef;
    if (focusButtonRef && focusButtonRef.current) {
      focusButtonRef.current.focus();
    }
  };

  return (
    <ClassNames>
      {({ css: generateClassName, cx }) => {
        const className = {
          afterOpen: generateClassName(contentStyleAfterOpen),
          base: generateClassName(contentStyle),
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
            className={className}
            closeTimeoutMS={animationTime}
            contentLabel="Alert dialog"
            data={dataAttributes}
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            overlayClassName={overlayClassName}
          >
            <Card css={css({ padding: 32, textAlign: 'center' })} elevation={4}>
              <CloseButton onClick={onCloseButton} />
              <Heading as="h1" size={600} multiLine>
                {title}
              </Heading>
              <Paragraph>{description}</Paragraph>
              <div css={{ marginTop: 24 }}>
                <Button
                  ref={cancelButtonRef}
                  css={{ marginRight: 16 }}
                  onClick={onCancelButton}
                >
                  {cancelButtonText}
                </Button>
                <Button
                  ref={confirmButtonRef}
                  appearance="primary"
                  intent={intent}
                  onClick={onConfirm}
                >
                  {confirmButtonText}
                </Button>
              </div>
            </Card>
          </ReactModal>
        );
      }}
    </ClassNames>
  );
};

export default AlertDialog;
