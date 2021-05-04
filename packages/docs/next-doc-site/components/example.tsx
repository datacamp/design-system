import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import CodePreview from './code-preview';
import ExampleCodeButton from './example-code-button';
import Markdown from './markdown-elements';

const sectionStyle = css`
  margin-top: 16px;
`;

const componentWrapperStyle = css`
  padding: 16px;
  background-color: ${colors.grey200};
  border-radius: ${border.radius};
  margin-top: 8px;
  position: relative;
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
      <div css={componentWrapperStyle}>
        {children}
        <ExampleCodeButton
          disabled={!code}
          onClick={toggleCodePreviewVisibility}
        >
          {isCodePreviewVisible ? 'Hide' : 'Show'} Code
        </ExampleCodeButton>
      </div>
      {code && isCodePreviewVisible && <CodePreview>{code}</CodePreview>}
    </section>
  );
}

export default Example;
