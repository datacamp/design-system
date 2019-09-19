import * as Icons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/core';
import { childrenOfType, nChildren } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ComponentProps, ReactElement } from 'react';

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

type IconType = typeof Icons.AddCircleIcon; // Could use any Icon here
type IconElement = ReactElement<ComponentProps<IconType>, IconType>;

interface BaseButtonProps {
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
  loading?: boolean;
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
  children: IconElement;
}

interface DefaultProps {
  appearance?: 'default';
  intent?: intents;
}

interface PrimaryProps {
  appearance: 'primary';
  intent?: intents | 'cta';
}

type intents = 'neutral' | 'danger' | 'success' | 'warning';

interface IconTextChildProps {
  ariaLabel?: string;
  children: [string, IconElement] | [IconElement, string];
}

export type ButtonProps = BaseButtonProps &
  (ButtonButtonProps | LinkButtonProps | SubmitButtonProps) &
  (StringChildProps | IconChildProps | IconTextChildProps) &
  (DefaultProps | PrimaryProps);

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
    loading = false,
    size = 'medium',
  } = props;

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  // TEXT STYLES

  const outlineTextColor = disabled
    ? tokens.color.opaque.greyLight.value.hex
    : tokens.color.opaque.greyDark.value.hex;
  const outlineIconColor = disabled
    ? disabledColors[intent]
    : baseColors[intent];

  const ctaTextColor = intent === 'cta' ? outlineTextColor : 'white';

  const textColor = appearance === 'primary' ? ctaTextColor : outlineTextColor;
  const getColor = appearance === 'primary' ? ctaTextColor : outlineIconColor;

  const baseTextStyle = css(fontSizes[size], {
    color: loading ? 'transparent' : textColor,
    fontWeight: 'bold',
  });

  const margin =
    size === 'large' ? tokens.size.space[16].value : tokens.size.space[8].value;

  const getTextStyleWithMargin = (i: number | undefined): SerializedStyles => {
    if (i === 1) {
      return css(baseTextStyle, {
        marginLeft: margin,
      });
    }
    return css(baseTextStyle, {
      marginRight: margin,
    });
  };

  // BUTTON STYLES

  const buttonStyle = css(
    baseStyle,
    getAppearanceStyle(appearance, intent, !loading && !disabled),
    disabled && getDisabledStyle(appearance, intent),
    loading && baseLoadingStyle,
    React.Children.count(children) > 1 || typeof children === 'string'
      ? getSize(size)
      : getIconSize(size)
  );

  const commonProps = {
    'aria-label': ariaLabel,
    className,
    css: buttonStyle,
    disabled: disabled || loading,
    ...parsedDataAttributes,
    ref: innerRef,
  };

  const iconOrText = (
    child: string | IconElement,
    i?: number
  ): ReactElement => {
    if (typeof child === 'string') {
      return (
        <Text
          css={
            React.Children.count(children) > 1
              ? getTextStyleWithMargin(i)
              : baseTextStyle
          }
        >
          {child}
        </Text>
      );
    }
    return React.cloneElement(child, {
      color: loading ? 'transparent' : getColor,
      size: size === 'large' ? 24 : 18,
    });
  };

  const buttonContent = (
    <>
      {loading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary' && intent !== 'cta'}
        />
      )}
      {React.Children.map<unknown, string | IconElement>(children, (child, i) =>
        iconOrText(child, i)
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
      onClick={!loading ? onClick : undefined}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

// additional prop-types validation that the child is either icon or string
const iconValidator = childrenOfType(...Object.values(Icons));

Button.propTypes = {
  children: PropTypes.oneOfType([
    nChildren(
      2,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, iconValidator]))
    ),
    PropTypes.string,
    iconValidator,
  ]) as PropTypes.Validator<IconElement>,
};

const ButtonWithRef = React.forwardRef<any, ButtonProps>((props, ref) => (
  <Button innerRef={ref} {...props} />
));

ButtonWithRef.displayName = 'Button';

export default ButtonWithRef;
