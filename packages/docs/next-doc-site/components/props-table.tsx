// eslint-disable-next-line filenames/match-exported
import { colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { Fragment } from 'react';

import componentMetadataByName from '../helpers/component-metadata-by-name';
import typeNameFromMetadata from '../helpers/type-name-from-metadata';
import { Metadata } from '../types';

import Markdown from './markdown-elements';
import Table from './table';

const requiredStyle = css`
  color: ${colors.redText};
`;

const descriptionStyle = css`
  min-width: 300px;
`;

type PropsTableProps = {
  componentName: string;
  metadata: Metadata;
};

function PropsTable({ componentName, metadata }: PropsTableProps): JSX.Element {
  const data = componentMetadataByName(metadata, componentName);

  return (
    <Fragment>
      <Markdown.h3>{componentName}</Markdown.h3>
      <Table>
        <thead>
          <tr>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Value</Table.HeadCell>
            <Table.HeadCell>Default</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
          </tr>
        </thead>
        <tbody>
          {data?.props &&
            Object.entries(data.props).map((prop) => {
              const [name, propData] = prop;
              return (
                <tr key={`prop-${name}`}>
                  <Table.Cell>{name === 'innerRef' ? 'ref' : name}</Table.Cell>
                  <Table.Cell>{typeNameFromMetadata(propData)}</Table.Cell>
                  <Table.Cell>
                    {propData.required ? (
                      <span css={requiredStyle}>Required</span>
                    ) : (
                      propData.defaultValue?.value
                    )}
                  </Table.Cell>
                  <Table.Cell css={descriptionStyle}>
                    {propData.description}
                  </Table.Cell>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default PropsTable;
