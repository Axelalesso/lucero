
import React, { useState } from "react";
import {
  FaInstagram,
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
    website: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // Actualizar campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  // Enviar consulta
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No pudimos enviar tu consulta."
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        project: "Arquitectura",
        message: "",
        website: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contacto">

      {/* ENCABEZADO */}
      <div className="contact__top">
        <span>LUCERO ESTUDIO DE ARQUITECTURA</span>
        <span>06 / 06 — CONTACTO</span>
      </div>

      {/* HERO */}
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

      {/* CONTENIDO PRINCIPAL */}
      <div className="contact__main">

        {/* INFORMACIÓN */}
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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

        {/* FORMULARIO */}
        <div className="contact__form-container">

          <div className="contact__form-heading">
            <span>01 — INICIEMOS UNA CONVERSACIÓN</span>
            <p>
              Completá tus datos y contanos sobre tu proyecto.
            </p>
          </div>

          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >

            {/* CAMPO ANTI-SPAM */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="contact__honeypot"
            />

            {/* NOMBRE */}
            <div className="contact__field">
              <label htmlFor="contact-name">
                TU NOMBRE
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="¿Cómo te llamás?"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="contact__field">
              <label htmlFor="contact-email">
                TU EMAIL
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
                required
              />
            </div>

            {/* TIPO DE PROYECTO */}
            <div className="contact__field">
              <label htmlFor="contact-project">
                TIPO DE PROYECTO
              </label>

              <select
                id="contact-project"
                name="project"
                value={form.project}
                onChange={handleChange}
                required
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

            {/* MENSAJE */}
            <div className="contact__field">
              <label htmlFor="contact-message">
                TU MENSAJE
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Contanos un poco sobre tu idea..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                maxLength={3000}
                required
              />
            </div>

            {/* BOTÓN */}
            <button
              className="contact__submit"
              type="submit"
              disabled={submitting}
            >
              {submitting
                ? "ENVIANDO..."
                : "ENVIAR CONSULTA"}

              {!submitting && <FaArrowRight />}
            </button>

          </form>

          {/* ESTADOS DEL FORMULARIO */}
          {status === "success" && (
            <div
              className="contact__success"
              role="status"
              aria-live="polite"
            >
              <span>✓</span>
              <p>
                ¡Gracias por escribirnos!
                Recibimos tu consulta y pronto nos pondremos
                en contacto.
              </p>
            </div>
          )}

          {status === "error" && (
            <div
              className="contact__error"
              role="alert"
            >
              <p>
                No pudimos enviar tu consulta.
                Por favor, intentá nuevamente.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <footer className="contact__footer">

        <div className="contact__brand">
          <h3>
            LUCERO<span>.</span>
          </h3>

          <p>ESTUDIO DE ARQUITECTURA</p>
        </div>

        <div className="contact__footer-center">
          ARQUITECTURA · PAISAJISMO · ILUMINACIÓN · ARTE · DISEÑO

          <span>
            20 AÑOS CREANDO ESPACIOS Y TRANSFORMANDO IDEAS.
          </span>
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

