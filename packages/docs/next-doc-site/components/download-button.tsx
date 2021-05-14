// eslint-disable-next-line filenames/match-exported
import { DownloadIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { A11Y_COLOR } from './constants';

const buttonStyle = css`
  display: inline-flex;
  padding: 0 18px 0 16px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 0;
  color: ${tokens.colors.white};
  background-color: ${tokens.colors.navy};
  font-family: ${tokens.fontFamily.sansSerif};
  border-radius: ${tokens.border.radius};
  font-size: ${tokens.fontSize.h6};
  font-weight: ${tokens.fontWeight.bold};
  text-decoration: none;
  cursor: pointer;
  margin-top: 8px;
  outline: 0;

  &:hover {
    background-color: ${tokens.colors.navyLight};
  }

  &:focus-visible {
    background-color: ${A11Y_COLOR};
  }
`;

const labelStyle = css`
  padding-left: 8px;
`;

type DownloadButtonProps = {
  children: React.ReactNode;
  className?: string;
  download: string;
  href: string;
};

function DownloadButton({
  children,
  className,
  download,
  href,
}: DownloadButtonProps): JSX.Element {
  return (
    <a className={className} css={buttonStyle} download={download} href={href}>
      <DownloadIcon />
      <span css={labelStyle}>{children}</span>
    </a>
  );
}

export default DownloadButton;
