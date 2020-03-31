import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';

import Emphasis from './Emphasis';
import Text from './Text';

interface StrongProps {
  /**
   * The content to display. Can contain a combination of strings, Text
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

const strongStyle = css(baseStyle, {
  fontWeight: tokens.fontWeight.bold.value,
  lineHeight: tokens.size.font.base.value,
});

const Strong = (props: StrongProps): ReactElement => {
  validateChildrenProp(props, 'Strong', [Text, Emphasis, PlainString]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <strong className={className} css={strongStyle} {...parsedDataAttributes}>
      {children}
    </strong>
  );
};

export default Strong;
