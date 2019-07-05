import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';

interface EmphasisProps {
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const emphasisStyle = css(baseStyle, {
  fontStyle: 'italic',
  fontWeight: tokens.size.fontWeight.regular.value,
  lineHeight: tokens.size.font.base.value,
});

const Emphasis: React.FC<EmphasisProps> = ({
  children,
  className,
  dataAttributes,
}) => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <em className={className} css={emphasisStyle} {...parsedDataAttributes}>
      {children}
    </em>
  );
};

export default Emphasis;
