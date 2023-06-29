import React from 'react';
import styled, { css } from 'styled-components';

export interface TableHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
}

const StyledTableHeader = styled.th<TableHeaderProps>`
  /* Add your table header styles here */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled, color }) => {
  return (
    <StyledTableHeader disabled={disabled} color={color}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
