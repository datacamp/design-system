import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { isNil } from 'lodash';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { getColor, getContrastColor } from '@datacamp/waffles-core';

import './injectGlobalLato';

const baseTagStyle = css({
  alignItems: 'center',
  border: `1px solid ${tokens.color.opaque.greyLighter.value.hex}`,
  display: 'inline-flex',
  fontSize: tokens.size.font.micro.value,
  fontWeight: parseInt(tokens.size.fontWeight.bold.value, 10),
  fontFamily: tokens.asset.font.sansSerif.value,
  letterSpacing: '0.6px', // 1@16px->0.8@14px->0.6@12px
  lineHeight: 1,
  padding: '5px 11px', // +1px border
  position: 'relative',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

interface TagStyleProps {
  rounded?: boolean;
  textColor?: string;
  color?: string;
}

const dynamicTagStyle = ({
  color,
  rounded = false,
  textColor,
}: TagStyleProps): SerializedStyles => {
  const backgroundColor = getColor(color) || getColor('primaryLightest');
  const parsedTextColor =
    (isNil(textColor) && getContrastColor(color)) || getColor(textColor);

  return css({
    backgroundColor,
    color: parsedTextColor,
    borderRadius: rounded ? '4px' : '12px',
  });
};

export interface TagProps extends TagStyleProps {
  children: string;
  extraClass?: string;
}

const StyledTagDiv = styled.div<TagStyleProps>(baseTagStyle, dynamicTagStyle);

const Tag: React.SFC<TagProps> = ({ extraClass, children, ...styleProps }) => (
  <StyledTagDiv className={extraClass} {...styleProps}>
    {children}
  </StyledTagDiv>
);

export default Tag;
