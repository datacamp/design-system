import {
  border,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css`
  border: 1px solid ${colors.beige400};
  border-radius: ${border.radius};
  margin-top: 8px;
  overflow-x: scroll;
`;

const tableStyle = css`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.navyText};
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.h6};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.base};
  border-collapse: collapse;
`;

const tableCellStyle = css`
  padding: 16px;
  text-align: left;
  border-top: 1px solid ${colors.beige400};
  word-wrap: break-word;
  vertical-align: top;

  &:first-of-type {
    font-weight: ${fontWeight.bold};
  }
`;

const tableHeadCellStyle = css`
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.bold};
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
