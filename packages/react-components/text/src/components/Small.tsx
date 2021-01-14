import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';

import Emphasis from './Emphasis';
import Strong from './Strong';

interface SmallProps {
  /**
   * The content to display. Can contain a combination of strings, Strong
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

const smallStyle = css(baseStyle, {
  fontSize: tokens.size.font[200].value,
  lineHeight: tokens.size.font.base.value,
});

const Small = ({
  children,
  className,
  dataAttributes,
}: SmallProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <small className={className} css={smallStyle} {...parsedDataAttributes}>
      {children}
    </small>
  );
};

const validChildType = PropTypes.oneOfType([
  childrenOfType(Strong),
  childrenOfType(Emphasis),
  childrenOfType(PlainString),
  PropTypes.string,
  PropTypes.number,
]);

Small.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};

export default Small;
