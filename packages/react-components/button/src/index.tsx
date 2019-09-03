import { Text } from '@datacamp/waffles-text';
import { ClassNames, css, SerializedStyles } from '@emotion/core';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';

import React, { ReactChild } from 'react';

import {
  baseStyle,
  getIconSize,
  getFontSize,
  getOutlineLoadingStyle,
  getOutlineStyle,
  getPrimaryLoadingStyle,
  getPrimaryStyle,
  getSize,
} from './buttonStyles';
import computeDataAttributes from './computeDataAttributes';
import Spinner from './spinner';

interface BaseButtonProps {
  appearance?: 'default' | 'primary';
  ariaLabel?: string;
  children: string;
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

  const getButtonStyle = (): SerializedStyles => {
    if (typeof children === 'string') {
      return css(
        baseStyle,
        getSize(size),
        isLoading ? isLoadingStyle : appearanceStyle
      );
    }
    return css(
      baseStyle,
      getIconSize(size),
      isLoading ? isLoadingStyle : appearanceStyle
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

  const largeIconStyle = css`
    color: ${tokens.color.opaque.primary.value.rgb};

    height: 24px;
    width: 28px;
  `;

  const defaultIconStyle = css`
    height: 18px;
    width: 18px;
  `;

  const buttonContent = (
    <>
      {isLoading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary'}
        />
      )}
      <ClassNames>
        {({ css: generateClassName }) => {
          return React.Children.map(children, child =>
            React.isValidElement(child) ? (
              React.cloneElement(child, {
                className:
                  size === 'large'
                    ? generateClassName(largeIconStyle)
                    : generateClassName(defaultIconStyle),
              })
            ) : (
              <Text css={getTextStyle}>{child}</Text>
            )
          );
        }}
      </ClassNames>
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
