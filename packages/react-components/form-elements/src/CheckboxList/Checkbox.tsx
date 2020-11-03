import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeNotFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import _ from 'lodash';
import React, { ReactElement } from 'react';

import CheckboxIcon from './CheckboxIcon';
import CheckboxListContext from './CheckboxListContext';

export interface CheckboxProps {
  /**
   * The text to display for this item.
   */
  children: string;
  /**
   * When true this individual option will be disabled. This is overriden when
   * disabled is set on CheckboxList itself.
   */
  disabled?: boolean;
  /**
   * The value of this option. If this matches the value provided to the parent
   * `CheckboxList`, this option will be selected.
   */
  value: string;
}

const textStyle = css({
  marginLeft: tokens.size.space[24].value,
});

const divStyle = css({
  alignItems: 'center',
  display: 'flex',
  height: '20px',
  marginTop: 0,
  position: 'relative',
  [ssrSafeNotFirstChildSelector]: { marginTop: '10px' },
});

/**
 * Can only be used within `CheckboxList`
 */
const Checkbox = ({
  children,
  disabled = false,
  value,
}: CheckboxProps): ReactElement => {
  const contextValue = React.useContext(CheckboxListContext);
  if (contextValue === null) {
    throw new Error('Checkbox must be used with CheckboxList');
  }

  const elementDisabled = disabled || contextValue.disabled;
  const handleChange = (): void => contextValue.onChange(value);
  const isChecked = _.includes(contextValue.value, value);

  const focusColor = contextValue.hasError
    ? tokens.color.primary.redDark.value.hex
    : tokens.color.primary.blueDark.value.hex;

  const focusStyle = {
    borderColor: focusColor,
    color: focusColor,
  };

  return (
    <label css={divStyle} htmlFor={value}>
      <input
        checked={isChecked}
        css={css(
          {
            opacity: 0,
            position: 'absolute',
            width: 0,
          },
          !disabled && {
            // affects the style of the CheckboxIcon
            ':active + span': focusStyle,
            ':focus + span': focusStyle,
          },
        )}
        disabled={elementDisabled}
        id={value}
        name={contextValue.name}
        onChange={handleChange}
        type="checkbox"
      />
      <CheckboxIcon
        checked={isChecked}
        disabled={disabled || contextValue.disabled}
        error={contextValue.hasError}
      />
      <Text
        css={css(
          textStyle,
          elementDisabled && {
            opacity: 0.3,
          },
        )}
      >
        {children}
      </Text>
    </label>
  );
};

export default Checkbox;
