import {
  Code,
  CodeBlock,
  Emphasis,
  Heading,
  Paragraph,
  Strong,
  Text,
} from '@datacamp/waffles-text';
import {
  HeadingElement,
  Size,
} from '@datacamp/waffles-text/types/components/Heading';
import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ReactMarkdown } from 'react-markdown';

interface ChildrenRendererProps {
  children: ReactElement[];
}
interface CodeRendererProps {
  value: string;
}
interface HeadingRendererProps extends ChildrenRendererProps {
  level: number;
}
interface MarkdownProps {
  source: string;
}

const headingSizes: { [key: number]: number } = {
  1: 800,
  2: 700,
  3: 600,
  4: 500,
  5: 400,
  6: 300,
};

const renderers = {
  code: (props: CodeRendererProps) => {
    const { value } = props;
    return <CodeBlock>{value}</CodeBlock>;
  },
  emphasis: (props: ChildrenRendererProps) => {
    const { children } = props;
    const childrenString: string = children[0].props.children;
    return <Emphasis>{childrenString}</Emphasis>;
  },
  heading: (props: HeadingRendererProps) => {
    const { level, children } = props;
    const childrenString: string = children[0].props.children;
    return (
      <Heading
        as={`h${level}` as HeadingElement}
        size={headingSizes[level] as Size}
      >
        {childrenString}
      </Heading>
    );
  },
  inlineCode: (props: CodeRendererProps) => {
    const { value } = props;
    return <Code>{value}</Code>;
  },
  paragraph: (props: ChildrenRendererProps) => {
    const { children } = props;
    return <Paragraph>{children}</Paragraph>;
  },
  strong: (props: ChildrenRendererProps) => {
    const { children } = props;
    const childrenString: string = children[0].props.children;
    return <Strong>{childrenString}</Strong>;
  },
  text: (props: ChildrenRendererProps) => {
    const { children } = props;
    return <Text>{children}</Text>;
  },
};

const Markdown: React.FC<MarkdownProps> = props => {
  const { source } = props;
  return <ReactMarkdown renderers={renderers} source={source} />;
};

export default Markdown;
