
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    fontSize: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, World!',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: 'Hello, World!',
  color: 'blue',
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  text: 'Hello, World!',
  fontSize: '24px',
};
