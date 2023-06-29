
import { Meta, Story } from '@storybook/react';
import TableHeader, { TableHeaderProps } from './TableHeader';
import TableRow, { TableRowProps } from './TableRow';
import TableCell, { TableCellProps } from './TableCell';
import TableFooter, { TableFooterProps } from './TableFooter';

export default {
  title: 'Table',
} as Meta;

export const Header: Story<TableHeaderProps> = (args) => <TableHeader {...args} />;
Header.args = {
  children: 'Table Header',
};

export const Row: Story<TableRowProps> = (args) => <TableRow {...args} />;
Row.args = {
  children: 'Table Row',
};

export const Cell: Story<TableCellProps> = (args) => <TableCell {...args} />;
Cell.args = {
  children: 'Table Cell',
};

export const Footer: Story<TableFooterProps> = (args) => <TableFooter {...args} />;
Footer.args = {
  children: 'Table Footer',
};
