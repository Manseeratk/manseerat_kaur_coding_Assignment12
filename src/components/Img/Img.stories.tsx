
import { Story, Meta } from '@storybook/react';
import Img, { ImgProps } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://th.bing.com/th/id/R.52d05a08485e8df2e0b762d1ec0543d5?rik=R4KqCiyYjzEvUg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f03%2f2-flower-wallpaper.jpg&ehk=lrtJzUGr%2bBmrWt%2bS30zRdrJRvqrkrZTXkEo3MgIq4jk%3d&risl=&pid=ImgRaw&r=0',
  alt: 'Example Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://th.bing.com/th/id/R.52d05a08485e8df2e0b762d1ec0543d5?rik=R4KqCiyYjzEvUg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f03%2f2-flower-wallpaper.jpg&ehk=lrtJzUGr%2bBmrWt%2bS30zRdrJRvqrkrZTXkEo3MgIq4jk%3d&risl=&pid=ImgRaw&r=0',
  alt: 'Example Image',
  disabled: true,
};
