
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img component is visible', () => {
  render(<Img src="https://www.hdwallpaper.nu/wp-content/uploads/2015/06/2004180-995x498.jpg" alt="Example Image" />);
  const imgElement = screen.getByAltText('Example Image');
  expect(imgElement).toBeVisible();
});

test('Img component background color changes when disabled', () => {
  render(<Img src="https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1656045-1024x640.jpg" alt="Example Image" disabled />);
  const imgElement = screen.getByAltText('Example Image');
  expect(imgElement).toHaveStyle({ opacity: '0.6' });
});
