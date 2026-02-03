import React from 'react';
import Button from "../../config/Button/Button";
import "./header.css";

const Menu = (): JSX.Element => (
  <nav className="Menu">
    <p className="portfolio">Portfolio</p>
    <ul className="Menu__list">
      <li>
        <a href="#accueil">Accueil</a>
      </li>
      <li>
        <a href="#about">À propos
        </a>
      </li>
      <li>
        <a href="#projects">Projets</a>
      </li>
      <li>
        <a href="#compétences">Compétences</a>
        
      </li>
      <li>
        <a href="#contact">Contact</a>
        
      </li>
    </ul>
    <Button className="contact-button" title="Contact" onClick={() => (window.document.location.hash = "#contact") }>
       Contact
    </Button>
  </nav>
);

export default Menu;
