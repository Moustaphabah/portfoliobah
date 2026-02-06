import "./accueil.css";
import Button from "../../config/Button/Button";

function Accueil(){
  return (
    <section className="accueil">
      <div className="contenu-accueil">
        <p className="bonjour">Bonjour, je suis</p>

         <div className="melting-text-container">
          <h1 className="melting-text" data-text="BAH Mamadou Moustapha">
            BAH Mamadou Moustapha
          </h1>
        </div>
        <p className="accueil-description">
          Je suis ravi de vous accueillir sur mon portfolio en ligne. Ici, vous
          pourrez découvrir mes projets, compétences et expériences en
          développement web. N'hésitez pas à parcourir les différentes sections
          pour en savoir plus sur moi et mon travail.
        </p>

        <div className="boutons-accueil">
          <Button
            className="bouton-voir-projets"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Voir mes projets
          </Button>

          <Button
            className="bouton-en-savoir-plus"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
