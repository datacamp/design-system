import { css } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

// Checkbox is visually hidden but remains accessible to screen readers
const inputStyle = css({
  border: 0,
  height: '100%',
  left: 0,
  margin: 0,
  opacity: 0.001,
  padding: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: -1,
});

function Input(props: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <input css={inputStyle} {...props} />;
}

export default Input;
