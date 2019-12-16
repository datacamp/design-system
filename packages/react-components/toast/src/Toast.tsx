import {
  CheckmarkCircleInvertedIcon,
  CrossCircleInvertedIcon,
  CrossIcon,
} from '@datacamp/waffles-icons';
import { Heading } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const colors = {
  error: tokens.color.opaque.red.value.hex,
  success: tokens.color.opaque.green.value.hex,
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
          '0px 0px 1px 0px rgba(61, 66, 81, 0.3), 0px 8px 12px -4px rgba(61, 66, 81, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 512,
        minWidth: 250,
        position: 'relative',
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
      <Heading
        as="h4"
        css={css({ flexGrow: 1, margin: 12 })}
        size={200}
        multiLine
      >
        {title}
      </Heading>
      {closeToast && (
        <button
          css={css({
            ':hover': {
              backgroundColor: tokens.color.opaque.porcelain.value.hex,
            },
            alignItems: 'center',
            ariaLabel: 'close',
            background: 'none',
            border: 'none',
            borderRadius: 2,
            display: 'flex',
            flexShrink: 0,
            height: 20,
            justifyContent: 'space-around',
            marginRight: 12,
            padding: 0,
            width: 20,
          })}
          onClick={closeToast}
          type="button"
        >
          <CrossIcon size={12} title="" aria-hidden />
        </button>
      )}
    </div>
  );
};

export default Toast;
