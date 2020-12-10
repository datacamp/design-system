import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';

import Emphasis from './Emphasis';
import Small from './Small';
import Strong from './Strong';

export interface TextProps {
  /**
   * The content to display. Can contain a combination of strings, Small
   * components, and Strong Components.
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

const textStyle = css(baseStyle, {
  fontSize: tokens.size.font[300].value,
  fontWeight: tokens.fontWeight.regular.value,
});

const Text = ({
  children,
  className,
  dataAttributes,
}: TextProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <span className={className} css={textStyle} {...parsedDataAttributes}>
      {children}
    </span>
  );
};

const validChildType = PropTypes.oneOfType([
  childrenOfType(Small),
  childrenOfType(Emphasis),
  childrenOfType(Strong),
  childrenOfType(PlainString),
  PropTypes.string,
  PropTypes.number,
]);

Text.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};

export default Text;
