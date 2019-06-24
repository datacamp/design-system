import '../sideEffects/injectBoldFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';

interface SmallProps {
  children: string | (string | React.ReactElement)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const smallStyle = css(baseStyle, {
  fontSize: tokens.size.font.small.value,
  lineHeight: tokens.size.font.base.value,
});

const Small: React.FC<SmallProps> = props => {
  const { children, className, dataAttributes } = props;
  validateChildrenProp(props, 'Small', [Strong]);

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <small css={smallStyle} className={className} {...parsedDataAttributes}>
      {children}
    </small>
  );
};

export default Small;
