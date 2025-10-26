// src/components/DataTable/DataTable.jsx
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';

import DataTableToolbar from './DataTableToolbar';
import './DataTable.css';

export default function DataTable({ columns, data }) {
  // table state: sorting + globalFilter (search)
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  // build the table model
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // rows after sorting/filtering
  const rows = table.getRowModel().rows;

  // virtualization setup
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72, // px height per row estimate
    overscan: 8, // render a few extra rows above/below for smoother scroll
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return (
    <div className="table-wrapper">
      <DataTableToolbar
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <div className="table-container">
        <div className="table-header-wrapper">
          <table className="data-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="data-table-header-row">
                  {headerGroup.headers.map((header) => {
                    // sorting UI logic
                    const isSorted = header.column.getIsSorted(); // 'asc' | 'desc' | false
                    const sortIndicator =
                      isSorted === 'asc'
                        ? '▲'
                        : isSorted === 'desc'
                        ? '▼'
                        : '';

                    return (
                      <th
                        key={header.id}
                        className="data-table-header-cell"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="header-cell-inner">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <span className="sort-indicator">{sortIndicator}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
          </table>
        </div>

        {/* Scrollable body with virtualization */}
        <div
          ref={parentRef}
          className="table-body-viewport"
        >
          <div
            style={{
              height: totalSize,
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualItems.map((virtualRow) => {
              const row = rows[virtualRow.index];

              return (
                <div
                  key={row.id}
                  ref={rowVirtualizer.measureElement}
                  className={
                    'data-table-row ' +
                    (virtualRow.index % 2 === 0
                      ? 'data-table-row-even'
                      : 'data-table-row-odd')
                  }
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <table className="data-table data-table-inner">
                    <tbody>
                      <tr>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="data-table-cell"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>

        <div className="table-footer">
          <div className="table-footer-info">
            Showing {rows.length} rows (client-side filtered & sorted)
          </div>
        </div>
      </div>
    </div>
  );
}
