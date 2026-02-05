import  { useState } from "react";
import "./contact.css";
import Modal from "../../config/Button/modal";

function Contact() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSuccessOpen(true);
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <aside className="contact-info">
            <h3 className="information">Informations</h3>
            <ul>
              <li>Email : mmbb94@gmail.com</li>
              <li>Téléphone : 06 12 34 56 78</li>
              <li>Localisation : Paris, France</li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contactez-moi</h2>
            <p>
              <span>Travaillons Ensemble</span>
              <br />
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter
            </p>

            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required className="contact-input" />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required className="contact-input" />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows={5} required className="contact-textarea" />

            <button className="bouton-envoyer" type="submit">Envoyer</button>
          </form>
        </div>
      </section>

      <Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} size="sm">
        <div className="text-center-p-4">
          <h3 className="text-lg-font-semibold">Message envoyé !</h3>
          <p className="text-sm-mt-2">Merci - je vous répondrai bientôt.</p>
        </div>
      </Modal>
    </>
  );
}

export default Contact;
