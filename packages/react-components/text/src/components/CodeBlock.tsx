import '../sideEffects/injectMonoFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement } from 'react';

import codeStyle from '../codeStyle';

export interface CodeBlockProps {
  /**
   * The code to display.
   */
  children: string;
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
}

const preStyle = css({
  backgroundColor: tokens.color.opaque.primaryLightest.value.rgb,
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: tokens.shadow.border.value,
  lineHeight: tokens.lineHeight.base.value,
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

const CodeBlock = ({
  children,
  className,
  dataAttributes,
}: CodeBlockProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <pre className={className} css={preStyle} {...parsedDataAttributes}>
      <code css={codeStyle}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
