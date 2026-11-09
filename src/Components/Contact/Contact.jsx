
import React, { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Arquitectura",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Consulta desde la web - ${form.project}`
    );

    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nProyecto: ${form.project}\n\nMensaje:\n${form.message}`
    );

    // Reemplazar por el correo real del estudio.
    window.location.href = `mailto:correo@tudominio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__top">
        <span>LUCERO ESTUDIO DE ARQUITECTURA</span>
        <span>06 / 06 — CONTACTO</span>
      </div>

      <div className="contact__hero">
        <span className="contact__eyebrow">
          TODO COMIENZA CON UNA IDEA
        </span>

        <h2>
          Hablemos de
          <br />
          tu próximo <em>proyecto.</em>
        </h2>

        <div className="contact__hero-bottom">
          <p>
            Cada espacio tiene una historia por contar.
            Nos gustaría conocer la tuya.
          </p>
          <span className="contact__star">✳</span>
        </div>
      </div>

      <div className="contact__main">
        <div className="contact__info">
          <span className="contact__section-label">
            CONECTEMOS
          </span>

          <h3>
            Construyamos
            <br />
            algo <em>juntos.</em>
          </h3>

          <p className="contact__description">
            Contanos qué tenés en mente. Estamos para escuchar
            tus ideas y acompañarte en cada etapa del proceso.
          </p>

          <div className="contact__links">
            <a
              href="https://www.instagram.com/lucero.estudiodearquitectura/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span>
                <small>SEGUINOS EN INSTAGRAM</small>
                @lucero.estudiodearquitectura
              </span>
              <FaArrowRight className="contact__link-arrow" />
            </a>

            <a
              href="https://www.instagram.com/lucer.oatelier/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span>
                <small>DESCUBRÍ NUESTRO ATELIER</small>
                @lucer.oatelier
              </span>
              <FaArrowRight className="contact__link-arrow" />
            </a>
          </div>

          <div className="contact__location">
            <span>UBICACIÓN</span>
            <p>Mendoza, Argentina</p>
          </div>
        </div>

        <div className="contact__form-container">
          <div className="contact__form-heading">
            <span>01 — INICIEMOS UNA CONVERSACIÓN</span>
            <p>Completá tus datos y contanos sobre tu proyecto.</p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="contact-name">TU NOMBRE</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="¿Cómo te llamás?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">TU EMAIL</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-project">TIPO DE PROYECTO</label>
              <select
                id="contact-project"
                name="project"
                value={form.project}
                onChange={handleChange}
              >
                <option>Arquitectura</option>
                <option>Interiorismo</option>
                <option>Paisajismo</option>
                <option>Iluminación</option>
                <option>Diseño</option>
                <option>Atelier / Talleres</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">TU MENSAJE</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Contanos un poco sobre tu idea..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact__submit" type="submit">
              ENVIAR CONSULTA
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      <footer className="contact__footer">
        <div className="contact__brand">
          <h3>LUCERO<span>.</span></h3>
          <p>ESTUDIO DE ARQUITECTURA</p>
        </div>

        <div className="contact__footer-center">
          ARQUITECTURA · PAISAJISMO · ILUMINACIÓN · ARTE · DISEÑO
          <span>20 AÑOS CREANDO ESPACIOS Y TRANSFORMANDO IDEAS.</span>
        </div>

        <a
          href="#inicio"
          className="contact__back-top"
          aria-label="Volver al inicio"
        >
          <FaArrowUp />
        </a>
      </footer>
    </section>
  );
}

export default Contact;
