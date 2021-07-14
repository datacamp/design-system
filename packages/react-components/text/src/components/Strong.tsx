/* eslint-disable global-require */
import tokens from '@datacamp/waffles-tokens';
import { childrenOfType, computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import baseStyle from '../baseStyle';

interface StrongProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, and Emphasis Components.
   */
  children: React.ReactNode;
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
  fontWeight: tokens.fontWeights.bold,
  lineHeight: tokens.lineHeights.medium,
});

const Strong = ({
  children,
  className,
  dataAttributes,
}: StrongProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <strong className={className} css={strongStyle} {...parsedDataAttributes}>
      {children}
    </strong>
  );
};

export default Strong;

const validChildType = PropTypes.oneOfType([
  childrenOfType(require('./Text')),
  childrenOfType(require('./Emphasis')),
  childrenOfType(require('../alternateComponents/PlainString')),

  PropTypes.string,
  PropTypes.number,
]);

Strong.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};
