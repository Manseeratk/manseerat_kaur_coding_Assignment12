
import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    textColor: { control: 'color' },
  },
} as Meta;

const ENABLED = false;
const DISABLED = true;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label text',
  disabled:  ENABLED,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Label text',
  textColor: 'red',
  disabled: DISABLED,
};
