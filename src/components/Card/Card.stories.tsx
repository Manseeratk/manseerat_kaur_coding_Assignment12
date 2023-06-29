
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    defaultText: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  defaultText: 'Default Card',
};

export const ColoredCard = Template.bind({});
ColoredCard.args = {
  defaultText: 'Colored Card',
  backgroundColor: '#ffcc00',
};

export const DisabledCard = Template.bind({});
DisabledCard.args = {
  defaultText: 'Disabled Card',
  disabled: true,
};
