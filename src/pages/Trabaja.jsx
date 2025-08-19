import React from "react";
import "../styles/trabajaconnosotros.css";

export default function Trabaja() {
  return (
    <div className="trabaja-container">
      <h2 className="form-title">Trabaja con nosotros</h2>
      <h2>¿Por qué trabajar con nosotros?</h2>
  <p>
    En nuestro jardín infantil, cada día es una oportunidad para sembrar amor, aprender jugando y acompañar a los niños en sus primeros pasos hacia el futuro. Somos un equipo comprometido, alegre y creativo, que cree en el poder de la infancia para transformar el mundo. Si te apasiona la educación, valoras el trabajo en equipo y quieres crecer profesionalmente en un ambiente cálido y respetuoso, este es tu lugar. ¡Ven a ser parte de una comunidad que educa con el corazón!
  </p>

  <h3>¡Te buscamos a ti!</h3>
  <p>
    ¿Estás buscando nuevas oportunidades para crecer personal y profesionalmente mientras dejas huella en la vida de los más pequeños?
    <br />
    En nuestro jardín infantil buscamos personas que compartan nuestra pasión por la infancia y se sientan identificadas con una cultura basada en el respeto, la empatía, el trabajo en equipo y la vocación por educar desde el amor.
  </p>
      <form className="trabaja-form">
        <label>Nombre*</label>
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Apellidos*</label>
        <input type="text" placeholder="Ingresa tus apellidos" />

        <label>Email*</label>
        <input type="email" placeholder="Ingresa tu correo electrónico" />

        <label>Celular*</label>
        <input type="tel" placeholder="Ingresa tu número de celular" />

        <label>Profesión*</label>
        <input type="text" placeholder="¿Cuál es tu profesión?" />

        <label>Proceso para*</label>
        <select>
          <option>Seleccionar uno</option>
          <option>Docente</option>
          <option>Administrativo</option>
          <option>Otro</option>
        </select>

        <label>¿Por qué quieres trabajar con nosotros?</label>
        <textarea placeholder="Escribe aquí tu comentario." />

        <label>Subir hoja de vida</label>
        <input type="file" className="file-input" />

        <button type="submit" className="submit-btn">ENVIAR SOLICITUD</button>
      </form>

      <footer className="footer-trabaja">
        <p><strong>Dirección:</strong> Calle 6 #13-42, Algarra II, Zipaquirá, Cundinamarca</p>
        <p><strong>Teléfono:</strong> +57 3184871197</p>
      </footer>
    </div>
  );
}
