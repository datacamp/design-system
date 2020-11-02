import { CloseButton } from '@datacamp/waffles-button';
import Card from '@datacamp/waffles-card';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ClassNames } from '@emotion/core';
import React from 'react';
import ReactModal from 'react-modal';

import { CloseOrigin } from '../BaseDialog';
import Body from '../shared/Body';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import {
  bodyOpenStyle,
  overlayStyle,
  overlayStyleAfterOpen,
  overlayStyleBeforeClose,
} from '../sharedStyles';

import {
  animationTime,
  contentStyleAfterOpen,
  contentStyles,
  contentStylesBeforeClose,
} from './PanelStyles';

interface PanelProps {
  /**
   * The content of the dialog to render
   */
  children: React.ReactNode;
  /**
   * When true the closeButton will be disabled
   */
  closeButtonDisabled?: boolean;
  /**
   * When true, the close button in the top right corner will not be shown
   */
  hideCloseButton?: boolean;
  /**
   * Whether to hide or show the Panel
   */
  isOpen: boolean;
  /**
   * function that is executed immediately after opening the modal
   */
  onAfterOpen?: () => void;
  /**
   * This function is called whenever the user requests to close the Panel. It
   * is the responsibility of the application to handle this correctly and set
   * isOpen to false. This function will be called with an origin string that
   * specifies how the user requested to close the modal.
   */
  onClose: (origin: CloseOrigin) => void;
  /**
   * The side of the screen to display the Panel on.
   */
  position?: 'left' | 'right';
  /**
   * When true (default), the Panel will close when the Esc key is pressed.
   */
  shouldCloseOnEsc?: boolean;
  /**
   * When true (default), the Panel will close when the bckground overlay is
   * clicked.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Forces a specific width
   */
  width?: string;
}

const Panel = ({
  children,
  closeButtonDisabled = false,
  hideCloseButton = false,
  isOpen,
  onAfterOpen,
  onClose,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  width = '45%',
  position = 'right',
}: PanelProps): React.ReactElement => {
  // Callbacks to set the correct origin when closing
  const onCloseButton = (): void => onClose('closeButton');
  const onRequestClose = (
    event: React.MouseEvent | React.KeyboardEvent,
  ): void => onClose(event.type === 'click' ? 'overlayClick' : 'escKey');

  return (
    <ClassNames>
      {({ css: generateClassName, cx }) => {
        const modalClassName = {
          afterOpen: generateClassName(contentStyleAfterOpen),
          base: generateClassName(contentStyles[position], { width }),
          beforeClose: generateClassName(contentStylesBeforeClose[position]),
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
            contentLabel="Panel"
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            overlayClassName={overlayClassName}
            shouldCloseOnEsc={shouldCloseOnEsc}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          >
            {!hideCloseButton && (
              <CloseButton
                css={{
                  position: 'absolute',
                  right: tokens.size.space[8].value,
                  top: tokens.size.space[8].value,
                }}
                disabled={closeButtonDisabled}
                onClick={onCloseButton}
              />
            )}
            <Card
              css={{
                borderRadius: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
              }}
              elevation={4}
            >
              <>{children}</>
            </Card>
          </ReactModal>
        );
      }}
    </ClassNames>
  );
};

Panel.Header = Header;
Panel.Body = Body;
Panel.Footer = Footer;

export default Panel;
