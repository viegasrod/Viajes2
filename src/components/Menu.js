import React from "react";
import "./Menu.css"; // Puedes agregar estilos específicos si es necesario.

const Menu = () => {
  return (
    <header className="header">
      <div className="logo">VuelosLatinos</div>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/cruceros">Cruceros</a>
        <a href="/autos">Alquiler de Autos</a>
        <a href="/destinos">Destinos</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Menu;
