import {
  alternateComponents,
  Emphasis,
  Paragraph,
  Strong,
} from '@datacamp/waffles-text';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  /**
   * Adds a css className to the rendered element.
   */
  className?: string;
  /**
   * The markdown string to render.
   */
  source: string;
}

const {
  AlternateCode,
  AlternateCodeBlock,
  AlternateHeading,
  PlainString,
} = alternateComponents;

const renderers = {
  code: AlternateCodeBlock,
  emphasis: Emphasis,
  heading: AlternateHeading,
  inlineCode: AlternateCode,
  paragraph: Paragraph,
  strong: Strong,
  text: PlainString as any, // eslint-disable-line @typescript-eslint/no-explicit-any
};

const Markdown = (props: MarkdownProps): ReactElement => {
  const { source, className } = props;
  return (
    <ReactMarkdown
      className={className}
      renderers={renderers}
      source={source}
    />
  );
};

export default Markdown;
