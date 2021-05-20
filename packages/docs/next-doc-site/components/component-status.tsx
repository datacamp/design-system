import { Badge, Link as LinkBase } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';
import { Fragment } from 'react';

import Table from './table';

const cellStyle = css`
  text-align: right;
`;

type ComponentStatusProps = { component: string } & (
  | { path: string; variant: 'available' }
  | {
      path?: undefined;
      variant: 'planned' | 'considered';
    }
);

function ComponentStatus({
  component,
  path,
  variant,
}: ComponentStatusProps): JSX.Element {
  function renderCells(): JSX.Element {
    if (variant === 'available') {
      return (
        <Fragment>
          <Table.Cell>
            <Link href={`/components/${path}`} passHref>
              <LinkBase>{component}</LinkBase>
            </Link>
          </Table.Cell>
          <Table.Cell css={cellStyle}>
            <Badge color={tokens.colors.green} size="large">
              Available
            </Badge>
          </Table.Cell>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Table.Cell>{component}</Table.Cell>
        <Table.Cell css={cellStyle}>
          <Badge
            color={
              variant === 'planned'
                ? tokens.colors.purple
                : tokens.colors.beige400
            }
            size="large"
          >
            {variant === 'planned' ? 'Planned' : 'Under Consideration'}
          </Badge>
        </Table.Cell>
      </Fragment>
    );
  }

  return <tr>{renderCells()}</tr>;
}

export default ComponentStatus;
