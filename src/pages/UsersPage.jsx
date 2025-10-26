// src/pages/UsersPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

export default function UsersPage() {
  const dispatch = useDispatch();

  const { list: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  useEffect(() => {
    if (users.length > 0) {
      console.log('Users from Redux:', users);
    }
  }, [users]);

  if (loading) {
    return (
      <div>
        <h2>Users Page</h2>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Users Page</h2>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Users Page</h2>
      <p>Showing first 5 users from Redux state:</p>

      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>

      <p>Check console for full users array.</p>
    </div>
  );
}
