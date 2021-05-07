/* eslint-disable no-shadow */
import { Fragment } from 'react';
import SimpleEditor from 'react-simple-code-editor';
import { TEditorProps, useValueDebounce } from 'react-view';

import basicTheme from './code-preview-theme';
import Highlight from './highlight';

const editorTheme = {
  ...basicTheme,
  plain: {
    whiteSpace: 'break-spaces',
    ...basicTheme.plain,
  },
};

function Editor({
  code: globalCode = '',
  onChange,
  placeholder,
}: TEditorProps): JSX.Element {
  // const [focused, setFocused] = React.useState(false);
  const [code, setCode] = useValueDebounce<string>(globalCode, onChange);

  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `.npm__react-simple-code-editor__textarea { outline: none !important }`,
        }}
      />
      <SimpleEditor
        highlight={(code) => <Highlight theme={editorTheme}>{code}</Highlight>}
        ignoreTabKey={true}
        onValueChange={(code) => setCode(code)}
        placeholder={placeholder}
        style={editorTheme.plain as React.CSSProperties}
        value={code}
      />
    </Fragment>
  );
}

export default Editor;
