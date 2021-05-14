import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css`
  border: 1px solid ${tokens.colors.beige400};
  border-radius: ${tokens.border.radius};
  margin-top: 8px;
  overflow-x: scroll;
`;

const tableStyle = css`
  width: 100%;
  background-color: ${tokens.colors.white};
  color: ${tokens.colors.navyText};
  font-family: ${tokens.fontFamily.sansSerif};
  font-size: ${tokens.fontSize.h6};
  font-weight: ${tokens.fontWeight.regular};
  line-height: ${tokens.lineHeight.base};
  border-collapse: collapse;
`;

const tableCellStyle = css`
  padding: 16px;
  text-align: left;
  border-top: 1px solid ${tokens.colors.beige400};
  word-wrap: break-word;
  vertical-align: top;

  &:first-of-type {
    font-weight: ${tokens.fontWeight.bold};
  }
`;

const tableHeadCellStyle = css`
  font-size: ${tokens.fontSize.small};
  font-weight: ${tokens.fontWeight.bold};
  text-transform: uppercase;
  border-top: none;
  min-width: 140px;
  letter-spacing: 1px;
`;

type TableCellProps = {
  children: React.ReactNode;
  className?: string;
};

function TableCell({ children, className }: TableCellProps): JSX.Element {
  return (
    <td className={className} css={tableCellStyle}>
      {children}
    </td>
  );
}

function TableHeadCell({ children, className }: TableCellProps): JSX.Element {
  return (
    <td className={className} css={[tableCellStyle, tableHeadCellStyle]}>
      {children}
    </td>
  );
}

type TableProps = {
  children: React.ReactNode;
};

function Table({ children }: TableProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <table css={tableStyle}>{children}</table>
    </div>
  );
}

Table.Cell = TableCell;
Table.HeadCell = TableHeadCell;

export default Table;
