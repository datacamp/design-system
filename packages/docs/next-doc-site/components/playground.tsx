import presetTypescript from '@babel/preset-typescript';
import { BackIcon } from '@datacamp/waffles-icons';
import { border, colors, fontFamily, fontSize } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { Compiler, Editor, Error, useView } from 'react-view';

import { PlaygroundConfig } from '../types';

import Button from './code-preview-button';
import theme from './code-preview-theme';

const wrapperStyle = css`
  position: relative;
`;

const compilerStyle = css`
  padding: 16px;
  margin-top: 8px;
  background-color: ${colors.grey200};
  border-top-left-radius: ${border.radius};
  border-top-right-radius: ${border.radius};
`;

const buttonStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0;
  border-top-left-radius: ${border.radius};
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
  const { actions, compilerProps, editorProps, errorProps } = useView({
    initialCode: initialCode.trim(),
    scope,
  });
  const { reset } = actions;

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
          icon={<BackIcon color={colors.white} />}
          onClick={reset}
        >
          Reset
        </Button>
      </div>
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
