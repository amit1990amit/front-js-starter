// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import VirtualPage from './pages/VirtualPage';
import TablePage from './pages/TablePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* New main route */}
        <Route path="/" element={<MainPage />} />

        {/* The rest of the app routes are still accessible directly */}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/virtual" element={<VirtualPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </Router>
  );
}
