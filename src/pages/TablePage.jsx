// src/pages/TablePage.jsx
import React from 'react';
import { usePostsQuery } from '../features/posts/hooks';
import DataTable from '../components/DataTable/DataTable';
import { postColumns } from '../components/DataTable/columns';

export default function TablePage() {
  // get up to 100 posts from API
  const { data: posts, isLoading, isError, error } = usePostsQuery({
    limit: 100,
  });

  // create a "large" dataset by repeating the posts with new ids
  // this simulates hundreds/thousands of rows for virtualization demo
  const largeData = React.useMemo(() => {
    if (!posts || posts.length === 0) return [];

    const repeated = [];
    const times = 10; // 100 * 10 = 1000 rows

    for (let i = 0; i < times; i++) {
      for (let p of posts) {
        repeated.push({
          ...p,
          id: `${p.id}-${i}`, // make id unique
        });
      }
    }
    return repeated;
  }, [posts]);

  if (isLoading) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Posts Table</h2>
        <p>Loading data…</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Posts Table</h2>
        <p style={{ color: 'red' }}>
          Error: {error?.message || 'Failed to load posts'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <DataTable columns={postColumns} data={largeData} />
    </div>
  );
}
