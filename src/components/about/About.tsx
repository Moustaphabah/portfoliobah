
import photo from "../../assets/photo_bah.webp";
import "./about.css";

function About(){
  return (
    <section className="about-section about" id='about'>
      <div className="about-profile">
        <div className="photo-container">
          <img className="about-photo" src={photo} alt="Photo de Bah" height={400} width={600} loading="lazy" />
        </div>
        <div className="about-bio">
          <h1 className="a-propos">À propos</h1>
          <p className="description">Passionné par le design &amp; le code</p>
          <p>
            Développeur full-stack avec une passion pour créer des expériences
            utilisateur exceptionnelles. Je combine créativité et expertise
            technique pour transformer vos idées en réalité digitale.

            Spécialisé dans les technologies modernes comme React, TypeScript
            et Node.js, je m'efforce de créer des applications performantes,
            accessibles et esthétiquement plaisantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
