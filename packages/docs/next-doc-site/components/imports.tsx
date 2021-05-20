import { css } from '@emotion/react';
import { Fragment } from 'react';

import defaultExportNameFromPath from '../helpers/default-export-name-from-path';
import formattedModuleExports from '../helpers/formatted-module-exports';
import { Module } from '../types';

import CodePreview from './code-preview';
import basicTheme from './code-preview-theme';
import Highlight from './highlight';
import Markdown from './markdown-elements';

const previewStyle = css`
  overflow-x: scroll;
  margin-top: 8px;
`;

type ImportsProps = {
  module: Module;
  path: string;
};

function Imports({ module, path }: ImportsProps): JSX.Element {
  const defaultExportName = defaultExportNameFromPath(path);

  return (
    <Fragment>
      <Markdown.p>
        You can import following components or utilities from this module:
      </Markdown.p>
      <CodePreview css={previewStyle}>
        <Highlight theme={basicTheme}>
          {formattedModuleExports(defaultExportName, module, path)}
        </Highlight>
      </CodePreview>
    </Fragment>
  );
}

export default Imports;
