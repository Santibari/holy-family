import React, { useState } from "react";
import "../styles/Admisiones.css";

export default function Admisiones() {
  const [formData, setFormData] = useState({
    nombreAcudiente: "",
    nombreNino: "",
    edad: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <>
      <div className="admisiones-container">
        <h2>Formulario de Admisión</h2>
        <form onSubmit={handleSubmit} className="admisiones-form">
          <label>Nombre del Acudiente:</label>
          <input type="text" name="nombreAcudiente" onChange={handleChange} required />

          <label>Nombre del Niño(a):</label>
          <input type="text" name="nombreNino" onChange={handleChange} required />

          <label>Edad:</label>
          <input type="number" name="edad" onChange={handleChange} required />

          <label>Correo Electrónico:</label>
          <input type="email" name="correo" onChange={handleChange} required />

          <label>Teléfono:</label>
          <input type="tel" name="telefono" onChange={handleChange} required />

          <label>Mensaje:</label>
          <textarea name="mensaje" onChange={handleChange}></textarea>

          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>

      {/* FOOTER FUERA DEL CONTENEDOR */}
      <footer className="footer">
        <p>
          <strong>Dirección:</strong> Calle 6 #13-42, Algarra II, Zipaquirá, Cundinamarca
        </p>
        <p>
          <strong>Teléfono:</strong> +57 3184871197
        </p>
      </footer>
    </>
  );
}
