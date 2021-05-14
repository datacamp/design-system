// eslint-disable-next-line filenames/match-exported
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { Fragment } from 'react';

import componentMetadataByName from '../helpers/component-metadata-by-name';
import typeNameFromMetadata from '../helpers/type-name-from-metadata';
import { Metadata } from '../types';

import Markdown from './markdown-elements';
import Table from './table';

const nameCellStyle = css`
  font-weight: ${tokens.fontWeight.bold};
`;

const requiredStyle = css`
  color: ${tokens.colors.redText};
`;

const descriptionStyle = css`
  min-width: 300px;
`;

type PropsTableProps = {
  component: string;
  metadata: Metadata;
};

function PropsTable({ component, metadata }: PropsTableProps): JSX.Element {
  const data = componentMetadataByName(metadata, component);

  return (
    <Fragment>
      <Markdown.h3>{component}</Markdown.h3>
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
              const [componentName, propData] = prop;
              return (
                <tr key={`prop-${componentName}`}>
                  <Table.Cell css={nameCellStyle}>
                    {componentName === 'innerRef' ? 'ref' : componentName}
                  </Table.Cell>
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
