import { css } from '@emotion/core';
// import PropTypes from 'prop-types';
import { SFC } from 'react';
import { isNil } from 'lodash';
import tokens from '@datacamp/waffles-core/tokens.json';
import { getColor, getContrastColor } from '@datacamp/waffles-core';

import './injectGlobalLato';

const baseTagStyle = css({
  alignItems: 'center',
  border: `1px solid ${tokens.colors.greyLighter}`,
  display: 'inline-flex',
  fontSize: tokens.fontSize.micro,
  fontWeight: parseInt(tokens.fontWeight.bold),
  fontFamily: tokens.fontFamily.sansSerif,
  letterSpacing: '0.6px', // 1@16px->0.8@14px->0.6@12px
  lineHeight: 1,
  padding: '5px 11px', // +1px border
  position: 'relative',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

export interface TagProps {
  children: string;
  color?: string;
  extraClass?: string;
  rounded?: boolean;
  textColor?: string;
}

const Tag: SFC<TagProps> = ({
  color,
  children,
  extraClass,
  rounded = false,
  textColor,
}) => {
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

export default Tag;
