import { Text } from '@datacamp/waffles-text';
import { computeDataAttributes } from '@datacamp/waffles-utils';
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
import Spinner from './spinner';

interface BaseButtonProps {
  appearance?: 'default' | 'primary';
  ariaLabel?: string;
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

interface OtherIntentsProps {
  intent?: 'neutral' | 'danger' | 'success' | 'warning';
}

interface LinkButtonProps {
  href: string;
  target?: '_blank' | undefined;
  type: 'link';
}

interface ButtonButtonProps {
  onClick: () => void;
  type?: 'button' | undefined;
}

interface SubmitButtonProps {
  type: 'submit';
}

interface CtaButtonProps {
  appearance: 'primary';
  intent: 'cta';
}

type ButtonProps = BaseButtonProps &
  (ButtonButtonProps | LinkButtonProps | SubmitButtonProps) &
  (CtaButtonProps | OtherIntentsProps);

const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const {
    appearance = 'default',
    ariaLabel,
    children,
    className,
    dataAttributes,
    disabled = false,
    intent = 'neutral',
    isLoading = false,
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

  const commonProps = {
    'aria-label': ariaLabel,
    className,
    css: getButtonStyle,
    disabled: disabled || isLoading,
    ...parsedDataAttributes,
    ref,
  };

  const buttonContent = (
    <>
      {isLoading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary'}
        />
      )}
      <Text css={getTextStyle}>{children}</Text>
    </>
  );

  if (props.type === 'link') {
    const { href, target } = props;
    return (
      <a {...commonProps} href={href} target={target}>
        {buttonContent}
      </a>
    );
  }

  if (props.type === 'submit') {
    return (
      <button {...commonProps} type="submit">
        {buttonContent}
      </button>
    );
  }

  const { onClick } = props;
  return (
    <button {...commonProps} onClick={onClick} type="button">
      {buttonContent}
    </button>
  );
});

export default Button;
