
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton component', () => {
  render(<RadioButton checked={false} label="Option" onChange={() => {}} />);
  const radioButtonElement = screen.getByText(/Option/i);
  expect(radioButtonElement).toBeInTheDocument();
});

test('calls onChange handler when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton checked={false} label="Option" onChange={handleChange} />);
  const radioButtonElement = screen.getByText(/Option/i);
  fireEvent.click(radioButtonElement);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('does not call onChange handler when clicked on disabled RadioButton', () => {
  const handleChange = jest.fn();
  render(<RadioButton checked={false} label="Option" onChange={handleChange} disabled />);
  const radioButtonElement = screen.getByText(/Option/i);
  fireEvent.click(radioButtonElement);
  expect(handleChange).not.toHaveBeenCalled();
});
