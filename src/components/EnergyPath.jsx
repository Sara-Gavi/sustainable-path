function EnergyPath() {
  return (
    <div className="energy__container">
      <div className="path__step">
        <div className="step__line">
          <span className="step__dot"></span>
        </div>
        <div className="step__content">
          <img
            src="/images/arboles.jpg"
            alt="Naturaleza conectada"
            className="step__image"
          />
          <p className="step__text">
            Los árboles se comunican entre sí a través de sus raíces,
            compartiendo nutrientes e información. La naturaleza lleva miles de
            años trabajando en red.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnergyPath;
