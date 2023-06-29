
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label>Label text</Label>);
  const labelElement = screen.getByText('Label text');
  expect(labelElement).toBeInTheDocument();
});

test('Label has custom text color', () => {
  render(<Label textColor="red">Label text</Label>);
  const labelElement = screen.getByText('Label text');
  expect(labelElement).toHaveStyle('color: red');
});
