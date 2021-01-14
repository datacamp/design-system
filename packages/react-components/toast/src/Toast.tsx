import { CloseButton } from '@datacamp/waffles-button';
import {
  CheckmarkCircleInvertedIcon,
  CrossCircleInvertedIcon,
} from '@datacamp/waffles-icons';
import { Heading } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';
import React from 'react';

const colors = {
  error: tokens.color.primary.red.value.hex,
  success: tokens.color.primary.green.value.hex,
};

const icons = {
  error: CrossCircleInvertedIcon,
  success: CheckmarkCircleInvertedIcon,
};

interface ToastProps {
  /**
   * Used internally. Do not explicitly set
   */
  closeToast?: () => void;
  /**
   * Determines the colour and icon displayed in the toast.
   */
  intent: 'success' | 'error';
  /**
   * The main content to display in the toast
   */
  title: string;
}

const Toast = ({
  closeToast,
  intent,
  title,
}: ToastProps): React.ReactElement => {
  const Icon = icons[intent];
  const color = colors[intent];
  return (
    <div
      css={css({
        alignItems: 'center',
        background: 'white',
        borderRadius: 4,
        boxShadow:
          '0px 0px 1px 0px rgba(5, 25, 45, 0.3), 0px 8px 12px -4px rgba(5, 25, 45, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 512,
        minWidth: 250,
        position: 'relative',
        zIndex: parseInt(tokens.zIndex[999].value, 10),
      })}
    >
      <div
        css={{
          backgroundColor: color,
          borderRadius: '4px 0px 0px 4px',
          height: '100%',
          position: 'absolute',
          width: 4,
        }}
      />
      <Icon
        color={color}
        css={css({ flexShrink: 0, marginLeft: 16 })}
        title={intent}
      />
      <div css={css({ flexGrow: 1, margin: 12 })}>
        <Heading as="h4" multiLine size={300}>
          {title}
        </Heading>
      </div>
      {closeToast && (
        <CloseButton
          css={{ flex: 'none', marginRight: 12 }}
          onClick={closeToast}
          size="small"
        />
      )}
    </div>
  );
};

export default Toast;
