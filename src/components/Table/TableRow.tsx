import React from 'react';
import styled from 'styled-components';

export interface TableRowProps {
  children: React.ReactNode;
}

const StyledTableRow = styled.tr`
  /* Add your table row styles here */
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;
