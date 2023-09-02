import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Akun from './Akun';
import SuperAdmin from './Dashboard/SuperAdmin';
import Dokter from './Dashboard/Dokter';
import Pasien from './Dashboard/Pasien';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {<Route path="/Akun" element={<Akun />} />}
      {<Route path="/Dashboard/SuperAdmin" element={<SuperAdmin />} />}
      {<Route path="/Dashboard/Dokter" element={<Dokter />} />}
      {<Route path="/Dashboard/Pasien" element={<Pasien />} />}
    </Routes>
  );
}

export default App;
