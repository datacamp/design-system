// eslint-disable-next-line filenames/match-exported
import { CodeIcon } from '@datacamp/waffles-icons';
import { border, colors, fontFamily, fontSize } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import React from 'react';

import { A11Y_COLOR } from './constants';

const buttonStyle = css`
  border: 0;
  outline: 0;
  background-color: ${colors.navy};
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.h6};
  border-top-left-radius: ${border.radius};
  border-bottom-right-radius: ${border.radius};
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  &:focus-visible {
    background-color: ${A11Y_COLOR};
  }
`;

const labelStyle = css`
  padding-left: 8px;
  width: 96px;
  text-align: right;
`;

type ExampleCodeButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

function ExampleCodeButton({
  children,
  disabled = false,
  onClick,
}: ExampleCodeButtonProps): JSX.Element {
  return (
    <button css={buttonStyle} disabled={disabled} onClick={onClick}>
      <CodeIcon color={colors.white} />
      <span css={labelStyle}>{children}</span>
    </button>
  );
}

export default ExampleCodeButton;
