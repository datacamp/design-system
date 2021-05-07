import HighlightBase, { defaultProps } from 'prism-react-renderer';

import basicTheme from './code-preview-theme';

type HighlightProps = {
  children: string;
  theme: typeof basicTheme;
};

function Highlight({ children, theme }: HighlightProps): JSX.Element {
  return (
    <HighlightBase
      {...defaultProps}
      code={children}
      language="tsx"
      theme={theme}
    >
      {({ getLineProps, getTokenProps, style, tokens }) => {
        return (
          <pre style={{ ...style }}>
            {tokens.map((line, index) => {
              return (
                <div key={index} {...getLineProps({ key: index, line })}>
                  {line.map((token, key) => {
                    return (
                      <span key={key} {...getTokenProps({ key, token })} />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        );
      }}
    </HighlightBase>
  );
}

export default Highlight;
