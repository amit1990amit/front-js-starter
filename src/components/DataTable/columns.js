// src/components/DataTable/columns.js
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const postColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('body', {
    header: 'Body',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('userId', {
    header: 'User',
    cell: (info) => `User #${info.getValue()}`,
  }),
];
