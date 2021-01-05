import React, {lazy} from 'react';
import ProjectCard from '../../projectCard/ProjectCard';
import styled from 'styled-components';
import {ProjectProvider} from '../../projectCard/ProjectContext';

import frontend from '../../../assets/images/projects/frontEnd.webp';
import imageScraper from '../../../assets/images/projects/imageScraper.webp';
import expensify from '../../../assets/images/projects/expensify.webp';
import indecision from '../../../assets/images/projects/indecision.webp';
import jobSearch from '../../../assets/images/projects/jobSearch.webp';

const ImageModal = lazy(() => import('../../projectCard/ImageModal'));


const StyledPortfolio = styled.div`
.projects-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 3rem;
  @media (max-width: 767px) {
        grid-template-columns: 1fr;
        row-gap: 3rem;
    }
}
`

const Portfolio = () => {

    const projects = [
        {
            projectName: 'Website image scraper',
            projectDescription: 'A command line tool that will scrape all images from a given URL and create an HTML page displaying all the fetched images',
            projectImage: imageScraper,
            projectSkills: ['NodeJs', 'JavaScript', 'CSS', 'HTML'],
            projectLink: 'https://github.com/Maximilianix/image-scrape'
        },
        {
            projectName: 'React expensify app',
            projectDescription: 'Expensify app practice project with ReactJs. Fully responsive App, add and remove expenses with description and dates for private use',
            projectImage: expensify,
            projectSkills: ['HTML', 'SCSS', 'ReactJs','Webpack', 'Express', 'Redux'],
            projectLink: 'https://github.com/Maximilianix/react-course-expensify-app'
        },
        {
            projectName: 'Indecision app',
            projectDescription: 'React based application for storing tasks in browser\'s local storage.',
            projectImage: indecision,
            projectSkills: ['HTML', 'SCSS', 'ReactJs','Webpack'],
            projectLink: 'https://github.com/Maximilianix/indecision-app'
        },
        {
            projectName: 'Front-end responsive page',
            projectDescription: 'Fully responsive html css page',
            projectImage: frontend,
            projectSkills: ['HTML', 'CSS'],
            projectLink: 'https://github.com/Maximilianix/FrontEnd-Responsoive-Page'
        },
        {
            projectName: 'Job Search simple page',
            projectDescription: 'Responsive front-end application with api connection to "Adzuna" with simple job searching engine.',
            projectImage: jobSearch,
            projectSkills: ['SCSS', 'HTML', 'JavaScript', 'Axios'],
            projectLink: 'https://github.com/Maximilianix/Job-Search-simple-page'
        },
    ];
    

    return(
        <StyledPortfolio className="portfolio">
            <h2>Projects</h2>
            <ProjectProvider>
                <div className="projects-wrap">
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.projectName}
                            projectName={project.projectName }
                            projectDescription={project.projectDescription }
                            projectImage={project.projectImage}
                            projectSkills={project.projectSkills}
                            projectLink={project.projectLink}
                        />
                    ))
                }
                <ImageModal />
                </div>
            </ProjectProvider>
        </StyledPortfolio>
    )
};

export default Portfolio;