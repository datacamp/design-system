// eslint-disable-next-line filenames/match-exported
import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Highlight, { defaultProps } from 'prism-react-renderer';

import theme from './code-preview-theme';

const wrapperStyle = css`
  padding: 16px;
  background-color: ${colors.navy};
  border-radius: ${border.radius};
  border-left: 8px solid ${colors.purple};
  margin-top: -6px;
`;

type CodePreviewProps = {
  children: string;
};

function CodePreview({ children }: CodePreviewProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <Highlight
        {...defaultProps}
        code={children.replace(/[\r\n]+$/, '')}
        language="tsx"
        theme={theme}
      >
        {({ getLineProps, getTokenProps, style, tokens }) => (
          <pre style={{ ...style }}>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ key: index, line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ key, token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default CodePreview;
