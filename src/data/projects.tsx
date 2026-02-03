import projectTrois from '../assets/proj-trois.png';
import projetDeux from '../assets/proj-deux.png';
import projetUn from '../assets/proj-un.png';
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { SiLighthouse } from "react-icons/si";
import { SiVite } from "react-icons/si";

const projects = [
  {
    id: 'proj-1',
    title: 'Développement et débogage d’un site one-page avec React',
    description: `Au cours de ce projet, j’ai appris à analyser et améliorer un site web one-page en
    utilisant React. J’ai utilisé les Chrome DevTools et React Developer Tools pour identifier 
    et corriger les bugs, ainsi que pour comprendre le comportement du code JavaScript. 
    J’ai également développé des tests unitaires et fonctionnels pour assurer le bon fonctionnement du site,
     consignés dans un cahier de recette.
    Pour la gestion du projet, j’ai travaillé avec Yarn pour gérer les dépendances et Node.js
    pour exécuter le code JavaScript côté serveur. Enfin, j’ai appliqué les bonnes
    pratiques de versionnage avec GitHub et utilisé Visual Studio Code comme environnement
    de développement pour coder et déboguer efficacement le site.`,
    image: projetUn,
    tech: [<FaGithub  />, <FaReact />, <FaCss3Alt />],
    github: 'https://moustaphabah.github.io/siteEvenementiel/',
    live:''
  },
  {
    id: 'proj-2',
    title: 'Optimisation du référencement et de la performance d’un site web',
    description: `Dans ce projet, j’ai appris à analyser et améliorer la performance, l’accessibilité et le référencement d’un site web. 
    J’ai commencé par identifier les problèmes de chargement et de SEO, puis j’ai proposé et appliqué des recommandations pour optimiser la vitesse,
     la structure du code et le référencement.
    J’ai utilisé des outils comme Lighthouse et Wave pour évaluer l’efficacité des améliorations, et j’ai produit un rapport comparatif avant et après, illustrant les résultats et expliquant l’impact des changements sur la performance,
     l’accessibilité et le référencement`,
    image: projetDeux,
    tech: [<FaHtml5 size={70} />, <FaCss3Alt />, <SiLighthouse />],
    github: 'https://moustaphabah.github.io/nina/',
    live:''
  },
  {
    id: 'proj-3',
    title: 'Création et déploiement d’un portfolio professionnel et responsive avec React et Vite',
    description: `Dans ce projet, j’ai consolidé mes compétences en développement web moderne en réalisant un portfolio complet, professionnel et responsive en utilisant React avec Vite. J’ai structuré le site pour présenter efficacement mes projets, compétences et parcours, tout en garantissant une expérience utilisateur optimale sur différents appareils.
  Ce portfolio met en valeur mon profil auprès de recruteurs et clients, et démontre mes capacités à créer un site fonctionnel, esthétique et performant. J’ai également préparé une présentation orale structurée pour présenter mon travail de manière claire et professionnelle.`,
    image: projectTrois,
    tech: [<BiLogoTypescript />, <SiVite />, <FaReact />, <FaCss3Alt />, <FaGithub />],
    github: '',
    live:''
  }
];

export default projects;
