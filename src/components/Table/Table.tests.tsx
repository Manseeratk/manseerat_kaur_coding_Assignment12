
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

test('TableHeader is visible', () => {
  render(<TableHeader>Table Header</TableHeader>);
  const tableHeaderElement = screen.getByText('Table Header');
  expect(tableHeaderElement).toBeInTheDocument();
});

test('TableRow is visible', () => {
  render(<TableRow>Table Row</TableRow>);
  const tableRowElement = screen.getByText('Table Row');
  expect(tableRowElement).toBeInTheDocument();
});

test('TableCell is visible', () => {
  render(<TableCell>Table Cell</TableCell>);
  const tableCellElement = screen.getByText('Table Cell');
  expect(tableCellElement).toBeInTheDocument();
});

test('TableFooter is visible', () => {
  render(<TableFooter>Table Footer</TableFooter>);
  const tableFooterElement = screen.getByText('Table Footer');
  expect(tableFooterElement).toBeInTheDocument();
});
