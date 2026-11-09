import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const areas = [
  {
    id: "arquitectura",
    number: "01",
    title: "Arquitectura",
    description:
      "Creamos espacios con identidad, funcionalidad y sensibilidad estética. Cada proyecto nace de comprender las necesidades de quienes lo habitan.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Arquitectura residencial contemporánea",
  },
  {
    id: "paisajismo",
    number: "02",
    title: "Paisajismo",
    description:
      "Integramos naturaleza y arquitectura para crear paisajes que dialogan con su entorno y transforman la experiencia de habitar.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Espacio exterior integrado con naturaleza",
  },
  {
    id: "iluminacion",
    number: "03",
    title: "Iluminación",
    description:
      "Exploramos la luz como elemento esencial del espacio. Diseñamos atmósferas que generan sensaciones y resaltan cada detalle.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Interior con iluminación arquitectónica",
  },
  {
    id: "diseno",
    number: "04",
    title: "Diseño",
    description:
      "Incorporamos arte, objetos y piezas especiales que aportan personalidad y construyen una identidad propia en cada ambiente.",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Interiorismo y objetos de diseño",
  },
];

function About() {
  const [activeArea, setActiveArea] = useState(areas[0]);
  const [showElena, setShowElena] = useState(false);
  const [years, setYears] = useState(0);
  const counterRef = useRef(null);
  const [counterVisible, setCounterVisible] = useState(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!counterVisible) return;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setYears(current);

      if (current >= 20) {
        clearInterval(interval);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [counterVisible]);

  return (
    <section className="about" id="estudio">
      <div className="about__container">

        {/* ENCABEZADO */}
        <div className="about__header">
          <span className="about__eyebrow">
            LUCERO ESTUDIO DE ARQUITECTURA
          </span>

          <h2 className="about__heading">
            Más que diseñar espacios,
            <br />
            <em>creamos experiencias.</em>
          </h2>

          <p className="about__intro">
            Arquitectura que se transforma en paisaje, luz,
            arte y objetos para habitar.
          </p>
        </div>

        {/* ÁREAS INTERACTIVAS */}
        <div className="about__explorer">

          <div className="about__visual">
            <img
              key={activeArea.image}
              src={activeArea.image}
              alt={activeArea.imageAlt}
              className="about__main-image"
            />

            <div className="about__image-caption">
              <span>{activeArea.number} / 04</span>
              <span>{activeArea.title}</span>
            </div>

            <div className="about__image-label">
              EXPLORÁ NUESTRO UNIVERSO
            </div>
          </div>

          <div className="about__areas">
            <span className="about__eyebrow">
              NUESTRA MIRADA
            </span>

            <h3>
              Un estudio,
              <br />
              <em>múltiples expresiones.</em>
            </h3>

            <p className="about__areas-intro">
              Seleccioná cada área para descubrir cómo
              entendemos y trabajamos el diseño.
            </p>

            <div className="about__tabs">
              {areas.map((area) => (
                <button
                  key={area.id}
                  className={`about__tab ${
                    activeArea.id === area.id ? "active" : ""
                  }`}
                  onClick={() => setActiveArea(area)}
                  aria-pressed={activeArea.id === area.id}
                >
                  <span className="about__tab-number">
                    {area.number}
                  </span>

                  <span className="about__tab-title">
                    {area.title}
                  </span>

                  <span className="about__tab-arrow">
                    ↗
                  </span>
                </button>
              ))}
            </div>

            <div className="about__description" key={activeArea.id}>
              <p>{activeArea.description}</p>
            </div>
          </div>
        </div>

        {/* TRAYECTORIA */}
        <div className="about__experience" ref={counterRef}>
          <div className="about__experience-number">
            {years}<span>+</span>
          </div>

          <div className="about__experience-text">
            <span className="about__eyebrow">
              EXPERIENCIA Y TRAYECTORIA
            </span>

            <h3>
              20 años explorando
              <br />
              nuevas formas de habitar.
            </h3>
          </div>

          <p>
            Una búsqueda constante que integra arquitectura,
            paisaje, iluminación, arte y diseño.
          </p>
        </div>

        {/* CONOCÉ A ELENA */}
        <div className="about__elena">
          <div className="about__elena-content">
            <span className="about__eyebrow">
              DETRÁS DEL ESTUDIO
            </span>

            <h3>
              Una mirada,
              <br />
              <em>una forma de crear.</em>
            </h3>

            <p>
              El estudio está dirigido por la arquitecta Elena
              Lucero, quien entiende la arquitectura como una
              búsqueda permanente y un proceso de transformación.
            </p>

            <button
              className="about__elena-button"
              onClick={() => setShowElena(!showElena)}
              aria-expanded={showElena}
            >
              {showElena ? "Ver menos" : "Conocé a Elena"}

              <span>{showElena ? "−" : "+"}</span>
            </button>

            <div
              className={`about__elena-details ${
                showElena ? "visible" : ""
              }`}
            >
              <p>
                Arquitecta graduada en 2006, cuenta con 20 años
                de trayectoria profesional y formación de
                posgrado en Diseño de Iluminación y Acústica
                Arquitectónica.
              </p>

              <p>
                Actualmente integra arquitectura, paisaje,
                iluminación, arte y diseño en una búsqueda
                creativa que continúa evolucionando.
              </p>
            </div>
          </div>

          <div className="about__elena-decoration">
            <span>L</span>
            <p>ARQUITECTURA · ARTE · DISEÑO</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;