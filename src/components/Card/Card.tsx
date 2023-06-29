import React from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {
  children: React.ReactNode;
  defaultText?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  padding: 20px;
  border-radius: 4px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Card: React.FC<CardProps> = ({ children, defaultText, backgroundColor, disabled }) => {
  return <StyledCard backgroundColor={backgroundColor} disabled={disabled}>{defaultText}{children}</StyledCard>;
};

export default Card;
