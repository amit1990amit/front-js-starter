// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import VirtualPage from './pages/VirtualPage';
import TablePage from './pages/TablePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav
          style={{
            marginBottom: 20,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <Link to="/users">Users (Redux)</Link>
          <Link to="/posts">Posts (React Query)</Link>
          <Link to="/virtual">Virtualized List</Link>
          <Link to="/table">Table (Sort / Filter / Virtual)</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/virtual" element={<VirtualPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h2>404 - Page not found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
