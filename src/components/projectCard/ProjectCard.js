import React from 'react';
import './_project-card.scss';

const ProjectCard = ({projectName,projectDescription,projectImage}) => (
    <div className="project-card">
        <h3>{projectName}</h3>
        <div className="project-image">
            <img src={projectImage} alt={projectName} width="100%" height="100%"/>
        </div>
        <p>{projectDescription }</p>
    </div>
);

export default ProjectCard;


