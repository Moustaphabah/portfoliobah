import React from 'react';
import './projects.css';
import projects from "../../data/projects"
import ProjectCard from '../projectCart/ProjectCard';



export default function Projects(): JSX.Element {
	return (
		<section id="projects" className="projects-section">
			<h2 className="projects-title">Projets</h2>
			<p className='projects-contenu'> je plusieur projet dans ce portfolio</p>
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
					/>
				))}
			</div>
		</section>
	);
}
