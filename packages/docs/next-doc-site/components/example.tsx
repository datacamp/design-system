import { CodeIcon } from '@datacamp/waffles-icons';
import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import CodePreview from './code-preview';
import Button from './code-preview-button';
import basicTheme from './code-preview-theme';
import Highlight from './highlight';
import Markdown from './markdown-elements';

const sectionStyle = css`
  margin-top: 16px;
`;

const wrapperStyle = css`
  padding: 16px;
  background-color: ${colors.grey200};
  border-radius: ${border.radius};
  margin-top: 8px;
  position: relative;
`;

const buttonStyle = css`
  width: 134px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const previewStyle = css`
  overflow-x: scroll;
`;

type ExampleProps = {
  children: React.ReactNode;
  path: string;
  title: string;
};

function Example({ children, path, title }: ExampleProps): JSX.Element {
  const [code, setCode] = useState('');
  const [isCodePreviewVisible, setCodePreviewVisibility] = useState(false);

  function toggleCodePreviewVisibility(): void {
    setCodePreviewVisibility(!isCodePreviewVisible);
  }

  useEffect(() => {
    // Load raw content of code example
    async function importExampleCode(): Promise<void> {
      const rawCode = await import(`!!raw-loader!../examples/${path}.tsx`);
      setCode(rawCode.default);
    }
    importExampleCode();
  }, [path]);

  return (
    <section css={sectionStyle}>
      <Markdown.h3>{title}</Markdown.h3>
      <div
        css={css`
          ${wrapperStyle};
          ${isCodePreviewVisible &&
          css`
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          `}
        `}
      >
        {children}
        <Button
          css={css`
            ${buttonStyle};
            border-bottom-right-radius: ${isCodePreviewVisible
              ? 0
              : border.radius};
          `}
          disabled={!code}
          icon={<CodeIcon color={colors.white} />}
          onClick={toggleCodePreviewVisibility}
        >
          {isCodePreviewVisible ? 'Hide' : 'Show'} Code
        </Button>
      </div>
      {code && isCodePreviewVisible && (
        <CodePreview css={previewStyle}>
          <Highlight theme={basicTheme}>{code.trim()}</Highlight>
        </CodePreview>
      )}
    </section>
  );
}

export default Example;
