import { Text } from '@datacamp/waffles-text';
import { css, SerializedStyles } from '@emotion/core';
import React from 'react';

import {
  baseStyle,
  getFontSize,
  getOutlineLoadingStyle,
  getOutlineStyle,
  getPrimaryLoadingStyle,
  getPrimaryStyle,
  getSize,
} from './buttonStyles';
import computeDataAttributes from './computeDataAttributes';
import Spinner from './spinner';

interface ButtonProps {
  appearance?: 'default' | 'primary';
  ariaLabel?: string;
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  intent?: 'neutral' | 'danger' | 'success' | 'warning';
  isLoading?: boolean;
  onClick?: () => {};
  size?: 'small' | 'medium' | 'large';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      appearance = 'default',
      ariaLabel,
      children,
      className,
      dataAttributes,
      disabled,
      intent = 'neutral',
      isLoading = false,
      onClick,
      size = 'medium',
    } = props;

    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    // TEXT STYLES

    const getOutlineTextColor = disabled
      ? css({ color: '#D1D3D8' })
      : css({ color: '#3D4251' });

    const baseTextStyle =
      appearance === 'primary' ? css({ color: 'white' }) : getOutlineTextColor;

    const getTextStyle = (): SerializedStyles => {
      return css(
        getFontSize(size),
        isLoading ? { color: 'transparent' } : baseTextStyle
      );
    };

    // BUTTON STYLES

    const appearanceStyle =
      appearance === 'primary'
        ? getPrimaryStyle(intent)
        : getOutlineStyle(intent);

    const isLoadingStyle =
      appearance === 'primary'
        ? css(getPrimaryLoadingStyle(intent))
        : css(getOutlineLoadingStyle(intent));

    const getButtonStyle = (): SerializedStyles => {
      return css(
        baseStyle,
        getSize(size),
        isLoading ? isLoadingStyle : appearanceStyle
      );
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
        {isLoading && (
          <Spinner
            css={{ position: 'absolute' }}
            inverted={appearance === 'primary'}
          />
        )}
        <Text css={getTextStyle}>{children}</Text>
      </button>
    );
  }
);

export default Button;
