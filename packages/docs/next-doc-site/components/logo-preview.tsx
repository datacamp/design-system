import { css } from '@emotion/react';

import DownloadButton from './download-button';
import Markdown from './markdown-elements';
import Preview from './preview';

const wrapperStyle = css`
  margin-top: 16px;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

const prevewStyle = css`
  padding: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;

const buttonStyle = css`
  margin-top: 16px;
`;

type LogoPreviewProps = {
  children: React.ReactNode;
  fileName: string;
  isInverted?: boolean;
  title?: string;
};

function LogoPreview({
  children,
  fileName,
  isInverted = false,
  title,
}: LogoPreviewProps): JSX.Element {
  return (
    <section css={wrapperStyle}>
      {title && <Markdown.h3>{title}</Markdown.h3>}
      <Preview css={prevewStyle} isInverted={isInverted}>
        <img alt={`DataCamp Logo - ${title}`} src={`/logo/${fileName}.svg`} />
      </Preview>
      {children}
      <DownloadButton
        css={buttonStyle}
        download={fileName}
        href={`/downloads/${fileName}.zip`}
      >
        Download for Print and Web
      </DownloadButton>
    </section>
  );
}

export default LogoPreview;
