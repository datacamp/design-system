import '../sideEffects/injectMonoFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import computeDataAttributes from '../computeDataAttributes';
import ssrSafeFirstChildSelector from '../ssrSafeFirstChildSelector';

interface CodeBlockProps {
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

const codeStyle = css({
  color: tokens.color.opaque.greyDark.value.rgb,
  fontFamily: [
    tokens.asset.font.mono.attributes.fallback,
    tokens.asset.font.mono.value,
  ],
  fontSize: tokens.size.font[200].value,
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: tokens.lineHeight.base.value,
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
