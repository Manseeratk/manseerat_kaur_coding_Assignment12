
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders HeroImage component', () => {
  render(<HeroImage imageUrl="https://example.com/hero.jpg" altText="Hero Image" />);
  const heroImageElement = screen.getByRole('img', { name: /Hero Image/i });
  expect(heroImageElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<HeroImage imageUrl="https://example.com/hero.jpg" altText="Hero Image" disabled />);
  const heroImageElement = screen.getByRole('img', { name: /Hero Image/i });
  expect(heroImageElement).toHaveStyle('opacity: 0.6');
});
