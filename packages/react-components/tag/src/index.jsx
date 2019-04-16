/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import tokens from '@datacamp/waffles-core/tokens.json';
import { getColor, getContrastColor } from '@datacamp/waffles-core';

import './injectGlobalLato';

const baseTagStyle = css`
  align-items: center;
  border: 1px solid ${tokens.colors.greyLighter};
  display: inline-flex;
  font-size: ${tokens.fontSize.micro};
  font-weight: ${tokens.fontWeight.bold};
  font-family: ${tokens.fontFamily.sansSerif};
  letter-spacing: 0.6px; // 1@16px->0.8@14px->0.6@12px
  line-height: 1;
  padding: 5px 11px; // +1px border
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Tag = ({ color, children, extraClass, rounded, textColor }) => {
  const backgroundColor = getColor(color) || getColor('primaryLightest');
  const parsedTextColor =
    (isNil(textColor) && getContrastColor(color)) || getColor(textColor);
  const style = css(baseTagStyle, {
    backgroundColor,
    color: parsedTextColor,
    borderRadius: rounded ? '4px' : '12px',
  });

  return (
    <div css={style} className={extraClass}>
      {children}
    </div>
  );
};

Tag.defaultProps = {
  color: undefined,
  extraClass: undefined,
  rounded: false,
  textColor: undefined,
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(getColor.validColors),
  extraClass: PropTypes.string,
  rounded: PropTypes.bool,
  textColor: PropTypes.string,
};

export default Tag;
