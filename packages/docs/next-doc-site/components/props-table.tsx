// eslint-disable-next-line filenames/match-exported
import metadata from '@datacamp/waffles-text/componentMetadata.json';
import { Fragment } from 'react';

import componentMetadataByName from '../helpers/component-metadata-by-name';
import typeNameFromMetadata from '../helpers/type-name-from-metadata';

import Markdown from './markdown-elements';

type PropsTableProps = {
  componentName: string;
};

function PropsTable({ componentName }: PropsTableProps): JSX.Element {
  const data = componentMetadataByName(metadata, componentName);

  return (
    <Fragment>
      <Markdown.h3>{componentName}</Markdown.h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.props &&
            Object.entries(data.props).map((prop) => {
              const [name, propData] = prop;
              return (
                <tr key={`prop-${name}`}>
                  <td>{name === 'innerRef' ? 'ref' : name}</td>
                  <td>{typeNameFromMetadata(propData)}</td>
                  <td>
                    {propData.required
                      ? 'Required'
                      : propData.defaultValue?.value}
                  </td>
                  <td>{data.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default PropsTable;
