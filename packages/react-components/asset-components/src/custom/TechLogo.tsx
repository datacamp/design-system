import React from 'react';

import {
  Excel,
  Git,
  PowerBi,
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
  Excel,
  excel: Excel,
  Git,
  'Power BI': PowerBi,
  // eslint-disable-next-line @typescript-eslint/camelcase
  power_bi: PowerBi,
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
