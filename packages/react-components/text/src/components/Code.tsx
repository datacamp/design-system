import '../sideEffects/injectMonoFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React from 'react';

import codeStyle from '../codeStyle';

export interface CodeProps {
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const style = css(codeStyle, {
  backgroundColor: tokens.color.opaque.primaryLightest.value.rgb,
  boxShadow: tokens.shadow.border.value,
  marginLeft: tokens.size.space[2].value,
  marginRight: tokens.size.space[4].value,
  paddingBottom: 0,
  paddingLeft: tokens.size.space[2].value,
  paddingRight: tokens.size.space[2].value,
  paddingTop: 0,
});

const Code: React.FC<CodeProps> = props => {
  const { children, className, dataAttributes } = props;

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <code className={className} css={style} {...parsedDataAttributes}>
      {children}
    </code>
  );
};

export default Code;
