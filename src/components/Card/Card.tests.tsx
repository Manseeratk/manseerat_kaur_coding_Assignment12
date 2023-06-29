
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card is visible', () => {
  render(<Card defaultText="Test Card" disabled={true} children=""></Card>);
  const cardElement = screen.getByText('Test Card');
  expect(cardElement).toBeInTheDocument();
});

test('Card background color changes when disabled', () => {
  render(<Card defaultText="Disabled Card" disabled children="" />);
  const cardElement = screen.getByText('Disabled Card');
  expect(cardElement).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
});
