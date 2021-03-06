import * as Icons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import Tooltip from '@datacamp/waffles-tooltip';
import { childrenOfType, computeDataAttributes } from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/react';
import { nChildren, ReactTypeLike } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, {
  ComponentProps,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useUIDSeed } from 'react-uid';
import { mergeRefs } from 'use-callback-ref';

import {
  baseLoadingStyle,
  baseStyle,
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
  /**
   * When the appearance is "primary", the button will have a filled colour.
   * When the appearance is "inverted", the text colour will be white for use on
   * dark backgrounds.
   */
  appearance?: 'default' | 'primary' | 'inverted';
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * The button can be disabled by passing "disabled" as a prop.
   */
  disabled?: boolean;
  /**
   * Defines the color of the button. The cta intent can be used only with
   * the primary appearance.
   */
  intent?: intents;
  /**
   * By passing "loading" as a prop, the button will be disabled and it will
   * render a spinner.
   */
  loading?: boolean;
  /**
   * The size of the button to render.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * When tooltipText is provided, this sets the colour of the tooltip. It
   * should be used make the tooltip visible on different colour backgrounds.
   */
  tooltipAppearance?: 'light' | 'dark';
  /**
   * When tooltipText is provided, this determines the position of that text.
   * "top", "bottom", "left", and "right" will position the tooltip at the
   * centre of that side. The other styles can be used to prevent the tooltip
   * from overflowing when it is longer than the button.
   */
  tooltipPosition?:
    | 'bottom'
    | 'top'
    | 'left'
    | 'right'
    | 'bottomRight'
    | 'bottomLeft'
    | 'topLeft'
    | 'topRight';
  /**
   * An additional description to show on hover or focus.
   */
  tooltipText?: string;
}

interface LinkButtonProps {
  href?: string;
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  target?: '_blank' | undefined;
  type: 'link';
}

