
import { Story, Meta } from '@storybook/react';
import  HeroImage,{ HeroImageProps } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args: HeroImageProps) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://www.keycdn.com/img/blog/typescript-tutorial.png',
  altText: 'Learn Typescript',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
