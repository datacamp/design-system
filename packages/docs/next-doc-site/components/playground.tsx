import presetTypescript from '@babel/preset-typescript';
import { border, colors, fontFamily, fontSize } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { Compiler, Editor, Error, useView } from 'react-view';

import { PlaygroundConfig } from '../types';

import theme from './code-preview-theme';

const compilerStyle = css`
  padding: 16px;
  margin-top: 8px;
  background-color: ${colors.grey200};
  border-top-left-radius: ${border.radius};
  border-top-right-radius: ${border.radius};
`;

const editorStyle = css`
  background-color: ${colors.navy};
  border-left: 8px solid ${colors.purple};
  padding: 8px;
`;

const errorStyle = css`
  background-color: ${colors.redDark};
  white-space: pre;
  padding: 16px;
  color: ${colors.grey200};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.small};
  border-bottom-left-radius: ${border.radius};
  border-bottom-right-radius: ${border.radius};
  overflow: hidden;
`;

function Playground({ initialCode, scope }: PlaygroundConfig): JSX.Element {
  const { compilerProps, editorProps, errorProps } = useView({
    initialCode: initialCode.trim(),
    scope,
  });

  const hasError = !!errorProps.msg;

  return (
    <Fragment>
      <Compiler
        {...compilerProps}
        css={compilerStyle}
        presets={[presetTypescript]}
      />
      <Editor
        {...editorProps}
        css={css`
          ${editorStyle}
          border-bottom-left-radius: ${hasError ? 0 : border.radius};
          border-bottom-right-radius: ${hasError ? 0 : border.radius};
        `}
        language="tsx"
        theme={theme}
      />
      <Error {...errorProps} css={errorStyle} />
    </Fragment>
  );
}

export default Playground;
