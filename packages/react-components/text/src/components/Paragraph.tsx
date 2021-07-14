import tokens from '@datacamp/waffles-tokens';
import {
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React from 'react';

import baseStyle from '../baseStyle';

interface ParagraphProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, Strong components, Small components, Emphasis components, and
   * Code components.
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
}

const paragraphStyle = css(baseStyle, {
  fontSize: tokens.fontSizes.medium,
  fontWeight: tokens.fontWeights.regular,
  lineHeight: tokens.lineHeights.medium,
  margin: 0,
  [ssrSafeNotFirstChildSelector]: { marginTop: tokens.spacing.small },
});

const Paragraph = ({
  children,
  className,
  dataAttributes,
}: ParagraphProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <p className={className} css={paragraphStyle} {...parsedDataAttributes}>
      {children}
    </p>
  );
};

export default Paragraph;
