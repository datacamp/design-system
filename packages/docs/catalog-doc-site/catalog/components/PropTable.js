import Card from '@datacamp/waffles-card';
import { Heading, Paragraph, Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const getTypeString = ({ tsType, type }) => {
  // First try type from propTypes
  if (type) {
    switch (type.name) {
      case 'enum':
        return type.value.map(({ value }) => value).join(' | ');
      case 'union':
        return type.value.map(({ name }) => name).join(' | ');
      case 'func':
        return 'function';
      case 'arrayOf':
        return `arrayOf(${type.value.name})`;
      default:
        return type.name;
    }
  }
  // Then try type from typescript
  if (tsType) {
    switch (tsType.name) {
      case 'union':
        return tsType.elements.map(({ value }) => value).join(' | ');
      default:
        return tsType.type || tsType.name;
    }
  }

  return '!!!Unknown Type!!!';
};

const PropTable = ({ componentData, componentName, id }) => {
  const { description, props } = componentData;
  return (
    <Card css={{ marginTop: 16, padding: 24 }} elevation={2} id={id}>
      <Heading as="h4" size={400}>
        {componentName}
      </Heading>
      {description && <Paragraph>{description}</Paragraph>}
      <table className="dc-table dc-table--bordered">
        <thead className="dc-table__thead">
          <tr className="dc-table__tr">
            <th css={{ width: '10%' }}>Property</th>
            <th css={{ width: '30%' }}>Value Type</th>
            <th css={{ width: '20%' }}>Default</th>
            <th css={{ width: '40%' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props || {}).map(([name, data]) => (
            <tr className="dc-table__tr" key={name}>
              <th>{name === 'innerRef' ? 'ref' : name}</th>
              <td>{getTypeString(data)}</td>
              <td>
                {data.required ? (
                  <Text css={{ color: tokens.color.primary.redText.value.hex }}>
                    Required
                  </Text>
                ) : (
                  data.defaultValue && data.defaultValue.value
                )}
              </td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default PropTable;
