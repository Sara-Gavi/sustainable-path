import { useState, useEffect } from "react";
import logoApp from "../images/logo_app.png";

function EnergyPath() {
  const [phrases, setPhrases] = useState([]);
  const [index, setIndex] = useState(-1); //Muestro la primera pregunta

  useEffect(() => {
    fetch("/frases.json")
      .then((res) => res.json())
      .then((data) => setPhrases(data));
  }, []);

  return (
    <div>
      <header className="hero">
        <section className="hero__content">
          <img
            className="content__logo"
            src={logoApp}
            alt="Camino Sostenible"
          />
          <p className="content__slogan">
            {index === -1
              ? "¿Quieres conocer el camino de la energía?"
              : phrases[index]}
          </p>
          <div className="content__button">
            <button
              className="button__cta"
              onClick={() => {
                if (index < phrases.length - 1) {
                  setIndex(index + 1);
                } else {
                  setIndex(-1); // Reinicia a la frase inicial
                }
              }}
            >
              Descubre más
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default EnergyPath;
