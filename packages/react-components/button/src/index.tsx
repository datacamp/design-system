import * as Icons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
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
  className?: string;
  dataAttributes?: { [key: string]: string };
  disabled?: boolean;
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
  children: (string | ReactElement)[];
}

type ButtonProps = BaseButtonProps &
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
    isLoading = false,
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

  const getTextStyle = css(fontSizes[size], {
    color: isLoading ? 'transparent' : textColor,
    fontWeight: 'bold',
  });

  const setMargin = size === 'large' ? '18px' : '8px';

  const getMargin = (i: number | undefined): SerializedStyles => {
    if (i === 1) {
      return css(getTextStyle, {
        marginLeft: setMargin,
      });
    }
    return css(getTextStyle, {
      marginRight: setMargin,
    });
  };

  // BUTTON STYLES

  const checkSingleChild =
    typeof children === 'string' ? getSize(size) : getIconSize(size);

  const buttonStyle = css(
    baseStyle,
    getAppearanceStyle(appearance, intent, !isLoading && !disabled),
    disabled && getDisabledStyle(appearance, intent),
    isLoading && baseLoadingStyle,
    React.Children.count(children) === 1 ? checkSingleChild : getSize(size)
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

  const iconOrText = (
    child: string | ReactElement<{ color: string; size: number }>,
    i?: number
  ): ReactElement => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color: isLoading ? 'transparent' : getColor,
        size: size === 'large' ? 24 : 18,
      });
    }
    return (
      <Text
        css={React.Children.count(children) > 1 ? getMargin(i) : getTextStyle}
      >
        {child}
      </Text>
    );
  };

  const buttonContent = (
    <>
      {isLoading && (
        <Spinner
          css={{ position: 'absolute' }}
          inverted={appearance === 'primary' && intent !== 'cta'}
        />
      )}
      {React.Children.count(children) > 1
        ? React.Children.map<unknown, string | ReactElement>(
            children,
            (child, i) => iconOrText(child, i)
          )
        : iconOrText(children as string | ReactElement)}
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
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      childrenOfType(...Object.values(Icons)),
    ]) as PropTypes.Validator<ReactElement>),
    PropTypes.string,
    childrenOfType(...Object.values(Icons)),
  ]) as PropTypes.Validator<ReactElement>,
};

export default React.forwardRef<any, ButtonProps>((props, ref) => (
  <Button innerRef={ref} {...props} />
));
