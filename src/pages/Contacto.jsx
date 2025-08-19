import React from "react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <>
      <div className="contacto-container">
        <h2 className="form-title">Contáctanos</h2>
        <p className="descripcion">
          Si tienes preguntas, inquietudes o deseas más información sobre nuestro jardín infantil, no dudes en escribirnos.
          Estaremos encantados de ayudarte.
        </p>

        <div className="contenido-contacto">
          {/* Mapa */}
          <div className="mapa">
            <iframe
              title="Ubicación Jardín Infantil"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.793805709775!2d-74.02045518523773!3d5.021135097937885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406f6e44f06e0d%3A0x1aa58fef2b6c48ff!2sCl.%206%20%2313-42%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1716068724102!5m2!1ses!2sco"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Formulario */}
          <form className="contacto-form">
            <label>Nombre Completo*</label>
            <input type="text" placeholder="Ingresa tu nombre" />

            <label>Correo Electrónico*</label>
            <input type="email" placeholder="Ingresa tu correo electrónico" />

            <label>Teléfono de contacto*</label>
            <input type="tel" placeholder="Ingresa tu número de celular" />

            <label>Mensaje*</label>
            <textarea placeholder="Escribe tu mensaje aquí..."></textarea>

            <button type="submit" className="submit-btn">ENVIAR MENSAJE</button>
          </form>
        </div>
      </div>

      <footer className="footer-trabaja">
        <p><strong>Dirección:</strong> Calle 6 #13-42, Algarra II, Zipaquirá, Cundinamarca</p>
        <p><strong>Teléfono:</strong> +57 3184871197</p>
      </footer>
    </>
  );
}
