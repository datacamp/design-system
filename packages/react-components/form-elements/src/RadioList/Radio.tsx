import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';
import React from 'react';

import { RadioContextConsumer } from './radioContext';

export interface RadioProps {
  /**
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * The value of the radio list. This should be controlled by listening to onChange.
   */
  value: string;
}

const iconStyle: SerializedStyles = css({
  ':active': { boxShadow: 'inset 0 0 0 2px currentColor' },
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 1px currentColor',
  height: '16px',
  marginTop: '2px',
  position: 'absolute',
  width: '16px',
});

// adds a filled circle inside the radio button if it's checked
const checkedIconStyle = css({
  borderRadius: '50%',
  height: '8px',
  marginLeft: '4px',
  marginTop: '6px',
  position: 'absolute',
  width: '8px',
});

const textStyle = css({
  marginLeft: tokens.size.space[24].value,
});

const divStyle = css({
  ':focus, :active': {
    color: tokens.color.opaque.primary.value.hex,
  },
  color: tokens.color.opaque.greyLight.value.hex,
  display: 'flex',
  marginTop: '14px',
  position: 'relative',
});

const errorStyle = css({
  ':active span:first-of-type': {
    boxShadox: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
  },
  ':focus-within span:first-of-type': {
    boxShadow: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
  },
  color: tokens.color.opaque.red.value.hex,
});

const Radio = ({ disabled, value }: RadioProps): React.ReactElement => {
  const isDisabled = css({
    boxShadow: disabled
      ? `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.hex}`
      : `inset 0 0 0 2px ${tokens.color.opaque.primary.value.hex}`,
  });
  return (
    <RadioContextConsumer>
      {contextValue =>
        contextValue && (
          <div
            css={css(
              divStyle,
              {
                ':active span:first-of-type': contextValue.errorMessage
                  ? {
                      boxShadow: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
                    }
                  : isDisabled,
                ':focus-within span:first-of-type': contextValue.errorMessage
                  ? {
                      boxShadow: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
                    }
                  : isDisabled,
              },
              contextValue.errorMessage && !disabled && errorStyle
            )}
          >
            <label
              css={{
                'input[type="radio"] ': {
                  opacity: 0,
                  position: 'absolute',
                  width: 0,
                },
              }}
              htmlFor={value}
            >
              <input
                checked={contextValue.value === value}
                disabled={disabled}
                id={value}
                name={contextValue.name}
                onChange={() => {
                  contextValue.onChange(value);
                }}
                type="radio"
                {...contextValue.parsedDataAttributes}
              />
              <span
                css={
                  contextValue.value === value
                    ? css(
                        iconStyle,
                        {
                          boxShadow: disabled
                            ? `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.hex}`
                            : `inset 0 0 0 1px ${tokens.color.opaque.primary.value.hex}`,
                        },
                        contextValue.errorMessage && {
                          ':active': {
                            boxShadow: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
                          },
                          ':focus': {
                            boxShadow: `inset 0 0 0 2px ${tokens.color.opaque.red.value.hex}`,
                          },
                          boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.red.value.hex}`,
                        }
                      )
                    : css(iconStyle)
                }
              />
              {contextValue.value === value && (
                <span
                  css={css(
                    checkedIconStyle,
                    {
                      backgroundColor: disabled
                        ? tokens.color.opaque.greyLight.value.hex
                        : tokens.color.opaque.primary.value.hex,
                    },
                    contextValue.errorMessage && {
                      backgroundColor: tokens.color.opaque.red.value.hex,
                    }
                  )}
                />
              )}

              <Text
                css={
                  disabled
                    ? css(textStyle, {
                        color: tokens.color.opaque.greyLight.value.hex,
                      })
                    : textStyle
                }
              >
                {value}
              </Text>
            </label>
          </div>
        )
      }
    </RadioContextConsumer>
  );
};

export default Radio;
