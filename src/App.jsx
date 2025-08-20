import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Aboutus from './pages/About_Us';
import Contacto from './pages/Contacto';
import Trabaja from './pages/Trabaja';
import Comunidad from './pages/Comunidad';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/About_Us" element={<Aboutus />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
    </Router>
  );
}