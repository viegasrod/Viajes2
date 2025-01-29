import React from "react";
import "./Header.css"; // Asegúrate de tener los estilos necesarios.
import logo from "../img/logoAzul.jpg"; // Ruta a tu imagen del logo.

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Vuelos Latinos Logo" className="logo" />
        <h1>Vuelos Latinos</h1>
      </div>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/cruceros.html">Cruceros</a>
        <a href="/vuelos.html">destinos</a>
        <a href="/autos.html">Alquiler autos</a>
        <a href="/contacto.html">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
