import logoApp from "../images/logo_app.png";

function EnergyPath() {
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
