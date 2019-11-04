import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';
import Emphasis from './Emphasis';
import Strong from './Strong';

interface SmallProps {
  /**
   * The content to display. Can contain a combination of strings, Strong
   * components, and Emphasis Components.
   */
  children: ReactNode;
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
  fontSize: tokens.size.font[200].value,
  lineHeight: tokens.size.font.base.value,
});

const Small = (props: SmallProps): ReactElement => {
  const { children, className, dataAttributes } = props;
  validateChildrenProp(props, 'Small', [Strong, Emphasis]);

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <small className={className} css={smallStyle} {...parsedDataAttributes}>
      {children}
    </small>
  );
};

export default Small;
