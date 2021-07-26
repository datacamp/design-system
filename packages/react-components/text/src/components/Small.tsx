import tokens from '@datacamp/waffles-tokens';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React from 'react';

import baseStyle from '../baseStyle';

interface SmallProps {
  /**
   * The content to display. Can contain a combination of strings, Strong
   * components, and Emphasis Components.
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

const smallStyle = css(baseStyle, {
  fontSize: tokens.fontSizes.small,
  lineHeight: tokens.lineHeights.relaxed,
});

const Small = ({
  children,
  className,
  dataAttributes,
}: SmallProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <small className={className} css={smallStyle} {...parsedDataAttributes}>
      {children}
    </small>
  );
};

export default Small;
