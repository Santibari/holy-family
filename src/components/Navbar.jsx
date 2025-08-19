import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>Holy Family – Jardín Infantil</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/admisiones" onClick={() => setMenuOpen(false)}>Admisiones</Link></li>
        <li><Link to="/trabaja" onClick={() => setMenuOpen(false)}>Trabaja con nosotros</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        <li><Link to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad Holy Family</Link></li>
      </ul>
    </nav>
  );
}
