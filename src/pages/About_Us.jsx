import React, { useState } from "react";
import "../styles/AboutUs.css";
import imgAbout from "../assets/aboutus.jpg";   // reemplaza con tu imagen real
import imgMision from "../assets/mision.png";  // reemplaza con tu imagen real

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      {/* Sección About Us */}
      <section className="about-section">
        <div className="about-image">
          <img src={imgAbout} alt="Niños leyendo en Holy Family" />
        </div>
        <div className="about-text">
          <h2>About Us.</h2>
          <p>
            En el Jardín Infantil Holy Family, implementamos una metodología
            basada en el aprendizaje significativo, un enfoque que permite a los
            niños y niñas construir su conocimiento a partir de sus propias
            experiencias, intereses y descubrimientos.
          </p>
          <p>
            Nuestra metodología se centra en el desarrollo integral de los
            estudiantes, fomentando su curiosidad, creatividad y autonomía,
            mientras se promueven valores y habilidades emocionales esenciales
            para la vida.
          </p>
          <p>
            Creemos que cada niño es único y tiene un potencial ilimitado. Nuestra
            metodología de aprendizaje significativo está diseñada para nutrir ese
            potencial, brindando una base sólida para su crecimiento como personas
            felices, curiosas y capaces.
          </p>
          <p>¡Bienvenidos a una experiencia educativa transformadora!</p>
        </div>
      </section>

      {/* Sección Misión & Visión */}
      <section className="mision-section">
        <div className="mision-image">
          <img src={imgMision} alt="Niños jugando en arena" />
        </div>
        <div className="mision-text">
          <h2>Misión & Visión.</h2>

          <h3>MISIÓN</h3>
          <ul>
            <li>Educar con amor y respeto, fomentando valores y desarrollo emocional.</li>
            <li>Promover el aprendizaje significativo a través del juego y actividades didácticas.</li>
            <li>Guiar a los niños para construir conocimiento desde sus experiencias.</li>
            <li>Formar personas competentes y preparadas para los retos del mundo actual.</li>
            <li>Integrar el inglés como segunda lengua de manera natural y efectiva.</li>
          </ul>

          <h3>VISIÓN</h3>
          <ul>
            <li>Ser para el 2030 uno de los mejores colegios de Zipaquirá.</li>
            <li>Formar estudiantes bilingües, competentes en inglés y en valores.</li>
            <li>Superar desafíos familiares, educativos y sociales con una comunidad sólida.</li>
            <li>Ofrecer todos los grados de básica primaria y seguir creciendo.</li>
            <li>Educar niños felices, curiosos, investigadores y preparados para el futuro.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          <strong>Dirección:</strong> Calle 6 #13-42, Algarra II, Zipaquirá, Cundinamarca
        </p>
        <p>
          <strong>Teléfono:</strong> +57 3184871197
        </p>
      </footer>
    </div>
  );
}