import { Text } from '@datacamp/waffles-text';
import { css, SerializedStyles } from '@emotion/core';
import React, { ReactElement } from 'react';

import {
  baseStyle,
  iconLoadingStyle,
  getDisabledIconColor,
  getFontSize,
  getIconSize,
  getIconOutlineColor,
  getOutlineIconLoadingStyle,
  getOutlineLoadingStyle,
  getOutlineStyle,
  getPrimaryIconLoadingColor,
  getPrimaryLoadingStyle,
  getPrimaryStyle,
  getSize,
} from './buttonStyles';
import computeDataAttributes from './computeDataAttributes';
import Spinner from './spinner';

interface BaseButtonProps {
  appearance?: 'default' | 'primary';
  ariaLabel?: string;
  children: string | ReactElement;
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  intent?: 'neutral' | 'danger' | 'success' | 'warning';
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  target?: '_blank' | undefined;
  type: 'link';
}

interface ButtonButtonProps extends BaseButtonProps {
  onClick: () => void;
  type?: 'button' | undefined;
}

interface SubmitButtonProps extends BaseButtonProps {
  type: 'submit';
}

const Button = React.forwardRef<
  any,
  LinkButtonProps | ButtonButtonProps | SubmitButtonProps
>((props, ref) => {
  const {
    appearance = 'default',
    ariaLabel,
    children,
    className,
    dataAttributes,
    disabled,
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

  const getIconLoadingColor =
    appearance === 'primary'
      ? getPrimaryIconLoadingColor(intent)
      : getOutlineIconLoadingStyle(intent);

  const getButtonStyle = (): SerializedStyles => {
    if (typeof children === 'string') {
      return css(
        baseStyle,
        getSize(size),
        isLoading ? css(isLoadingStyle) : appearanceStyle
      );
    }
    return css(
      baseStyle,
      getIconSize(size),
      isLoading ? css(getIconLoadingColor, iconLoadingStyle) : appearanceStyle
    );
  };

  const commonProps = {
    'aria-label': ariaLabel,
    children,
    className,
    css: getButtonStyle,
    disabled,
    ...parsedDataAttributes,
    ref,
  };

  const isIconDisabled = disabled
    ? getDisabledIconColor(intent)
    : getIconOutlineColor(intent);

  const getColor = appearance === 'primary' ? 'white' : isIconDisabled;

  const buttonContent = (
    <>
      {isLoading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary'}
        />
      )}
      {React.Children.map(children, child =>
        React.isValidElement(child) ? (
          React.cloneElement(child, {
            color: isLoading ? 'transparent' : getColor,
            size: size === 'large' ? 24 : 18,
          })
        ) : (
          <Text css={getTextStyle}>{child}</Text>
        )
      )}
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
    <button
      {...commonProps}
      onClick={!isLoading ? onClick : undefined}
      type="button"
    >
      {buttonContent}
    </button>
  );
});

export default Button;
