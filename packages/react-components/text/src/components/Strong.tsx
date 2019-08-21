import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Emphasis from './Emphasis';
import Text from './Text';

interface StrongProps {
  children: string | React.ReactNode | (string | React.ReactNode)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const strongStyle = css(baseStyle, {
  fontWeight: tokens.fontWeight.bold.value,
  lineHeight: tokens.size.font.base.value,
});

const Strong: React.FC<StrongProps> = props => {
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
