
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <span className="nav-logo-title">LUCERO</span>
          <span className="nav-logo-subtitle">
            ESTUDIO DE ARQUITECTURA
          </span>
        </Link>
      </div>

      {/* HAMBURGUESA */}
      <button
        className="menu-hamburguesa"
        onClick={toggleMenu}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* NAVEGACIÓN */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#estudio" onClick={closeMenu}>El estudio</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
        <a href="#atelier" onClick={closeMenu}>Lucero Atelier</a>
        <a href="#workshops" onClick={closeMenu}>Workshops</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>

        <div className="nav-social-mobile">
          <a
            href="https://www.instagram.com/lucero.estudiodearquitectura/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* REDES DESKTOP */}
      <div className="nav-social">
        <a
          href="https://www.instagram.com/lucero.estudiodearquitectura/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}
