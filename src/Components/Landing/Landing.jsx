import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import { FaWhatsapp } from "react-icons/fa";
import Projects from "../Projects/Projects";
import Atelier from "../Atelier/Atelier";
import Workshops from "../Workshops/Workshops";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

export default function Landing() {
  return (
      <div>
      <a
        href="https://wa.me/5492615877722"
        className="whatsapp-float"
        target="_blank"
      >
        <FaWhatsapp />
      </a>


        <Hero/>

        <About/>

        <Services/>

        <Projects/>

        <Atelier />

        <Workshops />

        <Testimonials />

        <Contact />

    </div>

    
  );
}