import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { css } from '@emotion/core';
import React, { createRef } from 'react';

import BaseDialog, { CloseOrigin as BaseCloseOrigin } from '../BaseDialog';

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
type CloseOrigin = 'cancelButton' | BaseCloseOrigin;

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
    <BaseDialog
      closeButtonDisabled={isLoading}
      contentLabel="Alert dialog"
      dataAttributes={dataAttributes}
      hideCloseButton={false}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onClose={onClose}
      shouldCloseOnEsc={!isLoading}
      shouldCloseOnOverlayClick={!isLoading}
      width="480px"
    >
      <div css={css({ padding: 32, textAlign: 'center' })}>
        <Heading as="h1" size={600} multiLine>
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
        <ButtonGroup css={{ marginTop: 24 }}>
          <Button
            ref={cancelButtonRef}
            disabled={isLoading}
            onClick={onCancelButton}
          >
            {cancelButtonText}
          </Button>
          <Button
            ref={confirmButtonRef}
            appearance="primary"
            intent={intent}
            isLoading={isLoading}
            onClick={onConfirm}
          >
            {confirmButtonText}
          </Button>
        </ButtonGroup>
      </div>
    </BaseDialog>
  );
};

export default AlertDialog;
