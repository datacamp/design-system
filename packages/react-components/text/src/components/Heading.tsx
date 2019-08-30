import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeFirstChildSelector } from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/core';
import React from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';

export type Size = 300 | 400 | 500 | 600 | 700 | 800;
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
  as: HeadingElement;
  children: React.ReactNode;
  className?: string;
  dataAttributes?: { [key: string]: string };
  multiLine?: boolean;
  size: Size;
}

const baseHeaderStyle = css({
  color: tokens.color.opaque.greyDark.value.rgb,
  fontWeight: tokens.fontWeight.bold.value,
  lineHeight: tokens.lineHeight.heading.value,
  margin: 0,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const singleLineStyle = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const multiLineStyle = css({
  overflow: 'auto',
  whiteSpace: 'normal',
});

const getStyle = (size: Size, multiLine: boolean): SerializedStyles => {
  return css(
    baseStyle,
    baseHeaderStyle,
    multiLine ? multiLineStyle : singleLineStyle,
    {
      fontSize: tokens.size.font[size].value,
      marginTop:
        size === 800
          ? tokens.size.space[24].value
          : tokens.size.space[16].value,
    }
  );
};

const Heading: React.FC<HeadingProps> = props => {
  validateChildrenProp(props, 'Heading', [PlainString, Strong]);
  const {
    children,
    as: Element,
    className,
    size,
    dataAttributes,
    multiLine = false,
  } = props;
  const parsedDataAttributes = computeDataAttributes(dataAttributes);
  const style = getStyle(size, multiLine);

  return (
    <Element className={className} css={style} {...parsedDataAttributes}>
      {children}
    </Element>
  );
};

export default Heading;
