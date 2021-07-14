import tokens from '@datacamp/waffles-tokens';
import {
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import baseStyle from '../baseStyle';

export type Size = 200 | 300 | 400 | 500 | 600 | 650 | 700 | 800 | 900;
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
  /**
   * The html element to render.
   */
  as: HeadingElement;
  /**
   * The content of the Heading. This should be a string, but it can also
   * contain Strong components.
   */
  children: React.ReactNode;
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
   * When true, the Heading will wrap text. By default the text will be
   * truncated.
   */
  multiLine?: boolean;
  /**
   * The size of the Heading to render.
   */
  size: Size;
}

const baseHeaderStyle = css({
  color: tokens.colors.navy,
  fontWeight: tokens.fontWeights.bold,
  margin: 0,
});

const singleLineStyle = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const multiLineStyle = css({
  overflow: 'reset',
  whiteSpace: 'normal',
});

// 700 is most commonly used for h1
const sizeMap = {
  200: tokens.fontSizes.small,
  300: tokens.fontSizes.small,
  400: tokens.fontSizes.small,
  500: tokens.fontSizes.medium,
  600: tokens.fontSizes.large,
  650: tokens.fontSizes.xlarge,
  700: tokens.fontSizes.xxlarge,
  800: tokens.fontSizes.huge,
  900: tokens.fontSizes.huge,
};

const lineHeightMap = {
  200: tokens.lineHeights.small,
  300: tokens.lineHeights.small,
  400: tokens.lineHeights.small,
  500: tokens.lineHeights.medium,
  600: tokens.lineHeights.medium,
  650: tokens.lineHeights.large,
  700: tokens.lineHeights.xlarge,
  800: tokens.lineHeights.xxlarge,
  900: tokens.lineHeights.xxlarge,
};

const letterSpacingMap = {
  200: tokens.letterSpacing.relaxed,
  300: tokens.letterSpacing.default,
  400: tokens.letterSpacing.default,
  500: tokens.letterSpacing.default,
  600: tokens.letterSpacing.default,
  650: tokens.letterSpacing.default,
  700: tokens.letterSpacing.default,
  800: tokens.letterSpacing.default,
  900: tokens.letterSpacing.tight,
};

const getStyle = (size: Size, multiLine: boolean): SerializedStyles => {
  return css(
    baseStyle,
    baseHeaderStyle,
    multiLine ? multiLineStyle : singleLineStyle,
    {
      fontSize: sizeMap[size],
      letterSpacing: letterSpacingMap[size],
      lineHeight: lineHeightMap[size],
      [ssrSafeNotFirstChildSelector]: {
        marginTop: size >= 800 ? tokens.spacing.medium : tokens.spacing.small,
      },
    },
  );
};

const Heading = ({
  as: Element,
  children,
  className,
  dataAttributes,
  multiLine = false,
  size,
}: HeadingProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);
  const style = getStyle(size, multiLine);

  return (
    <Element className={className} css={style} {...parsedDataAttributes}>
      {children}
    </Element>
  );
};

Heading.defaultProps = { multiLine: false };

export default Heading;
