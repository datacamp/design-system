// eslint-disable-next-line filenames/match-exported
import { border, colors, fontFamily, fontSize } from '@datacamp/waffles-tokens';
import { css, Interpolation } from '@emotion/react';

import { A11Y_COLOR } from './constants';

const buttonStyle = css`
  border: 0;
  margin: 0;
  outline: 0;
  background-color: ${colors.navy};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px 6px 8px;
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.h6};
  border-radius: ${border.radius};
  cursor: pointer;

  &:focus-visible {
    background-color: ${A11Y_COLOR};
  }
`;

const wrapperStyle = css`
  display: block;
  padding-left: 8px;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type CodePreviewButtonProps = {
  css?: Interpolation<ButtonProps>;
  icon: JSX.Element;
} & ButtonProps;

function CodePreviewButton({
  children,
  icon,
  ...restProps
}: CodePreviewButtonProps): JSX.Element {
  return (
    <button css={buttonStyle} {...restProps}>
      {icon}
      <span css={wrapperStyle}>{children}</span>
    </button>
  );
}

export default CodePreviewButton;
