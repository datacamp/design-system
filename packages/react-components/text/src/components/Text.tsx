import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Small from './Small';
import Strong from './Strong';

export interface TextProps {
  children: string | (string | React.ReactElement)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const textStyle = css(baseStyle, {
  fontSize: tokens.size.font[300].value,
  fontWeight: tokens.size.fontWeight.regular.value,
  lineHeight: tokens.size.font.base.value,
});

const Text: React.FC<TextProps> = (props: TextProps) => {
  validateChildrenProp(props, 'Text', [Small, Strong]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <span className={className} css={textStyle} {...parsedDataAttributes}>
      {children}
    </span>
  );
};

export default Text;
