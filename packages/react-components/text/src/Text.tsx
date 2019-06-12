import './sideEffects/injectRegularFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import { mapKeys } from 'lodash';
import React from 'react';

interface TextProps {
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const baseTextStyle = css({
  color: tokens.color.opaque.grey.value.rgb,
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  fontSize: tokens.size.font.base.value,
  fontStyle: 'normal',
  fontWeight: tokens.size.fontWeight.regular.value,
  lineHeight: tokens.size.font.base.value,
});

export const Text: React.FC<TextProps> = ({
  children,
  className,
  dataAttributes,
}: TextProps) => {
  const parsedDataAttributes = mapKeys(
    dataAttributes,
    (_, key) => `data-${key}`
  );

  return (
    <span css={baseTextStyle} className={className} {...parsedDataAttributes}>
      {children}
    </span>
  );
};

export default Text;
