import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoApp from "../images/logo_app.png";

function EnergyPath() {
  const [steps, setSteps] = useState([]);
  const [visibleSteps, setVisibleSteps] = useState(1); //Aparece solo un primer paso al iniciar

  useEffect(() => {
    fetch("/frases.json")
      .then((res) => res.json())
      .then((data) => setSteps(data));
  }, []);

  const handleNextStep = () => {
    setVisibleSteps(visibleSteps + 1);
  };

  return (
    <div className="energy__container">
      {steps.slice(0, visibleSteps).map((step, index) => (
        <div className="path__step" key={index}>
          <div className="step__line">
            <span className="step__dot"></span>
          </div>
          <div className="step__content">
            <img
              src={step.image}
              alt="Imagen del paso"
              className="step__image"
            />
            <p className="step__text">{step.text}</p>
          </div>
        </div>
      ))}
      {visibleSteps < steps.length && (
        <div className="step__button">
          <button className="button__cta" onClick={handleNextStep}>
            Sigue caminando
          </button>
        </div>
      )}
      <div className="step__logo-link">
        <Link to="/">
          <img src={logoApp} alt="Volver a inicio" className="logo__image" />
        </Link>
      </div>
    </div>
  );
}
export default EnergyPath;
