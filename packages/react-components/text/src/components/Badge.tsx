import tokens from '@datacamp/waffles-tokens';
import { hexColorLuminance } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

import Strong from './Strong';

interface BadgeProps {
  /**
   * The content to render in the Badge
   */
  children: string;
  /**
   * Additionaly css className to add to the rendered element
   */
  className?: string;
  /**
   * The colour of the Badge. This can be any HEX color, but it is recommended
   * to use a color from @datacamp/waffles-tokens. The text color will be set
   * automatically.
   */
  color: string;
  /**
   * The size of the Badge to render.
   */
  size?: 'small' | 'large';
}

const baseStyle = css({
  borderRadius: tokens.borderRadius.medium,
  display: 'inline-block',
  textTransform: 'uppercase',
});

const sizeStyles = {
  large: {
    fontSize: tokens.fontSizes.medium,
    lineHeight: '18px',
    paddingLeft: tokens.spacing.xsmall,
    paddingRight: tokens.spacing.xsmall,
  },
  small: {
    fontSize: tokens.fontSizes.small,
    lineHeight: '18px',
    paddingLeft: tokens.spacing.xsmall,
    paddingRight: tokens.spacing.xsmall,
  },
};

const getTextColor = (backgroundColor: string): string => {
  // Compare to luminance of neutral grey color in the middle of the RGB scale
  const isColorLight = hexColorLuminance(backgroundColor) > 0.179;

  return isColorLight ? tokens.colors.navy : tokens.colors.white;
};

const Badge = ({
  children,
  className,
  color,
  size = 'small',
}: BadgeProps): JSX.Element => (
  <Strong
    className={className}
    css={css(
      baseStyle,
      { backgroundColor: color, color: getTextColor(color) },
      sizeStyles[size],
    )}
  >
    {children}
  </Strong>
);

export default Badge;
