import { Text } from '@datacamp/waffles-text';
import { css, SerializedStyles } from '@emotion/core';
import React from 'react';

import {
  baseStyle,
  getFontSize,
  getOutlineStyle,
  getPrimaryStyle,
  getSize,
} from './buttonStyles';
import computeDataAttributes from './computeDataAttributes';

interface ButtonProps {
  appearance?: 'default' | 'primary';
  ariaLabel?: string;
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  intent?: 'neutral' | 'danger' | 'success' | 'warning';
  onClick?: () => {};
  size?: 'small' | 'medium' | 'large';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      appearance = 'default',
      children,
      className,
      dataAttributes,
      disabled,
      ariaLabel,
      onClick,
      intent = 'neutral',
      size = 'medium',
    } = props;

    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const getTextStyle = (): SerializedStyles => {
      if (appearance === 'default' && !disabled) {
        return css(getFontSize(size), {
          color: '#3D4251',
          fontWeight: 'bold',
        });
      }
      if (disabled) {
        if (appearance === 'primary') {
          return css(getFontSize(size), { color: 'white', fontWeight: 'bold' });
        }
        return css(getFontSize(size), { color: '#D1D3D8', fontWeight: 'bold' });
      }
      return css(getFontSize(size), { color: 'white', fontWeight: 'bold' });
    };

    const getButtonStyle = (): SerializedStyles => {
      if (appearance === 'primary') {
        return css(baseStyle, getSize(size), getPrimaryStyle(intent));
      }
      return css(baseStyle, getSize(size), getOutlineStyle(intent));
    };

    return (
      <button
        aria-label={ariaLabel}
        className={className}
        css={getButtonStyle}
        disabled={disabled}
        onClick={onClick}
        {...parsedDataAttributes}
        ref={ref}
        type="button"
      >
        <Text css={getTextStyle}>{children}</Text>
      </button>
    );
  }
);

export default Button;
