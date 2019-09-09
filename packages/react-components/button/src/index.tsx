import * as Icons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import {
  baseColors,
  baseLoadingStyle,
  baseStyle,
  disabledColors,
  fontSizes,
  getAppearanceStyle,
  getDisabledStyle,
  getIconSize,
  getSize,
} from './buttonStyles';
import Spinner from './spinner';

interface BaseButtonProps {
  appearance?: 'default' | 'primary';
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  intent?: 'neutral' | 'danger' | 'success' | 'warning';
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
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

interface StringChildProps {
  ariaLabel?: string;
  children: string;
}

interface IconChildProps {
  ariaLabel: string;
  /**
   * When providing a react element as a child, it can only be one of the Icon
   * components exposed by @datacamp/waffles-icons
   */
  children: ReactElement;
}

type ButtonProps = BaseButtonProps &
  (ButtonButtonProps | LinkButtonProps | SubmitButtonProps) &
  (StringChildProps | IconChildProps);

const Button: React.FC<ButtonProps & { innerRef?: React.Ref<any> }> = props => {
  const {
    appearance = 'default',
    ariaLabel,
    children,
    className,
    dataAttributes,
    disabled = false,
    innerRef,
    intent = 'neutral',
    isLoading = false,
    size = 'medium',
  } = props;

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  // TEXT STYLES

  const outlineTextColor = disabled ? '#D1D3D8' : '#3D4251';
  const outlineIconColor = disabled
    ? disabledColors[intent]
    : baseColors[intent];

  const textColor = appearance === 'primary' ? 'white' : outlineTextColor;
  const getColor = appearance === 'primary' ? 'white' : outlineIconColor;

  const getTextStyle = (): SerializedStyles => {
    return css(fontSizes[size], {
      color: isLoading ? 'transparent' : textColor,
      fontWeight: 'bold',
    });
  };

  // BUTTON STYLES

  const buttonStyle = css(
    baseStyle,
    getAppearanceStyle(appearance, intent, !isLoading && !disabled),
    disabled && getDisabledStyle(appearance, intent),
    isLoading && baseLoadingStyle,
    typeof children === 'string' ? getSize(size) : getIconSize(size)
  );

  const commonProps = {
    'aria-label': ariaLabel,
    children,
    className,
    css: buttonStyle,
    disabled: disabled || isLoading,
    ...parsedDataAttributes,
    ref: innerRef,
  };

  const buttonContent = (
    <>
      {isLoading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary'}
        />
      )}
      {React.isValidElement(children) ? (
        React.cloneElement(children, {
          color: isLoading ? 'transparent' : getColor,
          size: size === 'large' ? 24 : 18,
        })
      ) : (
        <Text css={getTextStyle}>{children}</Text>
      )}
    </>
  );

  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'link') {
    const { href, target } = props;

    return (
      <a {...commonProps} href={href} target={target}>
        {buttonContent}
      </a>
    );
  }

  // eslint-disable-next-line react/destructuring-assignment
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
};

// additional prop-types validation that the child is either icon or string
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    childrenOfType(...Object.values(Icons)),
  ]) as PropTypes.Validator<ReactElement>,
};

export default React.forwardRef<any, ButtonProps>((props, ref) => (
  <Button innerRef={ref} {...props} />
));
