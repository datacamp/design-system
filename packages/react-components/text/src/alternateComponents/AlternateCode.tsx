import React from 'react';

import Code, { CodeProps } from '../components/Code';

export interface AlternateCodeProps {
  value: CodeProps['children'];
}
const AlternateCode: React.FC<AlternateCodeProps> = ({ value }) => (
  <Code>{value}</Code>
);

export default AlternateCode;
