import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  checked: boolean;
  label: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

const StyledRadioButton = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Input = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ checked, label, disabled = false, onChange }) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <StyledRadioButton disabled={disabled}>
      <Input type="radio" checked={checked} onChange={handleChange} disabled={disabled} />
      {label}
    </StyledRadioButton>
  );
};

export default RadioButton;
