import React from "react";
import './footer.css';
import { AiOutlineArrowUp } from "react-icons/ai";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export function Component() {
  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="Portfolio"
            src=""
            alt="Portfolio"
            name="Portfolio"
          />
          <FooterLinkGroup className="lienFooter">
            <FooterLink href="#">Projets</FooterLink>
            <FooterLink href="#">À propos</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>

        <FooterDivider />

        {/* Section Copyright + Bouton “Remonter” */}
        <div className="flex justify-center items-center gap-4">
          <FooterCopyright href="#"  year={2026} />

          {/* Bouton flèche vers le haut */}
          <button 
            onClick={scrollToTop} 
            className="scroll-top-button"
          >
            <AiOutlineArrowUp size={24} />
          </button>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
