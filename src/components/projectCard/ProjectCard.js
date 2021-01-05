import React from 'react';
import styled from 'styled-components';
import ProjectDescription from './ProjectDescription';

import ImageView from './ImageView';
import uuid from 'react-uuid';

const StyledCard = styled.div`
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: .7rem;
    display: flex;
    flex-direction: column;
    h3,p{
        margin-bottom:10px;
    }
    .btn.readMore{
        margin-top: auto;
        max-width: fit-content;
    }
    .codeLink{
        margin: 10px 0;
        text-decoration: underline;
    }
    .project-skills{
        display:flex;
        flex-wrap: wrap;
        margin: 10px 0;
        li{
            border: 1px solid ${({ theme }) => theme.lightbaseColor};
            border-radius: 1rem;
            padding:3px 7px;
            margin:5px 5px 0 0;
        }
    }
`

const ProjectCard = ({projectName,projectDescription,projectImage,projectSkills,projectLink}) => (
    <StyledCard className="project-card">
        <h3>{projectName}</h3>
        <ImageView src={projectImage} alt={projectName} />
        <ul className='project-skills'>
            {projectSkills.map(skill => (
                <li key={uuid()}>{skill}</li>
            ))}
        </ul>
        <a className="codeLink" href={projectLink} target="_blank" rel="noreferrer">Go to project.</a>
        <ProjectDescription description={projectDescription}/>
    </StyledCard>
);

export default ProjectCard;

