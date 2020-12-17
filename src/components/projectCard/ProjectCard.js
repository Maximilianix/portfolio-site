import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 8px;
    box-shadow: $box-shadow;
    padding: 1rem;
    display: grid;
    row-gap: 1rem;
`

const ProjectCard = ({projectName,projectDescription,projectImage}) => (
    <StyledCard className="project-card">
        <h3>{projectName}</h3>
        <div className="project-image">
            <img src={projectImage} alt={projectName} width="30%"/>
        </div>
        <p>{projectDescription }</p>
    </StyledCard>
);

export default ProjectCard;


