import React from 'react';

import { Alpa, Apply, Assess, Learn, Practice } from '../generated/alpa';

export const loopComponents = {
  Apply,
  Assess,
  Learn,
  Practice,
};

export type Highlight = keyof typeof loopComponents;

interface ALPALoopProps extends React.ComponentProps<typeof Alpa> {
  highlight?: Highlight;
}

const ALPALoop: React.FC<ALPALoopProps> = ({ highlight, ...otherProps }) => {
  const Logo = highlight ? loopComponents[highlight] : Alpa;
  return <Logo {...otherProps} />;
};

export default ALPALoop;
