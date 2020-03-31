import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeNotFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement } from 'react';

import RadioIcon from './RadioIcon';
import RadioListContext from './RadioListContext';

export interface RadioProps {
  /**
   * The text to display for this item.
   */
  children: string;
  /**
   * When true this individual option will be disabled. This is overriden when
   * disabled is set on RadioList itself.
   */
  disabled?: boolean;
  /**
   * The value of this option. If this matches the value provided to the parent
   * `RadioList`, this option will be selected.
   */
  value: string;
}

const textStyle = css({
  marginLeft: tokens.size.space[24].value,
});

const divStyle = css({
  color: tokens.color.opaque.greyLight.value.hex,
  display: 'flex',
  marginTop: 0,
  position: 'relative',
  [ssrSafeNotFirstChildSelector]: { marginTop: '14px' },
});

const focusStyle = {
  borderWidth: 2,
  height: 18,
  left: 0,
  top: 0,
  width: 18,
};

/**
 * Can only be used within `RadioList`
 */
const Radio = ({
  disabled = false,
  value,
  children,
}: RadioProps): ReactElement => {
  return (
    <RadioListContext.Consumer>
      {contextValue => {
        if (contextValue === null) {
          throw new Error('Radio must be used with RadioList');
        }

        const elementDisabled = disabled || contextValue.disabled;
        const handleChange = (): void => contextValue.onChange(value);
        return (
          <label css={divStyle} htmlFor={value}>
            <input
              checked={contextValue.value === value}
              css={css(
                {
                  opacity: 0,
                  position: 'absolute',
                  width: 0,
                },
                !disabled && {
                  // affects the style of the RadioIcon
                  ':active + span': focusStyle,
                  ':focus + span': focusStyle,
                },
              )}
              disabled={elementDisabled}
              id={value}
              name={contextValue.name}
              onChange={handleChange}
              type="radio"
            />
            <RadioIcon
              checked={contextValue.value === value}
              disabled={disabled || contextValue.disabled}
              error={contextValue.hasError}
            />
            <Text
              css={css(
                textStyle,
                elementDisabled && {
                  color: tokens.color.opaque.greyLight.value.hex,
                },
              )}
            >
              {children}
            </Text>
          </label>
        );
      }}
    </RadioListContext.Consumer>
  );
};

export default Radio;
