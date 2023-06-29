import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children: React.ReactNode;
  textColor?: string;
}

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.textColor || '#000'};
`;

const Label: React.FC<LabelProps> = ({ children, textColor }) => {
  return <StyledLabel textColor={textColor}>{children}</StyledLabel>;
};

export default Label;
