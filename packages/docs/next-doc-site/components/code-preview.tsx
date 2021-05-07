// eslint-disable-next-line filenames/match-exported
import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css`
  padding: 16px;
  background-color: ${colors.navy};
  border-bottom-left-radius: ${border.radius};
  border-bottom-right-radius: ${border.radius};
  border-left: 8px solid ${colors.purple};
  overflow: hidden;
`;

type CodePreviewProps = {
  children: React.ReactNode;
  className?: string;
};

function CodePreview({ children, className }: CodePreviewProps): JSX.Element {
  return (
    <div className={className} css={wrapperStyle}>
      {children}
    </div>
  );
}

export default CodePreview;
