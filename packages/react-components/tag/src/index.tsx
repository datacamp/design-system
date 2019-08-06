import { getColor, getContrastColor } from '@datacamp/waffles-core';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import { isNil } from 'lodash';
import React from 'react';

const baseTagStyle = css({
  alignItems: 'center',
  border: `1px solid ${tokens.color.opaque.greyLighter.value.hex}`,
  display: 'inline-flex',
  fontSize: tokens.size.font[100].value,
  fontWeight: tokens.fontWeight.bold.value,
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
  dataAttributes?: { [key: string]: string };
  extraClass?: string;
  rounded?: boolean;
  textColor?: string;
}

const Tag: React.SFC<TagProps> = ({
  children,
  color = 'primaryLightest',
  dataAttributes = {},
  extraClass,
  rounded = false,
  textColor,
}) => {
  const backgroundColor = getColor(color);
  const parsedTextColor =
    (isNil(textColor) && getContrastColor(color)) || getColor(textColor);

  return (
    <Text
      className={extraClass}
      css={css(baseTagStyle, {
        backgroundColor,
        borderRadius: rounded ? '4px' : '12px',
        color: parsedTextColor,
      })}
      dataAttributes={dataAttributes}
    >
      {children}
    </Text>
  );
};

export default Tag;
