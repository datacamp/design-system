import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

import AlternateCode from '../alternateComponents/AlternateCode';
import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';
import Code from './Code';
import Emphasis from './Emphasis';
import Link from './Link';
import Small from './Small';
import Strong from './Strong';
import Text from './Text';

interface ParagraphProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, Strong components, Small components, Emphasis components, and
   * Code components.
   */
  children: ReactNode;
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

const paragraphStyle = css(baseStyle, {
  fontSize: tokens.size.font[300].value,
  fontWeight: tokens.fontWeight.regular.value,
  lineHeight: tokens.lineHeight.base.value,
  margin: 0,
  [ssrSafeNotFirstChildSelector]: { marginTop: tokens.size.space[8].value },
});

const Paragraph = (props: ParagraphProps): ReactElement => {
  validateChildrenProp(props, 'Paragraph', [
    Strong,
    Text,
    Small,
    Emphasis,
    Code,
    Link,
    AlternateCode,
    PlainString,
    'br',
    'del',
    'img',
    'a',
  ]);
  const { children, className, dataAttributes } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <p className={className} css={paragraphStyle} {...parsedDataAttributes}>
      {children}
    </p>
  );
};

export default Paragraph;
