import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeNotFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React, { ReactElement } from 'react';

import RadioIcon from './RadioIcon';
import RadioListContext from './RadioListContext';

export interface RadioProps {
  /**
   * The text to display for this item.
   */
  children: string;
  /**
   * Additionaly css className to add to the rendered element
   */
  className?: string;
  /**
   * When true this individual option will be disabled. This is overriden when
   * disabled is set on RadioList itself.
   */
  disabled?: boolean;
  /**
   * Sets the html attribute "required". Has no visual impact. Use the
   * "required" prop to set visuals if required.
   */
  htmlRequired?: boolean;
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
  alignItems: 'center',
  display: 'flex',
  height: '20px',
  marginTop: 0,
  position: 'relative',
  [ssrSafeNotFirstChildSelector]: { marginTop: '10px' },
});

/**
 * Can only be used within `RadioList`
 */
const Radio = ({
  children,
  className,
  disabled = false,
  htmlRequired,
  value,
}: RadioProps): ReactElement => {
  return (
    <RadioListContext.Consumer>
      {(contextValue) => {
        if (contextValue === null) {
          throw new Error('Radio must be used with RadioList');
        }

        const elementDisabled = disabled || contextValue.disabled;
        const handleChange = (): void => contextValue.onChange(value);

        const focusStyle = {
          borderColor: contextValue.hasError
            ? tokens.color.primary.redDark.value.hex
            : tokens.color.primary.blueDark.value.hex,
        };

        return (
          <label className={className} css={divStyle} htmlFor={value}>
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
              required={htmlRequired}
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
                  opacity: 0.3,
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
