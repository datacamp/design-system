import {
  Emphasis as EmphasisBase,
  Heading,
  Link,
  List as ListBase,
  Paragraph as ParagraphBase,
  Strong as StrongBase,
} from '@datacamp/waffles-text';

export type TextProps = {
  children: string | React.ReactNode;
};

function H2({ children }: TextProps): JSX.Element {
  return (
    <Heading as="h2" multiLine size={600}>
      {children}
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

type RegularLinkProps = {
  children: string;
  href: string;
};

function RegularLink({ children, href }: RegularLinkProps): JSX.Element {
  return <Link href={href}>{children}</Link>;
}

type ListProps = {
  children: React.ReactNode;
};

function List({ children }: ListProps): JSX.Element {
  return <ListBase>{children}</ListBase>;
}

function ListItem({ children }: ListProps): JSX.Element {
  return <ListBase.Item>{children}</ListBase.Item>;
}

export default {
  a: RegularLink,
  em: Emphasis,
  h2: H2,
  h3: H3,
  h4: H4,
  li: ListItem,
  p: Paragraph,
  strong: Strong,
  ul: List,
};
