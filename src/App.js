import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import Stats from './pages/Stats';

function App() {
  return (
    <BookProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BookProvider>
  );
}

export default App;
