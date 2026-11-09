
import React from "react";
import "./Workshops.css";

const workshops = [
  {
    number: "01",
    category: "ILUMINACIÓN",
    title: "El arte de iluminar",
    description:
      "Descubrir cómo la luz transforma los espacios y crea nuevas sensaciones.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=85&w=1000&auto=format&fit=crop",
  },
  {
    number: "02",
    category: "PAISAJISMO",
    title: "Habitar el paisaje",
    description:
      "Naturaleza, diseño y creatividad para conectar con los espacios exteriores.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=85&w=1000&auto=format&fit=crop",
  },
  {
    number: "03",
    category: "ARTE & DISEÑO",
    title: "Crear con las manos",
    description:
      "Experimentar con materiales, colores y técnicas para dar vida a nuevas ideas.",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=85&w=1000&auto=format&fit=crop",
  },
];

function Workshops() {
  return (
    <section className="workshops" id="workshops">
      <div className="workshops__top">
        <span className="workshops__label">
          LUCERO ATELIER — EXPERIENCIAS CREATIVAS
        </span>
        <span className="workshops__index">04 / 06</span>
      </div>

      <div className="workshops__intro">
        <h2>
          Aprender.
          <br />
          Experimentar.
          <br />
          <span>Crear.</span>
        </h2>

        <div className="workshops__intro-side">
          <span className="workshops__asterisk">✳</span>
          <p>
            Encuentros para explorar ideas, descubrir nuevas formas de
            expresión y conectar con el universo creativo.
          </p>
          <span className="workshops__location">
            MENDOZA · ARGENTINA
          </span>
        </div>
      </div>

      <div className="workshops__grid">
        {workshops.map((item) => (
          <article className="workshops__card" key={item.number}>
            <div className="workshops__photo">
              <img src={item.image} alt={item.title} />
              <span className="workshops__card-number">
                {item.number}
              </span>
              <span className="workshops__card-arrow">↗</span>
            </div>

            <div className="workshops__card-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="workshops__footer">
        <div>
          <span className="workshops__footer-small">
            HAY MUCHAS FORMAS DE CREAR
          </span>
          <h3>
            La próxima experiencia
            <br />
            <em>puede ser la tuya.</em>
          </h3>
        </div>

        <a
          href="https://www.instagram.com/lucer.oatelier/"
          target="_blank"
          rel="noreferrer"
          className="workshops__button"
        >
          DESCUBRIR TALLERES <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Workshops;

