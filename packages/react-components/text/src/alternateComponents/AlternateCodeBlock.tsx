import React from 'react';

import CodeBlock, { CodeBlockProps } from '../components/CodeBlock';

export interface AlternateCodeBlockProps {
  value: CodeBlockProps['children'];
}
const AlternateCodeBlock: React.FC<AlternateCodeBlockProps> = ({ value }) => (
  <CodeBlock>{value}</CodeBlock>
);

export default AlternateCodeBlock;
