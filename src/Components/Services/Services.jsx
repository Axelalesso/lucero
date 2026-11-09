import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    id: "01",
    title: "Arquitectura",
    subtitle: "Espacios con identidad",
    description:
      "Proyectamos espacios que combinan funcionalidad, estética y sensibilidad. Cada obra nace de comprender el entorno y las necesidades de quienes la habitan.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=1800&auto=format&fit=crop",
    details: "PROYECTOS · DISEÑO RESIDENCIAL",
  },
  {
    id: "02",
    title: "Interiorismo",
    subtitle: "El arte de habitar",
    description:
      "Diseñamos interiores que expresan personalidad. Trabajamos con materiales, texturas, mobiliario y objetos para crear ambientes únicos.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=1800&auto=format&fit=crop",
    details: "INTERIORES · AMBIENTACIÓN",
  },
  {
    id: "03",
    title: "Paisajismo",
    subtitle: "Naturaleza y arquitectura",
    description:
      "Concebimos el paisaje como una extensión de la arquitectura. Diseñamos espacios exteriores que dialogan con la naturaleza y su entorno.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=90&w=1800&auto=format&fit=crop",
    details: "JARDINES · ESPACIOS EXTERIORES",
  },
  {
    id: "04",
    title: "Iluminación",
    subtitle: "Diseñar con luz",
    description:
      "Exploramos la luz como un elemento capaz de transformar la percepción de los espacios y crear atmósferas llenas de carácter.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1800&auto=format&fit=crop",
    details: "DISEÑO LUMÍNICO · ATMÓSFERAS",
  },
  {
    id: "05",
    title: "Diseño",
    subtitle: "Detalles que cuentan historias",
    description:
      "Integramos arte, objetos y piezas especiales que aportan identidad y personalidad. Una búsqueda creativa entre lo funcional y lo expresivo.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=90&w=1800&auto=format&fit=crop",
    details: "OBJETOS · ARTE · DISEÑO",
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services" id="servicios">

      {/* FONDO DECORATIVO */}
      <div className="services__noise" />

      <div className="services__container">

        {/* HEADER */}
        <header className="services__header">

          <div className="services__heading">
            <span className="services__eyebrow">
              <span className="services__eyebrow-dot" />
              EL UNIVERSO LUCERO
            </span>

            <h2>
              Cinco formas
              <br />
              de <em>crear.</em>
            </h2>
          </div>

          <div className="services__header-right">
            <p>
              Una mirada integral que conecta distintas
              disciplinas para transformar espacios,
              ideas y experiencias.
            </p>

            <span className="services__instruction">
              EXPLORÁ CADA DISCIPLINA
              <span className="services__instruction-arrow">↓</span>
            </span>
          </div>

        </header>

        {/* TARJETAS EXPANSIVAS */}
        <div className="services__accordion">

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <article
                key={service.id}
                className={`services__card ${
                  isActive ? "is-active" : ""
                }`}
                style={{
                  "--card-image": `url("${service.image}")`,
                }}
                onMouseEnter={() => setActive(index)}
              >

                {/* SUPERFICIE CLICKEABLE */}
                <button
                  type="button"
                  className="services__card-button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  aria-label={`Explorar ${service.title}`}
                />

                {/* IMAGEN */}
                <div className="services__card-image" />

                {/* OVERLAY */}
                <div className="services__card-overlay" />

                {/* NÚMERO */}
                <span className="services__card-number">
                  {service.id}
                </span>

                {/* CONTENIDO */}
                <div className="services__card-content">

                  <div className="services__card-top">
                    <span className="services__card-category">
                      DISCIPLINA {service.id}
                    </span>

                    <span className="services__card-icon">
                      ↗
                    </span>
                  </div>

                  <div className="services__card-bottom">

                    <div className="services__card-heading">
                      <span className="services__card-subtitle">
                        {service.subtitle}
                      </span>

                      <h3>{service.title}</h3>
                    </div>

                    <div className="services__card-extra">
                      <p>{service.description}</p>

                      <span className="services__card-details">
                        {service.details}
                      </span>

                      <a
                        href="#contacto"
                        className="services__card-link"
                        onClick={(event) => event.stopPropagation()}
                      >
                        HABLEMOS DE TU PROYECTO
                        <span>↗</span>
                      </a>
                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* INDICADORES */}
        <div className="services__footer">

          <div className="services__progress">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                className={`services__progress-item ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
                aria-label={`Seleccionar ${service.title}`}
                aria-current={active === index ? "true" : undefined}
              />
            ))}
          </div>

          <span className="services__counter">
            <strong>{String(active + 1).padStart(2, "0")}</strong>
            <span> / 05</span>
          </span>

          <span className="services__footer-label">
            ARQUITECTURA · PAISAJE · LUZ · ARTE · DISEÑO
          </span>

        </div>

      </div>
    </section>
  );
}

export default Services;