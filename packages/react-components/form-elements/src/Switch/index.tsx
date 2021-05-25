import { CheckmarkIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';

const labelStyle = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  color: tokens.colors.navyText,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.fontFamily.sansSerif,
  fontSize: 16,
  fontWeight: parseInt(tokens.fontWeight.regular, 10),
  opacity: 1,
  position: 'relative',
  userSelect: 'none',
});

// Checkbox is visually hidden but remains accessible to screen readers
const inputStyle = css({
  border: 0,
  height: '100%',
  left: 0,
  margin: 0,
  opacity: 0.001,
  padding: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: -1,
});

const toggleWrapperStyle = css({
  backgroundClip: 'content-box',
  backgroundColor: tokens.colors.blue,
  borderRadius: 12,
  boxSizing: 'border-box',
  height: 24,
  marginRight: 8,
  padding: 3,
  position: 'relative',
  width: 34,
});

const toggleButtonleStyle = css({
  alignItems: 'center',
  backgroundColor: tokens.colors.white,
  borderRadius: 6,
  boxSizing: 'border-box',
  display: 'flex',
  height: 12,
  justifyContent: 'center',
  left: 6,
  position: 'absolute',
  top: 6,
  transition: 'all 75ms linear',
  width: 12,
  zIndex: 1,
});

export type SwitchProps = {
  /**
   * When the appearance is "inverted", the text color and toggle background color will be white for use on dark backgrounds.
   */
  appearance?: 'default' | 'inverted';
} & (
  | { 'aria-label'?: undefined; children: React.ReactNode }
  | { 'aria-label': string; children?: undefined }
) &
  React.InputHTMLAttributes<HTMLInputElement>;

function Switch({
  appearance = 'default',
  checked,
  children,
  className,
  disabled,
  ...restProps
}: SwitchProps): JSX.Element {
  const { focusProps, isFocusVisible } = useFocusRing();

  function toggleBackgroundColor(): string {
    if (!checked) {
      if (appearance === 'inverted') {
        return tokens.colors.white;
      }
      return tokens.colors.grey400;
    }
    return tokens.colors.blue;
  }

  return (
    <label
      className={className}
      css={css(
        labelStyle,
        {
          color:
            appearance === 'inverted'
              ? tokens.colors.white
              : tokens.colors.navyText,
        },
        disabled && {
          cursor: 'default',
          opacity: 0.5,
        },
      )}
    >
      <input
        aria-checked={checked}
        css={inputStyle}
        disabled={disabled}
        role="switch"
        type="checkbox"
        {...restProps}
        {...focusProps}
      />
      <div
        css={css(
          toggleWrapperStyle,
          {
            backgroundColor: toggleBackgroundColor(),
          },
          isFocusVisible && {
            boxShadow: `0 0 0 2px ${tokens.colors.blueDark}`,
          },
        )}
      >
        <div
          css={css(toggleButtonleStyle, {
            backgroundColor:
              !checked && appearance === 'inverted'
                ? tokens.colors.grey400
                : tokens.colors.white,
            left: checked ? 16 : 6,
          })}
        >
          {checked && (
            <CheckmarkIcon
              aria-hidden={true}
              color={tokens.colors.blue}
              size={12}
            />
          )}
        </div>
      </div>
      {children}
    </label>
  );
}

export default Switch;
