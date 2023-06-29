
import { render } from '@testing-library/react';
import Text from './Text';

test('renders text correctly', () => {
  const { getByText } = render(<Text text="Hello, World!" />);
  const textElement = getByText(/Hello, World!/i);
  expect(textElement).toBeInTheDocument();
});
