import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';
import Text from './Text';

interface EmphasisProps {
  children: string | React.ReactNode | (string | React.ReactNode)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const emphasisStyle = css(baseStyle, {
  fontStyle: 'italic',
  fontWeight: tokens.fontWeight.regular.value,
  lineHeight: tokens.size.font[300].value,
});

const Emphasis: React.FC<EmphasisProps> = props => {
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
