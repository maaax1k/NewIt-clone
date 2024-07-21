import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Front from './Components/Courses/Front'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/:id" element={<Front />} />
    </Routes>
  );
};

export default AppRoutes;
