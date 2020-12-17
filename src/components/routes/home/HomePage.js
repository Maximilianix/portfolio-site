import React, {lazy} from 'react';
import styled from 'styled-components';

const SkillBoxes = lazy(() => import('../../skillBox/SkillBoxes'));

const StyledHome = styled.div`
p{
    margin:1rem 0;
}
`


const HomePage = () => {

    const yearsOfExperience = (year) => {
        let years = new Date( Date.now() - year);
        return Math.abs(years.getUTCFullYear() - year);
    }

    return(
        <StyledHome className="home">
            <h2>About Me</h2>
            <p>
                Hi, i'm Maxim.
            </p>
            <p>
                Dedicated and efficient full stack developer with over {yearsOfExperience(2015)} years of front-end experience
                and {yearsOfExperience(2017)}+ in back-end, designing, developing, 
                managing responsive sites and internal frameworks with "mobile-first" approach.
            </p>
            <p>
                A fast learner with good coding skills, analytical thinking, attention to details, 
                patience, accuracy, and time management.
                Have excellent communication skills as well as professional ethics.<br/>
                Certified for both frontend & backend technologies from
                <a href="https://www.hackeru.co.il/" style={{ textDecoration: 'underline' }}> HackerU </a> 
                school.
            </p>
            <p>
                I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. 
                I prefer to keep learning, continue challenging myself, and do interesting things that matter.
            </p>
            <h2>My Skills</h2>
            <SkillBoxes />
        </StyledHome>
    )
};

export default HomePage;