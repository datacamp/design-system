import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import ssrSafeFirstChildSelector from '../ssrSafeFirstChildSelector';

export type Size = 300 | 400 | 500 | 600 | 700 | 800;
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as: HeadingElement;
  children: string;
  className?: string;
  dataAttributes?: { [key: string]: string };
  multiLine?: boolean;
  size: Size;
}

const baseHeaderStyle = css({
  color: tokens.color.opaque.greyDark.value.rgb,
  fontWeight: tokens.size.fontWeight.bold.value,
  lineHeight: tokens.size.lineHeight.heading.value,
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
          ? tokens.size.spatial.size[24].value
          : tokens.size.spatial.size[16].value,
    }
  );
};

const Heading: React.FC<HeadingProps> = ({
  children,
  as: Element,
  className,
  size,
  dataAttributes,
  multiLine = false,
}) => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);
  const style = getStyle(size, multiLine);

  return (
    <Element className={className} css={style} {...parsedDataAttributes}>
      {children}
    </Element>
  );
};

export default Heading;
