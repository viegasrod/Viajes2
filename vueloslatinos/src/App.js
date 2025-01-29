import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <h1>Bienvenido a VuelosLatinos</h1>
        <p>Explora nuestros destinos y servicios de viajes.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
  