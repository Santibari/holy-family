import React, { useEffect, useState } from "react";
import "../styles/Inicio.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../assets/logo.png";
import pencil from "../assets/pencil.png";
import img1 from "../assets/carrusel1.png";
import img2 from "../assets/carrusel2.png";
import img3 from "../assets/carrusel3.png";
import img4 from "../assets/carrusel4.png";

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    navbar.classList.remove("scrolled-blue", "scrolled-green", "scrolled-purple");

    if (currentSlide === 0) navbar.classList.add("scrolled-blue");
    if (currentSlide === 1) navbar.classList.add("scrolled-green");
    if (currentSlide === 2) navbar.classList.add("scrolled-purple");
  }, [currentSlide]);

  return (
    <div className="inicio-container">
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={5000}
          onChange={(index) => setCurrentSlide(index)}
        >
          <div className="carousel-slide bg-blue">
            <img src={img1} alt="Imagen 1 del jardín" />
          </div>
          <div className="carousel-slide bg-green">
            <img src={img2} alt="Imagen 2 del jardín" />
          </div>
          <div className="carousel-slide bg-pink">
            <img src={img3} alt="Imagen 3 del jardín" />
          </div>
          <div className="carousel-slide bg-red">
            <img src={img4} alt="Imagen 4 del jardín" />
          </div>
        </Carousel>
      </div>

      <section className="bienvenida">
        <h2>COMUNIDAD HOLY FAMILY</h2>
        <p>
          ENSEÑAR NO ES TRANSFERIR CONOCIMIENTO, SINO CREAR LAS POSIBILIDADES
          PARA SU PROPIA CONSTRUCCIÓN
        </p>
        <button className="btn-admisiones">Formulario de Admisiones</button>
      </section>

      <section className="beneficios">
        <div className="beneficio">
          <img
            src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
            alt="Enfasis en Ingles"
          />
          <p>Enfasis en Ingles</p>
        </div>
        <div className="beneficio">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
            alt="Calendario A"
          />
          <p>Calendario A</p>
        </div>
        <div className="beneficio">
          <img src={pencil} alt="Pencil" />
          <p>Contamos con plataforma virtual con Pencil by Colegium</p>
        </div>
      </section>

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
