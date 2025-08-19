import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Admisiones from './pages/Admisiones';
import Contacto from './pages/Contacto';
import Trabaja from './pages/Trabaja';
import Comunidad from './pages/Comunidad';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admisiones" element={<Admisiones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
    </Router>
  );
}