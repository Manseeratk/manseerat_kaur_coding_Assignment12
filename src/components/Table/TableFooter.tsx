import React from 'react';
import styled from 'styled-components';

export interface TableFooterProps {
  children: React.ReactNode;
}

const StyledTableFooter = styled.tfoot`
background-color: #f5f5f5;
  color: #333;
  /* Add your table footer styles here */
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
