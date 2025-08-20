// src/pages/Inicio.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/Inicio.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import pencil from "../assets/pencil.png";
import img1 from "../assets/carrusel1.png";
import img2 from "../assets/carrusel2.png";
import img3 from "../assets/carrusel3.png";
import img4 from "../assets/carrusel4.png";

export default function Inicio() {
  const navigate = useNavigate();

  const slides = [
    { img: img1, alt: "Imagen 1 del jardín", to: "/About_Us" },
    { img: img2, alt: "Imagen 2 del jardín", to: "/trabaja" },
    { img: img3, alt: "Imagen 3 del jardín", to: "/contacto" },
    { img: img4, alt: "Imagen 4 del jardín", to: "/comunidad" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Actualiza clases del navbar según slide (tu lógica original)
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    navbar.classList.remove("scrolled-blue", "scrolled-green", "scrolled-pink", "scrolled-red");
    if (currentSlide === 0) navbar.classList.add("scrolled-blue");
    if (currentSlide === 1) navbar.classList.add("scrolled-green");
    if (currentSlide === 2) navbar.classList.add("scrolled-pink");
    if (currentSlide === 3) navbar.classList.add("scrolled-red");
  }, [currentSlide]);

  // Intervalo manual para auto-advance (más controlable que depender solo de autoPlay)
  useEffect(() => {
    // limpiar intervalo anterior
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // cambia cada 5000ms (5s)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, slides.length]);

  // cuando el carrusel cambia (por flecha/indicador/swipe), sincronizamos el estado
  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  // click en la imagen -> navegar a la ruta interna
  const handleClickItem = (index, item) => {
    const target = slides[index]?.to;
    if (!target) return;
    navigate(target);
    // si prefieres abrir en nueva pestaña:
    // window.open(target, "_blank", "noopener,noreferrer");
  };

  // accesibilidad: Enter/Space en la imagen
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClickItem(index);
    }
  };

  return (
    <div className="inicio-container">
      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Carousel
          selectedItem={currentSlide}
          onChange={handleChange}
          onClickItem={handleClickItem}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={true}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          useKeyboardArrows={true}
          // NOTA: no usamos autoPlay aquí para evitar conflictos con el intervalo manual
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className={`carousel-slide ${["bg-blue", "bg-green", "bg-pink", "bg-red"][i]}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                style={{ cursor: "pointer" }}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, i)}
                // No ponemos onClick aquí porque react-responsive-carousel llama a onClickItem
              />
            </div>
          ))}
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
          <p>Contamos con plataforma virtual</p>
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
