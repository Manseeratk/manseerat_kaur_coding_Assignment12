import React from 'react';
import styled from 'styled-components';

export interface TableCellProps {
  children: React.ReactNode;
}

const StyledTableCell = styled.td`
padding: 10px;
border: 1px solid #ccc;
  /* Add your table cell styles here */
`;

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
