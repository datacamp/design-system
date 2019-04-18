import { css } from '@emotion/core';
import styled from '@emotion/styled';
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

const dynamicTagStyle = ({
  color,
  rounded = false,
  textColor,
}: TagStyleProps) => {
  const backgroundColor = getColor(color) || getColor('primaryLightest');
  const parsedTextColor =
    (isNil(textColor) && getContrastColor(color)) || getColor(textColor);

  return css({
    backgroundColor,
    color: parsedTextColor,
    borderRadius: rounded ? '4px' : '12px',
  });
};

interface TagStyleProps {
  rounded?: boolean;
  textColor?: string;
  color?: string;
}

export interface TagProps extends TagStyleProps {
  children: string;
  extraClass?: string;
}

const StyledTagDiv = styled.div<TagStyleProps>(baseTagStyle, dynamicTagStyle);

const Tag: SFC<TagProps> = ({ extraClass, children, ...styleProps }) => (
  <StyledTagDiv className={extraClass} {...styleProps}>
    {children}
  </StyledTagDiv>
);

export default Tag;
