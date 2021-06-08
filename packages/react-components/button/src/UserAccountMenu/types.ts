import { AnchorHTMLAttributes, RefObject } from 'react';

export type ItemProps = {
  onKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
  ref: RefObject<HTMLAnchorElement>;
  role: string;
  tabIndex: number;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
