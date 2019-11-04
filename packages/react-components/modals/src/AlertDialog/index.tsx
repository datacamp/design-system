import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { css } from '@emotion/core';
import React, { createRef } from 'react';

import BaseDialog, { CloseOrigin as BaseCloseOrigin } from '../BaseDialog';

interface AlertDialogProps {
  /**
   * The text on the cancel button.
   */
  cancelButtonText?: string;
  /**
   * The text on the confirm button.
   */
  confirmButtonText?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * The body text to render in the Dialog.
   */
  description: string;
  /**
   * The main intention of the Dialog. This is used to set the button colors and
   * provide a default focus when the Dialog opens.
   */
  intent?: 'neutral' | 'success' | 'warning' | 'danger';
  /**
   * When this is set to true the Dialog will show. It is preferred to use this
   * to control when to display the dialog rather than simply mounting and
   * unmounting as setting this to false allows the close animation to play
   * fully.
   */
  isOpen: boolean;
  /**
   * When this is set to true the Modal will show a spinner in the confirmation
   * button.The user will not be able to close the dialog while it's loading
   */
  loading?: boolean;
  /**
   * This function is called whenever the user requests to close the Dialog. It
   * is the responsibility of the application to handle this correctly and set
   * isOpen to false. This function will be called with an origin string that
   * specifies how the user requested to close the modal.
   */
  onClose: (origin: CloseOrigin) => void;
  /**
   * This function is called whenever the user clicks the confirm button.
   */
  onConfirm: () => void;
  /**
   * The main heading for the Dialog.
   */
  title: string;
}

type CloseOrigin = 'cancelButton' | BaseCloseOrigin;

const AlertDialog = ({
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Confirm',
  dataAttributes,
  description,
  intent = 'neutral',
  loading = false,
  isOpen,
  onClose,
  onConfirm,
  title,
}: AlertDialogProps): React.ReactElement => {
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
      closeButtonDisabled={loading}
      contentLabel="Alert dialog"
      dataAttributes={dataAttributes}
      hideCloseButton={false}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onClose={onClose}
      shouldCloseOnEsc={!loading}
      shouldCloseOnOverlayClick={!loading}
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
            disabled={loading}
            onClick={onCancelButton}
          >
            {cancelButtonText}
          </Button>
          <Button
            ref={confirmButtonRef}
            appearance="primary"
            intent={intent}
            loading={loading}
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
