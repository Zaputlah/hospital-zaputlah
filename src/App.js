import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Akun from './Akun';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {<Route path="/Akun" element={<Akun />} />}
    </Routes>
  );
}

export default App;
