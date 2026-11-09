
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__background" />

      <div className="hero__overlay" />

    

      <div className="hero__content">
        <p className="hero__eyebrow">
          MENDOZA, ARGENTINA · ARQUITECTURA DE AUTOR
        </p>

        <h1 className="hero__title">
          Arquitectura que
          <br />
          se transforma en paisaje,
          <br />
          luz, arte y objetos para{" "}
          <em>habitar.</em>
        </h1>

        <span className="hero__accent" />

        <p className="hero__services">
          ARQUITECTURA <span>·</span> PAISAJISMO <span>·</span>{" "}
          ILUMINACIÓN <span>·</span> DISEÑO
        </p>

        <a href="#estudio" className="hero__button">
          <span>Conocé nuestro estudio</span>
          <span className="hero__button-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <a href="#estudio" className="hero__scroll">
        <span className="hero__scroll-icon" aria-hidden="true">
          ↓
        </span>
        <span>DESLIZÁ</span>
      </a>
    </section>
  );
};

export default Hero;
