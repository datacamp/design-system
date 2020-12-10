import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';

import Emphasis from './Emphasis';
import Text from './Text';

interface StrongProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, and Emphasis Components.
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

const strongStyle = css(baseStyle, {
  fontWeight: tokens.fontWeight.bold.value,
  lineHeight: tokens.size.font.base.value,
});

const Strong = ({
  children,
  className,
  dataAttributes,
}: StrongProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <strong className={className} css={strongStyle} {...parsedDataAttributes}>
      {children}
    </strong>
  );
};

const validChildType = PropTypes.oneOfType([
  childrenOfType(Text),
  childrenOfType(Emphasis),
  childrenOfType(PlainString),

  PropTypes.string,
  PropTypes.number,
]);

Strong.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};

export default Strong;
