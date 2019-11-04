import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';
import validateChildrenProp from '../validateChildrenProp';
import Strong from './Strong';

export type Size = 300 | 400 | 500 | 600 | 700 | 800;
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
  /**
   * The html element to render.
   */
  as: HeadingElement;
  /**
   * The content of the Heading. This should be a string, but it can also
   * contain Strong components.
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
  /**
   * When true, the Heading will wrap text. By default the text will be
   * truncated.
   */
  multiLine?: boolean;
  /**
   * The size of the Heading to render.
   */
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

const Heading = (props: HeadingProps): ReactElement => {
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

Heading.defaultProps = { multiLine: false };

export default Heading;
