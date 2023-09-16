import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';

const ProjectContainer = () => {
    const projects = [
    { id: 1, name: 'Tic-Tac-Toe-Game', link: 'https://tttbonechiller.vercel.app/' },
    { id: 2, name: 'Portfolio', link: 'https://sidduportfolio.netlify.app' },
  ];

  return (
    <Element className="ProjectContainer" id="projects">
      <div className="project_centre">
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.link} rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Element>
  );
};

export default ProjectContainer;
