import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface TextProps {
  text: string;
  color?: string;
  fontSize?: string;
}

const StyledText: StyledComponent<'p', any, TextProps, never> = styled.p<TextProps>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const Text: React.FC<TextProps> = ({ text, color, fontSize }) => {
  return <StyledText color={color} fontSize={fontSize}>{text}</StyledText>;
};

export default Text;
