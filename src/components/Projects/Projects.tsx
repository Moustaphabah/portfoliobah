
import './projects.css';
import projects from "../../data/projects"
import ProjectCard from '../projectCart/ProjectCard';



export default function Projects(){
	return (
		<section id="projects" className="projects-section">
			<h2 className="projects-title">Projets</h2>
			<p className='projects-contenu'> je Développeur web passionné, j’ai créé et optimisé des sites React performants et responsives, en mettant l’accent sur le débogage,
				 les tests, le SEO et l’accessibilité. J’ai également conçu un portfolio professionnel avec Vite pour présenter mes projets et compétences, garantissant une expérience utilisateur
				  optimale sur tous les appareils.</p>
			<div className="projects-grid">
				{projects.map((p) => (
					<ProjectCard
						key={p.id}
						title={p.title}
						description={p.description}
						image={p.image}
						tech={p.tech}
						href={p.live || p.github || '#'}
						btnText='Voir'
						hrefGithub={p.hrefGithub || '#'}
					/>
				))}
			</div>
		</section>
	);
}
