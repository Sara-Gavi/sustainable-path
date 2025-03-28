import { useState, useEffect } from "react";
import logoApp from "../images/logo_app.png";

function EnergyPath() {
  const [phrases, setPhrases] = useState([]);
  const [index, setIndex] = useState(0);

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
            ¿Quieres conocer el camino de la energía verde?
          </p>
          <div className="content__button">
            <button className="button__cta">Descubre más</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default EnergyPath;
