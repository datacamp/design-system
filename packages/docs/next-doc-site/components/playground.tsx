import presetTypescript from '@babel/preset-typescript';
import { BackIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import { Compiler, Error, useView } from 'react-view';

import { PlaygroundConfig } from '../types';

import CodePreview from './code-preview';
import Button from './code-preview-button';
import Editor from './editor';

const wrapperStyle = css`
  position: relative;
`;

const compilerStyle = css`
  padding: 16px;
  margin-top: 8px;
  background-color: ${tokens.colors.grey200};
  border-top-left-radius: ${tokens.border.radius};
  border-top-right-radius: ${tokens.border.radius};
`;

const buttonStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0;
  border-top-left-radius: ${tokens.border.radius};
`;

const errorStyle = css`
  background-color: ${tokens.colors.redDark};
  white-space: pre;
  padding: 16px;
  color: ${tokens.colors.grey200};
  font-family: ${tokens.fontFamily.mono};
  font-size: ${tokens.fontSize.small};
  border-bottom-left-radius: ${tokens.border.radius};
  border-bottom-right-radius: ${tokens.border.radius};
  overflow: hidden;
`;

const liveLabelStyle = css`
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${tokens.colors.grey200};
  font-family: ${tokens.fontFamily.sansSerif};
  font-size: ${tokens.fontSize.small};
  text-transform: uppercase;
  user-select: none;
  padding: 8px 12px;
`;

function Playground({ initialCode, scope }: PlaygroundConfig): JSX.Element {
  const { actions, compilerProps, editorProps, errorProps } = useView({
    initialCode: initialCode.trim(),
    scope,
  });
  const { reset } = actions;

  const [isEditorFocused, setIsEditorFocused] = useState(false);

  const hasError = !!errorProps.msg;

  return (
    <Fragment>
      <div css={wrapperStyle}>
        <Compiler
          {...compilerProps}
          css={compilerStyle}
          presets={[presetTypescript]}
        />
        <Button
          css={buttonStyle}
          icon={<BackIcon color={tokens.colors.white} />}
          onClick={reset}
        >
          Reset
        </Button>
      </div>
      <CodePreview
        css={css`
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: ${hasError ? 0 : tokens.border.radius};
          border-bottom-right-radius: ${hasError ? 0 : tokens.border.radius};
          border-left-color: ${isEditorFocused
            ? tokens.colors.green
            : tokens.colors.purple};
        `}
      >
        <Editor {...editorProps} setIsFocused={setIsEditorFocused} />
        <span
          css={css`
            ${liveLabelStyle}
            opacity: ${isEditorFocused ? 1 : 0.5};
          `}
        >
          Live
        </span>
      </CodePreview>

      <Error {...errorProps} css={errorStyle} />
    </Fragment>
  );
}

export default Playground;
