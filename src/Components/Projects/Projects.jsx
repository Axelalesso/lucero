
import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Arquitectura residencial",
    category: "Arquitectura",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200&auto=format&fit=crop",
    description:
      "Espacios concebidos desde la relación entre arquitectura, materialidad y entorno. Una búsqueda de equilibrio entre funcionalidad e identidad.",
    number: "01",
  },
  {
    id: 2,
    title: "Paisaje y naturaleza",
    category: "Paisajismo",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1200&auto=format&fit=crop",
    description:
      "El paisaje como parte de la experiencia arquitectónica. Vegetación, recorridos y espacios exteriores pensados en diálogo con el entorno.",
    number: "02",
  },
  {
    id: 3,
    title: "Diseño de iluminación",
    category: "Iluminación",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200&auto=format&fit=crop",
    description:
      "La luz transforma la percepción de los espacios, destaca sus texturas y construye distintas atmósferas a lo largo del día.",
    number: "03",
  },
  {
    id: 4,
    title: "Interiorismo contemporáneo",
    category: "Interiorismo",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200&auto=format&fit=crop",
    description:
      "Interiores que integran materialidad, mobiliario y luz para crear ambientes funcionales, sensibles y con identidad propia.",
    number: "04",
  },
  {
    id: 5,
    title: "Arquitectura y materialidad",
    category: "Arquitectura",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=85&w=1200&auto=format&fit=crop",
    description:
      "Una exploración de formas, texturas y materiales para construir espacios que dialogan con su contexto.",
    number: "05",
  },
  {
    id: 6,
    title: "Espacios exteriores",
    category: "Paisajismo",
    location: "Mendoza, Argentina",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
    description:
      "La continuidad entre interior y exterior permite ampliar la experiencia de habitar y conectar la arquitectura con la naturaleza.",
    number: "06",
  },
];

const filters = [
  "Todos",
  "Arquitectura",
  "Paisajismo",
  "Iluminación",
  "Interiorismo",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__intro">
            <span className="projects__eyebrow">
              NUESTRO TRABAJO · 01 — 06
            </span>

            <h2>
              Ideas que se
              <br />
              <em>convierten en espacios.</em>
            </h2>
          </div>

          <p className="projects__description">
            Cada proyecto es una oportunidad para explorar
            nuevas formas de habitar, combinar disciplinas
            y transformar el entorno.
          </p>
        </div>

        <div className="projects__filters">
          <span className="projects__filter-label">
            EXPLORAR POR DISCIPLINA
          </span>

          <div className="projects__filter-list">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`projects__filter ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
                {activeFilter === filter && (
                  <span className="projects__filter-dot" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`projects__card projects__card--${index + 1}`}
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <button
                className="projects__card-button"
                type="button"
                aria-label={`Ver ${project.title}`}
              >
                <div className="projects__image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                    loading="lazy"
                  />

                  <div className="projects__image-overlay" />

                  <span className="projects__number">
                    {project.number}
                  </span>

                  <span className="projects__view">
                    <span>VER PROYECTO</span>
                    <span className="projects__view-arrow">↗</span>
                  </span>
                </div>

                <div className="projects__card-info">
                  <div>
                    <span className="projects__category">
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                    <span className="projects__location">
                      {project.location}
                    </span>
                  </div>

                  <span className="projects__card-arrow">↗</span>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <span>
            MOSTRANDO {filteredProjects.length.toString().padStart(2, "0")}{" "}
            PROYECTOS
          </span>
          <span className="projects__footer-line" />
          <span>LUCERO ESTUDIO DE ARQUITECTURA</span>
        </div>
      </div>

      {selectedProject && (
        <div
          className="projects__modal"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="projects__modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <button
              className="projects__modal-close"
              onClick={() => setSelectedProject(null)}
              type="button"
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="projects__modal-image">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />
            </div>

            <div className="projects__modal-info">
              <span className="projects__category">
                {selectedProject.category} · {selectedProject.number}
              </span>

              <h3>{selectedProject.title}</h3>

              <span className="projects__location">
                {selectedProject.location}
              </span>

              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
