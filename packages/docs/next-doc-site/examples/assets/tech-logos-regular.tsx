import { TechLogo } from '@datacamp/waffles-asset-components';

function Example(): JSX.Element {
  return (
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <TechLogo height={40} technology="Excel" width={40} />
      <TechLogo height={40} technology="Git" width={40} />
      <TechLogo height={40} technology="PowerBi" width={40} />
      <TechLogo height={40} technology="python" width={40} />
      <TechLogo height={40} technology="R" width={40} />
      <TechLogo height={40} technology="Scala" width={40} />
      <TechLogo height={40} technology="Shell" width={40} />
      <TechLogo height={40} technology="Spreadsheets" width={40} />
      <TechLogo height={40} technology="SQL" width={40} />
      <TechLogo height={40} technology="Tableau" width={40} />
      <TechLogo height={40} technology="Theory" width={40} />
    </div>
  );
}

export default Example;
