import tokens from '@datacamp/waffles-tokens';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React from 'react';

import baseStyle from '../baseStyle';

export interface TextProps {
  /**
   * The content to display. Can contain a combination of strings, Small
   * components, and Strong Components.
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

const textStyle = css(baseStyle, {
  fontSize: tokens.fontSizes.medium,
  fontWeight: tokens.fontWeights.regular,
});

const Text = ({
  children,
  className,
  dataAttributes,
}: TextProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <span className={className} css={textStyle} {...parsedDataAttributes}>
      {children}
    </span>
  );
};

export default Text;
