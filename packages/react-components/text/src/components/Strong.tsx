import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';

interface StrongProps {
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const strongStyle = css(baseStyle, {
  fontWeight: tokens.size.fontWeight.bold.value,
  lineHeight: tokens.size.font.base.value,
});

const Strong: React.FC<StrongProps> = ({
  children,
  className,
  dataAttributes,
}) => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <strong className={className} css={strongStyle} {...parsedDataAttributes}>
      {children}
    </strong>
  );
};

export default Strong;
