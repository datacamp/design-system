import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css`
  position: relative;
  padding: 16px;
  background-color: ${tokens.colors.navy};
  border-radius: ${tokens.border.radius};
  border-left: 8px solid ${tokens.colors.purple};
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
