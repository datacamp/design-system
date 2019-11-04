import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';
import Text from './Text';

interface EmphasisProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, and Strong Components.
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

const emphasisStyle = css(baseStyle, {
  fontStyle: 'italic',
  fontWeight: tokens.fontWeight.regular.value,
  lineHeight: tokens.size.font[300].value,
});

const Emphasis = (props: EmphasisProps): ReactElement => {
  validateChildrenProp(props, 'Emphasis', [Text, Strong, PlainString]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <em className={className} css={emphasisStyle} {...parsedDataAttributes}>
      {children}
    </em>
  );
};

export default Emphasis;
