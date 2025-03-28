import logoApp from "../images/logo_app.png";
import { Link } from "react-router-dom";

function Landing() {
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
            ¿Quieres conocer el camino de la energía?
          </p>
          <div className="content__button">
            <Link to="/camino" className="button__cta">
              Descubre más
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Landing;
