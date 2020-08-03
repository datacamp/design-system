import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement } from 'react';

import codeStyle from '../codeStyle';

export interface CodeProps {
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

const style = css(codeStyle, {
  backgroundColor: tokens.color.neutral.beige300.value.rgb,
  marginLeft: tokens.size.space[2].value,
  marginRight: tokens.size.space[4].value,
  paddingBottom: 0,
  paddingLeft: tokens.size.space[2].value,
  paddingRight: tokens.size.space[2].value,
  paddingTop: 0,
});

const Code = ({
  children,
  className,
  dataAttributes,
}: CodeProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <code className={className} css={style} {...parsedDataAttributes}>
      {children}
    </code>
  );
};

export default Code;
