import { getColor, getContrastColor } from '@datacamp/waffles-core';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import { isNil } from 'lodash';
import React, { ReactElement } from 'react';

const baseTagStyle = css({
  alignItems: 'center',
  border: `1px solid ${tokens.color.neutral.grey100.value.hex}`,
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
  /**
   * The content to display in the Tag
   */
  children: string;
  /**
   * The background colour of the Tag. This should be one of the token values.
   * @type {[type]}
   */
  color?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * A css class to add to the rendered element.
   */
  extraClass?: string;
  /**
   * Sets the border-radius of the tag to DataCamp's default radius.
   */
  rounded?: boolean;
  /**
   * The color of the text. This will default to a contrasting color to the
   * background if none is provided.
   */
  textColor?: string;
}

const Tag = ({
  children,
  color = 'primaryLightest',
  dataAttributes,
  extraClass,
  rounded = false,
  textColor,
}: TagProps): ReactElement => {
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
