import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  const [checked, setChecked] = useState(false);
  return <RadioButton {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Option',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Option',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option',
  disabled: true,
};

export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
  label: 'Option',
  checked: true,
  disabled: true,
};
