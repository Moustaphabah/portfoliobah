
import Button from "../../config/Button/Button";
import "./header.css";

const Menu = () => (
  <nav className="Menu">
    <p className="portfolio">Portfolio</p>
   <ul className="Menu__list">
  <li>
    <a href="#about" className="btn btn-border-reveal">À propos</a>
  </li>
  <li>
    <a href="#projects" className="btn btn-border-reveal">Projets</a>
  </li>
  <li>
    <a href="#SkillsCarousel" className="btn btn-border-reveal">Compétences</a>
  </li>
 
</ul>

    <Button className="contact-button" title="Contact" onClick={() => (window.document.location.hash = "#contact") }>
       Contact
    </Button>
  </nav>
);

export default Menu;
