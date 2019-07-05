import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import ssrSafeFirstChildSelector from '../ssrSafeFirstChildSelector';
import validateChildrenProp from '../validateChildrenProp';
import Emphasis from './Emphasis';
import Small from './Small';
import Strong from './Strong';
import Text from './Text';

interface ParagraphProps {
  children: string | (string | React.ReactElement)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const paragraphStyle = css(baseStyle, {
  fontSize: tokens.size.font[300].value,
  fontWeight: tokens.size.fontWeight.regular.value,
  lineHeight: tokens.size.lineHeight.base.value,
  margin: 0,
  marginTop: tokens.size.spatial.size[8].value,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const Paragraph: React.FC<ParagraphProps> = props => {
  validateChildrenProp(props, 'Paragraph', [
    Strong,
    Text,
    Small,
    Emphasis,
    'br',
  ]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <p className={className} css={paragraphStyle} {...parsedDataAttributes}>
      {children}
    </p>
  );
};

export default Paragraph;
