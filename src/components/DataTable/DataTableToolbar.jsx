// src/components/DataTable/DataTableToolbar.jsx
import React from 'react';
import './DataTable.css';

export default function DataTableToolbar({ globalFilter, setGlobalFilter }) {
  return (
    <div className="table-toolbar">
      <div className="table-toolbar-left">
        <h2 className="table-title">Posts Table</h2>
        <p className="table-subtitle">
          Client-side sort, filter, and virtualization.
        </p>
      </div>

      <div className="table-toolbar-right">
        <input
          className="table-search-input"
          placeholder="Search title/body…"
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
