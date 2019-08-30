import '../sideEffects/injectMonoFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React from 'react';

import codeStyle from '../codeStyle';

export interface CodeBlockProps {
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const preStyle = css({
  backgroundColor: tokens.color.opaque.primaryLightest.value.rgb,
  borderRadius: tokens.radii.small.value,
  boxShadow: tokens.shadow.border.value,
  margin: 0,
  marginTop: tokens.size.space[12].value,
  overflow: 'scroll',
  paddingBottom: tokens.size.space[8].value,
  paddingLeft: tokens.size.space[12].value,
  paddingRight: tokens.size.space[12].value,
  paddingTop: tokens.size.space[8].value,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  dataAttributes,
}) => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <pre className={className} css={preStyle} {...parsedDataAttributes}>
      <code css={codeStyle}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
