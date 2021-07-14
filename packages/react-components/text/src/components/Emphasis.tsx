/* eslint-disable global-require */
import tokens from '@datacamp/waffles-tokens';
import { childrenOfType, computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import baseStyle from '../baseStyle';

interface EmphasisProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, and Strong Components.
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

const emphasisStyle = css(baseStyle, {
  fontStyle: 'italic',
  fontWeight: tokens.fontWeights.regular,
  lineHeight: tokens.fontSizes.medium,
});

const Emphasis = ({
  children,
  className,
  dataAttributes,
}: EmphasisProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <em className={className} css={emphasisStyle} {...parsedDataAttributes}>
      {children}
    </em>
  );
};

export default Emphasis;

const validChildType = PropTypes.oneOfType([
  childrenOfType(require('./Text')),
  childrenOfType(require('./Strong')),
  childrenOfType(require('../alternateComponents/PlainString')),
  PropTypes.string,
  PropTypes.number,
]);

Emphasis.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};
