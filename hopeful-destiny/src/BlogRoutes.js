import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from './pages/BlogIndex';
import TransNzoiaBlog from './components/blogs/TransNzoiaBlog';

const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogIndex />} />
      <Route path="/understanding-trans-nzoia" element={<TransNzoiaBlog />} />
    </Routes>
  );
};

export default BlogRoutes;
