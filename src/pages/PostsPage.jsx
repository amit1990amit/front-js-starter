// src/pages/PostsPage.jsx
import React from 'react';
import { usePostsQuery } from '../features/posts/hooks';

export default function PostsPage() {
  const { data: posts, isLoading, isError, error } = usePostsQuery({  });

  if (isLoading) {
    return (
      <div>
        <h2>Posts Page</h2>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Posts Page</h2>
        <p style={{ color: 'red' }}>Error: {error?.message || 'Failed to load posts'}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts Page</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
