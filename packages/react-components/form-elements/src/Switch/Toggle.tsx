import { CheckmarkIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { SwitchProps } from './index';

const toggleWrapperStyle = css({
  backgroundClip: 'content-box',
  backgroundColor: tokens.colors.blue,
  borderRadius: 12,
  boxSizing: 'border-box',
  height: 24,
  marginRight: 8,
  minWidth: 34,
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
  transition: 'transform 75ms linear',
  width: 12,
  zIndex: 1,
});

type ToggleProps = {
  hasLabel: boolean;
  isFocusVisible: boolean;
} & Pick<SwitchProps, 'appearance' | 'checked'>;

function Toggle({
  appearance,
  checked,
  hasLabel,
  isFocusVisible,
}: ToggleProps): JSX.Element {
  function toggleBackgroundColor(): string {
    if (!checked) {
      if (appearance === 'inverted') {
        return tokens.colors.white;
      }
      return tokens.colors.greyMedium;
    }
    return tokens.colors.blue;
  }

  return (
    <div
      css={css(
        toggleWrapperStyle,
        {
          backgroundColor: toggleBackgroundColor(),
          marginRight: hasLabel ? 8 : 0,
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
              ? tokens.colors.greyMedium
              : tokens.colors.white,
          transform: `translateX(${checked ? 10 : 0}px)`,
        })}
      >
        {checked && (
          <CheckmarkIcon
            aria-hidden={true}
            color={tokens.colors.blue}
            size="small"
          />
        )}
      </div>
    </div>
  );
}

export default Toggle;
