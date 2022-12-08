import {
  Code,
  CodeBlock as CodeBlockBase,
  Emphasis as EmphasisBase,
  Heading,
  Link as LinkBase,
  List as ListBase,
  Paragraph as ParagraphBase,
  Strong as StrongBase,
} from '@datacamp/waffles-text';
import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import slug from 'slug';

import textFromChildren from '../helpers/text-from-children';

export type TextProps = {
  children: string | React.ReactNode;
};

// Add ID to heading, so it could be bookmarked
function H2({ children }: TextProps): JSX.Element {
  return (
    <Heading as="h2" multiLine size={600}>
      <span id={slug(textFromChildren(children))}>{children}</span>
    </Heading>
  );
}

function H3({ children }: TextProps): JSX.Element {
  return (
    <Heading as="h3" multiLine size={500}>
      {children}
    </Heading>
  );
}

function H4({ children }: TextProps): JSX.Element {
  return (
    <Heading as="h4" multiLine size={400}>
      {children}
    </Heading>
  );
}

function Paragraph({ children }: TextProps): JSX.Element {
  return <ParagraphBase>{children}</ParagraphBase>;
}

function Emphasis({ children }: TextProps): JSX.Element {
  return <EmphasisBase>{children}</EmphasisBase>;
}

function Strong({ children }: TextProps): JSX.Element {
  return <StrongBase>{children}</StrongBase>;
}

type CodeProps = {
  children: string;
};

function InlineCode({ children }: CodeProps): JSX.Element {
  return <Code>{children}</Code>;
}

function CodeBlock({ children }: CodeProps): JSX.Element {
  return <CodeBlockBase>{children}</CodeBlockBase>;
}

type RegularLinkProps = {
  children: string;
  href: string;
};

function RegularLink({ children, href }: RegularLinkProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <LinkBase>{children}</LinkBase>
    </Link>
  );
}

const listStyle = css`
  padding-left: 32px;
  margin-top: 8px !important;
  list-style: disc;

  ul {
    margin-top: 0 !important;
  }
`;

const listItemStyle = css`
  margin-top: 0;
`;

type ListProps = {
  children: React.ReactNode;
};

function List({ children }: ListProps): JSX.Element {
  return <ListBase css={listStyle}>{children}</ListBase>;
}

function ListItem({ children }: ListProps): JSX.Element {
  return <ListBase.Item css={listItemStyle}>{children}</ListBase.Item>;
}

export default {
  a: RegularLink,
  code: CodeBlock,
  em: Emphasis,
  h2: H2,
  h3: H3,
  h4: H4,
  inlineCode: InlineCode,
  li: ListItem,
  p: Paragraph,
  strong: Strong,
  ul: List,
};
