
import { Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args:ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click Me',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonText: 'Click Me',
  disabled: true,
};
