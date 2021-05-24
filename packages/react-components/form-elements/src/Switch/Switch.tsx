import { CheckmarkIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';
import { InputHTMLAttributes } from 'react';

const labelStyle = css({
  alignItems: 'center',
  color: tokens.colors.navyText,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.fontFamily.sansSerif,
  fontSize: 14,
  fontWeight: parseInt(tokens.fontWeight.regular, 10),
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
  height: 22,
  marginRight: 8,
  padding: 2,
  position: 'relative',
  width: 32,
});

const toggleButtonleStyle = css({
  alignItems: 'center',
  backgroundColor: tokens.colors.white,
  borderRadius: 6,
  display: 'flex',
  height: 12,
  justifyContent: 'center',
  left: 5,
  position: 'absolute',
  top: 5,
  transition: 'all 75ms linear',
  width: 12,
  zIndex: 1,
});

type SwitchProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

function Switch(props: SwitchProps): JSX.Element {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <label css={labelStyle}>
      <input
        aria-checked={props.checked}
        css={inputStyle}
        role="switch"
        type="checkbox"
        {...props}
        {...focusProps}
      />
      <div
        css={css(
          toggleWrapperStyle,
          {
            backgroundColor: props.checked
              ? tokens.colors.blue
              : tokens.colors.grey400,
          },
          isFocusVisible && {
            boxShadow: `0 0 0 2px ${tokens.colors.blueDark}`,
          },
        )}
      >
        <div
          css={css(toggleButtonleStyle, {
            left: props.checked ? 15 : 5,
          })}
        >
          {props.checked && (
            <CheckmarkIcon
              aria-hidden={true}
              color={tokens.colors.blue}
              size={12}
            />
          )}
        </div>
      </div>
      {props.label}
    </label>
  );
}

export default Switch;
