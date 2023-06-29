import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  buttonText?: string;
  // Add any other desired props here
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#007bff')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0069d9')};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled) {
      alert('Button clicked!');
    }
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
