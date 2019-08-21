import React from 'react';

import Heading, { HeadingProps } from '../components/Heading';

export interface AlternateHeadingProps {
  children: HeadingProps['children'];
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const headingSizes: { [key: number]: HeadingProps['size'] } = {
  1: 800,
  2: 700,
  3: 600,
  4: 500,
  5: 400,
  6: 300,
};

const AlternateHeading: React.FC<AlternateHeadingProps> = ({
  children,
  level,
}) => {
  return (
    <Heading as={`h${level}` as HeadingProps['as']} size={headingSizes[level]}>
      {children}
    </Heading>
  );
};

export default AlternateHeading;
