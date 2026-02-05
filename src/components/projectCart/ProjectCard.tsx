import React from 'react';
import './projectCart.css';
import projetUn from '../../assets/proj-un.png';
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  hrefGithub?: string;
  btnText?: string;
  tech?: React.ReactNode[];
}

export default function ProjectCard({
  title = 'Titre de projet',
  description = 'Description du projet',
  image = projetUn,
  href = '#',
  hrefGithub = '#',
  btnText = 'Voir le projet',
  tech = [],
}: ProjectCardProps) {
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
            {tech.map((t, index) => (
              <span key={index} className="tech-tag">{t}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          <a href={href} target='_blank' rel="noopener noreferrer" className="project-btn">{btnText}</a>
          <a href={hrefGithub} target='_blank' rel="noopener noreferrer" className="project-btn"><FaGithub /></a>
        </div>
      </div>
    </article>
  );
}
