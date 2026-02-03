import React from 'react';
import './projectCart.css';
import projectTrois from '../../assets/proj-trois.png';
import projetDeux from '../../assets/proj-deux.png';
import projetUn from '../../assets/proj-un.png';

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  btnText?: string;
  tech?: string[];
}

export default function ProjectCard({
  title = 'Titre de projet',
  description = 'Description du projet',
  image = projetUn,
  href = '#',
  btnText = 'Voir le projet',
  tech = [],
}: ProjectCardProps): JSX.Element {
  return (
    <article className="project-card">
      <a href={href} aria-label={title}>
        <img className="project-image" src={image} alt={title} />
      </a>
      <div className="project-body">
        <h3 className='project-title'>{title}</h3>
        <p>{description}</p>
        {tech && tech.length > 0 && (
          <div className="project-tech">
            {tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          <a href={href} target='_blank' rel="noopener noreferrer" className="project-btn">{btnText}</a>
        </div>
      </div>
    </article>
  );
}