interface ButtonButtonProps {
  onClick: (
    event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
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

type intents = 'neutral' | 'danger' | 'success' | 'warning' | 'b2b';

interface IconTextChildProps {
  ariaLabel?: string;
  children: [string, IconElement] | [IconElement, string];
}

export type ButtonProps = BaseButtonProps &
  (SubmitButtonProps | LinkButtonProps | ButtonButtonProps) &
  (IconTextChildProps | IconChildProps | StringChildProps);

const InternalButton = (
  props: ButtonProps & { innerRef?: React.Ref<any> },
): React.ReactElement => {
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
    tooltipAppearance = 'dark',
    tooltipPosition = 'bottom',
    tooltipText,
  } = props;

  const buttonRef = useRef<HTMLElement>();
  const [hasFocus, setHasFocus] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  // remove hover state when disabling a button
  useEffect(() => {
    if (loading || disabled) {
      setHasHover(false);
      setHasFocus(false);
    }
  }, [loading, disabled]);

  const uidSeed = useUIDSeed();
  const tooltipId = uidSeed('button-tooltip');
  const textColor =
    (appearance === 'primary' && intent === 'neutral') ||
    appearance === 'inverted'
      ? 'white'
      : tokens.color.primary.navyText.value.hex;
  const iconColor = appearance === 'primary' ? textColor : 'currentColor';

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

  const focusStyleContent = {
    border: `1px dashed ${textColor}`,
    borderRadius: 2,
    bottom: 2,
    content: "''",
    left: 2,
    position: 'absolute',
    right: 2,
    top: 2,
  } as const;

  const focusStyle = css({
    ':focus::after': focusStyleContent, // add focus style
    ':focus:not(:focus-visible)::after': { border: 'none' }, // in browsers that support :focus-visible hide the focus border
    ':focus-visible::after': focusStyleContent, // in browsers that support :focus-visible reapply focus style
  });

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  const buttonStyle = css(
    baseStyle,
    getAppearanceStyle(appearance, intent, !loading && !disabled),
    disabled && getDisabledStyle(appearance, intent),
    loading && baseLoadingStyle,
    React.Children.count(children) > 1 || typeof children === 'string'
      ? getSize(size)
      : getIconSize(size),
    hasFocus && focusStyle,
  );

  const { Element, ...otherProps } = (() => {
    switch (props.type) {
      case 'link':
        return {
          Element: 'a',
          href: props.href,
          // disabled prop does nothing on an anchor tag. This explicitly stops navigation on disabled link buttons
          onClick:
            disabled || loading
              ? (
                  event: React.MouseEvent<
                    HTMLAnchorElement | HTMLButtonElement,
                    MouseEvent
                  >,
                ) => event.preventDefault()
              : props.onClick,
          target: props.target,
        } as const;
      case 'submit':
        return { Element: 'button', type: 'submit' } as const;
      case 'button':
      default:
        return {
          Element: 'button',
          onClick: !loading ? props.onClick : undefined,
          type: 'button',
        } as const;
    }
  })();

  const tooltipVisible = !(disabled || loading) && (hasFocus || hasHover);

  return (
    <>
      <Element
        aria-describedby={tooltipText && tooltipVisible ? tooltipId : undefined}
        aria-label={ariaLabel}
        className={className}
        css={buttonStyle}
        disabled={disabled || loading}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        ref={innerRef ? mergeRefs([buttonRef, innerRef]) : buttonRef}
        {...otherProps}
        {...parsedDataAttributes}
      >
        {loading && (
          <Spinner color={textColor} css={{ position: 'absolute' }} />
        )}
        {React.Children.map(children, (child, i) =>
          typeof child === 'string' ? (
            <Text
              css={
                React.Children.count(children) > 1
                  ? getTextStyleWithMargin(i)
                  : baseTextStyle
              }
            >
              {child}
            </Text>
          ) : (
            React.cloneElement(child, {
              'aria-hidden': true, // hide icon from screen reader so only ariaLabel or button text is read.
              color: loading ? 'transparent' : child.props.color ?? iconColor,
              size: size === 'large' ? 24 : 18,
              title: '', // remove tooltip from icon within button
            })
          ),
        )}
      </Element>
      {tooltipText && (
        <Tooltip
          appearance={tooltipAppearance}
          id={tooltipId}
          position={tooltipPosition}
          target={buttonRef}
          visible={tooltipVisible}
        >
          {tooltipText}
        </Tooltip>
      )}
    </>
  );
};

// additional prop-types validation that the child is either icon or string
// this is a function so the Icons import is removed with the prop types in production
const getIconValidator = (
  icons: Record<string, ReactTypeLike>,
): PropTypes.Requireable<unknown> => childrenOfType(...Object.values(icons));

InternalButton.propTypes = {
  /**
   * Set the aria-label on the rendered element. This is required when using a single icon as a child.
   */
  ariaLabel: PropTypes.string,
  /**
   * The content of the button. This can either be text, and icon, or a
   * combination of the two. When this is one of the components exposed by
   * @datacamp/waffles-icons, the button will render as a square. In this
   * situation ariaLabel is required.
   */
  children: PropTypes.oneOfType([
    nChildren(
      2,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, getIconValidator(Icons)]),
      ),
    ),
    PropTypes.string,
    getIconValidator(Icons),
  ]).isRequired,
  /**
   * The destination of the link. Only available when type="link".
   */
  href: PropTypes.string,
  /**
   * The callback fired when the button is clicked. Only available when
   * type="button".
   */
  onClick: PropTypes.func,
  /**
   * Specifies where to open the linked document. Only available when
   * type="link".
   */
  target: PropTypes.string,
  /**
   * Determines what is rendered, and what other props are available. The type
   * "submit" should be used for form submissions. The type "link" will render
   * an <a> tag, and should be used with an 'href'. And the type "button" should
   * be used with the 'onClick' prop.
   */
  type: PropTypes.oneOf(['button', 'link', 'submit']),
};

InternalButton.defaultProps = {
  appearance: 'default',
  disabled: false,
  intent: 'neutral',
  loading: false,
  size: 'medium',
  tooltipAppearance: 'dark',
  tooltipPosition: 'bottom',
  type: 'button',
};

const Button = React.forwardRef<any, ButtonProps>((props, ref) => (
  <InternalButton innerRef={ref} {...props} />
));

export default Button;
