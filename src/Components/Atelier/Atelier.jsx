
import React, { useState } from "react";
import "./Atelier.css";

const pieces = [
  {
    id: 1,
    title: "Lámparas artesanales",
    category: "ILUMINACIÓN",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=85&w=1000&auto=format&fit=crop",
    description: "Piezas de iluminación creadas artesanalmente para explorar nuevas atmósferas y formas.",
  },
  {
    id: 2,
    title: "Objetos con identidad",
    category: "OBJETOS",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=85&w=1000&auto=format&fit=crop",
    description: "Objetos decorativos y piezas únicas que combinan creatividad y exploración de materiales.",
  },
  {
    id: 3,
    title: "Arte y expresión",
    category: "ARTE",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=85&w=1000&auto=format&fit=crop",
    description: "Pinturas y composiciones de técnica mixta donde conviven color, textura y expresión.",
  },
  {
    id: 4,
    title: "Experiencias creativas",
    category: "TALLERES",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=85&w=1000&auto=format&fit=crop",
    description: "Encuentros para experimentar con materiales, técnicas y nuevas formas de crear.",
  },
];

function Atelier() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="atelier" id="atelier">

      {/* PORTADA */}
      <header className="atelier-hero">
        <div className="atelier-hero__top">
          <span>LUCERO ESTUDIO PRESENTA</span>
          <span>MENDOZA · ARGENTINA</span>
        </div>

        <div className="atelier-hero__content">
          <span className="atelier-hero__eyebrow">
            UN UNIVERSO PARA EXPERIMENTAR
          </span>

          <h2>ATELIER<span>®</span></h2>

          <div className="atelier-hero__photo">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=85&w=1200&auto=format&fit=crop"
              alt="Objetos de diseño"
            />
          </div>

          <div className="atelier-hero__stamp">
            <span>HECHO</span>
            <strong>A</strong>
            <span>MANO</span>
          </div>

          <p>
            Arte, objetos y experiencias.
            Un espacio donde las ideas toman forma.
          </p>
        </div>

        <div className="atelier-hero__bottom">
          <span>ARTE · LUZ · MATERIA</span>
          <a href="#atelier-gallery">DESCUBRIR ↓</a>
        </div>
      </header>

      {/* GALERÍA */}
      <div className="atelier-gallery" id="atelier-gallery">
        <div className="atelier-gallery__heading">
          <span>01 — EL UNIVERSO ATELIER</span>
          <h2>
            Crear sin
            <br />
            <i>límites.</i>
          </h2>
        </div>

        <div className="atelier-gallery__grid">
          {pieces.map((piece, index) => (
            <button
              key={piece.id}
              type="button"
              className={`atelier-piece atelier-piece--${index + 1}`}
              onClick={() => setSelected(piece)}
            >
              <div className="atelier-piece__image">
                <img src={piece.image} alt={piece.title} loading="lazy" />
                <span>0{piece.id}</span>
                <b>↗</b>
              </div>

              <div className="atelier-piece__info">
                <span>{piece.category}</span>
                <h3>{piece.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* TALLERES */}
      <div className="atelier-workshop">
        <div className="atelier-workshop__image">
          <img
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=85&w=1200&auto=format&fit=crop"
            alt="Espacio creativo"
            loading="lazy"
          />
        </div>

        <div className="atelier-workshop__content">
          <span>02 — EXPERIENCIAS</span>
          <h2>
            Aprender.
            <br />
            <i>Experimentar.</i>
            <br />
            Crear.
          </h2>

          <p>
            Talleres y encuentros para explorar materiales,
            compartir conocimientos y descubrir nuevas formas
            de expresión.
          </p>

          <a
            href="https://www.instagram.com/lucer.oatelier/"
            target="_blank"
            rel="noreferrer"
          >
            CONOCÉ LOS TALLERES ↗
          </a>
        </div>
      </div>

      {/* CIERRE */}
      <footer className="atelier-footer">
        <span>LUCERO ATELIER</span>
        <h2>
          Lo cotidiano
          <br />
          <i>puede ser extraordinario.</i>
        </h2>

        <a
          href="https://www.instagram.com/lucer.oatelier/"
          target="_blank"
          rel="noreferrer"
        >
          @LUCER.OATELIER ↗
        </a>
      </footer>

      {/* DETALLE */}
      {selected && (
        <div
          className="atelier-modal"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="atelier-modal__content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <img src={selected.image} alt={selected.title} />

            <div>
              <span>{selected.category}</span>
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <a
                href="https://www.instagram.com/lucer.oatelier/"
                target="_blank"
                rel="noreferrer"
              >
                CONSULTAR POR INSTAGRAM ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Atelier;
