// eslint-disable-next-line filenames/match-exported
import { DownloadIcon } from '@datacamp/waffles-icons';
import {
  border,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
} from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { A11Y_COLOR } from './constants';

const buttonStyle = css`
  display: inline-flex;
  padding: 0 18px 0 16px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 0;
  color: ${colors.white};
  background-color: ${colors.navy};
  font-family: ${fontFamily.sansSerif};
  border-radius: ${border.radius};
  font-size: ${fontSize.h6};
  font-weight: ${fontWeight.bold};
  text-decoration: none;
  cursor: pointer;
  margin-top: 8px;
  outline: 0;

  &:hover {
    background-color: ${colors.navyLight};
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
  download: string;
  href: string;
};

function DownloadButton({
  children,
  download,
  href,
}: DownloadButtonProps): JSX.Element {
  return (
    <a css={buttonStyle} download={download} href={href}>
      <DownloadIcon />
      <span css={labelStyle}>{children}</span>
    </a>
  );
}

export default DownloadButton;
