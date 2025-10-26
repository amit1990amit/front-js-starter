import React from 'react';
import { usePostsQuery } from '../features/posts/hooks';
import VirtualList from '../components/VirtualList/VirtualList';

export default function VirtualPage() {
  const { data: posts, isLoading, isError, error } = usePostsQuery({
    limit: 100, // ask server for up to 100 posts instead of slicing
  });

  if (isLoading) {
    return (
      <div>
        <h2>Virtualized Posts</h2>
        <p>Loading large list...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Virtualized Posts</h2>
        <p style={{ color: 'red' }}>
          Error: {error?.message || 'Failed to load posts'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Virtualized Posts</h2>
      <p>
        Rendering {posts.length} posts with virtualization using
        {' '}
        <code>@tanstack/react-virtual</code>.
      </p>

      <VirtualList
        items={posts}
        estimateHeight={72} // guess avg row height
        renderRow={(item, index) => (
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              {index + 1}. {item.title}
            </div>
            <div style={{ fontSize: 14, color: '#555' }}>{item.body}</div>
          </div>
        )}
      />
    </div>
  );
}
