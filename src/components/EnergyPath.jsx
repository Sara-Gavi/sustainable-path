import { useEffect, useState } from "react";

function EnergyPath() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/frases.json")
      .then((res) => res.json())
      .then((data) => setSteps(data));
  }, []);

  return (
    <div className="energy__container">
      {steps.map((step, index) => (
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
    </div>
  );
}
export default EnergyPath;
