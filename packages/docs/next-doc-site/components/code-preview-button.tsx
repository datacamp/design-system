import tokens from '@datacamp/waffles-tokens';
import { css, Interpolation } from '@emotion/react';

const buttonStyle = css`
  border: 0;
  margin: 0;
  outline: 0;
  background-color: ${tokens.colors.navy};
  color: ${tokens.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px 6px 8px;
  font-family: ${tokens.fontFamily.sansSerif};
  font-size: ${tokens.fontSize.h6};
  border-radius: ${tokens.border.radius};
  cursor: pointer;
  user-select: none;

  &:focus-visible {
    color: ${tokens.colors.navyText};
    background-color: ${tokens.colors.blue};
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
