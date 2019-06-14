import '../sideEffects/injectBoldFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';
import Text from './Text';

interface ParagraphProps {
  children: string | (string | React.ReactElement)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const paragraphStyle = css(baseStyle, {
  ':last-child': {
    marginBottom: 0,
  },
  fontWeight: tokens.size.fontWeight.regular.value,
  lineHeight: tokens.size.lineHeight.base.value,
  margin: 0,
  marginBottom: tokens.size.spatial.size[16].value,
});

const Paragraph: React.FC<ParagraphProps> = props => {
  validateChildrenProp(props, 'Paragraph', [Strong, Text]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <p css={paragraphStyle} className={className} {...parsedDataAttributes}>
      {children}
    </p>
  );
};

export default Paragraph;
