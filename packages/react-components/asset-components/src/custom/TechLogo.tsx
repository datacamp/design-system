import React from 'react';

import {
  Git,
  Python,
  R,
  Scala,
  Shell,
  Spreadsheet,
  Sql,
  Tableau,
  Theory,
} from '../generated/technologies';

export const logoComponents = {
  Git,
  python: Python,
  R,
  Scala,
  Shell,
  Spreadsheets: Spreadsheet,
  SQL: Sql,
  Tableau,
  Theory,
};

export type Technology = keyof typeof logoComponents;

interface TechLogoProps extends React.ComponentProps<typeof Git> {
  technology: Technology;
}

const TechLogo: React.FC<TechLogoProps> = ({ technology, ...otherProps }) => {
  const Logo = logoComponents[technology] || Python;
  return <Logo {...otherProps} />;
};

export default TechLogo;
