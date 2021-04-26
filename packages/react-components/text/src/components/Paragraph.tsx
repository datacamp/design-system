/* eslint-disable global-require */
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  childrenOfType,
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import baseStyle from '../baseStyle';

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

const Paragraph = ({
  children,
  className,
  dataAttributes,
}: ParagraphProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <p className={className} css={paragraphStyle} {...parsedDataAttributes}>
      {children}
    </p>
  );
};

const validChildType = PropTypes.oneOfType([
  childrenOfType(require('./Strong')),
  childrenOfType(require('./Text')),
  childrenOfType(require('./Small')),
  childrenOfType(require('./Emphasis')),
  childrenOfType(require('./Code')),
  childrenOfType(require('./Link')),
  childrenOfType(require('../alternateComponents/AlternateCode')),
  childrenOfType(require('../alternateComponents/PlainString')),
  childrenOfType('br'),
  childrenOfType('del'),
  childrenOfType('img'),
  childrenOfType('a'),
  PropTypes.string,
  PropTypes.number,
]);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};

export default Paragraph;
