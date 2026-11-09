
import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Un espacio pensado hasta el último detalle. La sensibilidad estética y la atención a cada necesidad hicieron que el proceso fuera una experiencia increíble.",
    author: "Cliente particular",
    project: "Proyecto residencial",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400&auto=format&fit=crop",
  },
  {
    quote:
      "Logramos transformar nuestras ideas en un espacio con identidad propia, donde cada elemento encuentra su lugar y tiene sentido.",
    author: "Cliente particular",
    project: "Diseño de interiores",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400&auto=format&fit=crop",
  },
  {
    quote:
      "El resultado superó nuestras expectativas. Fue un proceso de trabajo cercano, creativo y con una mirada integral.",
    author: "Cliente particular",
    project: "Proyecto de arquitectura",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1400&auto=format&fit=crop",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const changeTestimonial = (direction) => {
    setActive((prev) =>
      (prev + direction + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__header">
        <span>VOCES QUE NOS ACOMPAÑAN</span>
        <span>05 — TESTIMONIOS</span>
      </div>

      <div className="testimonials__heading">
        <h2>
          Las experiencias
          <br />
          también <em>hablan.</em>
        </h2>
        <p>
          Cada proyecto comienza con una idea y se transforma
          en una experiencia compartida.
        </p>
      </div>

      <div className="testimonials__layout">
        <div className="testimonials__visual">
          <img
            key={current.image}
            src={current.image}
            alt={`Imagen ilustrativa de ${current.project}`}
          />
          <span className="testimonials__visual-caption">
            LUCERO ESTUDIO · MENDOZA
          </span>
        </div>

        <div className="testimonials__review">
          <span className="testimonials__quote-mark">“</span>

          <span className="testimonials__eyebrow">
            EXPERIENCIA {String(active + 1).padStart(2, "0")}
          </span>

          <blockquote key={active}>
            {current.quote}
          </blockquote>

          <div className="testimonials__person">
            <span className="testimonials__person-line" />
            <div>
              <strong>{current.author}</strong>
              <span>{current.project}</span>
            </div>
          </div>

          <div className="testimonials__navigation">
            <div className="testimonials__progress">
              {testimonials.map((item, index) => (
                <button
                  key={item.project}
                  type="button"
                  aria-label={`Ver testimonio ${index + 1}`}
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>

            <div className="testimonials__arrows">
              <button
                type="button"
                onClick={() => changeTestimonial(-1)}
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => changeTestimonial(1)}
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials__footer">
        <span>ARQUITECTURA · PAISAJISMO · DISEÑO</span>
        <span>01 / 03</span>
      </div>
    </section>
  );
}

export default Testimonials;
