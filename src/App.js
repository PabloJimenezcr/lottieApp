import React from "react";
// Reproductor de Lottie
import { Player } from "@lottiefiles/react-lottie-player";
// archivo JSON animacion
import animacion from "./animacion.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* encabezado */}
      <header className="App-header">
        <h1>ProfeFrank</h1>
        {/* menú */}
        <nav>
          <ul>
            <li>
              <a href="#opcion1">Inicio</a>
            </li>
            <li>
              <a href="#opcion2">Nosotros</a>
            </li>
            <li>
              <a href="#opcion3">Servicios</a>
            </li>
            <li>
              <a href="#opcion3">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* contenido principal */}
      <div className="main-content">
        {/* columna izquierda */}
        <div className="left-column">
          <h1>Animación JSON</h1>
          <p>
            Un Lottie es un formato de archivo de animación basado en JSON que
            le permite enviar animaciones a cualquier plataforma de forma tan
            sencilla como enviar activos estáticos. Son archivos pequeños que
            funcionan en cualquier dispositivo y pueden agrandarse o reducirse
            sin pixelación. LottieFiles le permite crear, editar, probar,
            colaborar y enviar un Lottie de la forma más sencilla posible.
          </p>
          <a
            href="https://heyzine.com/flip-book/8a2843a79f.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Entrar</button>
          </a>
        </div>

        {/* columna derecha */}
        <div className="right-column">
          <Player autoplay loop src={animacion} className="lottie-player" />
        </div>
      </div>
    </div>
  );
}

export default App;
