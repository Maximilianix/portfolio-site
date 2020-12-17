import React from 'react';
import { FaSuitcase } from 'react-icons/fa';
import styled from 'styled-components';

const StyledResume = styled.div`
  .styled-list {
    margin: 2rem 0 0 1.5rem;
    li:first-child {
      flex-direction: row;
      align-items: center;
      h3 {
        color: ${({ theme }) => theme.black};
        font-size: 1.5rem;
      }
      @media (max-width: 767px) {
        
      }
    }
    li {
      flex-direction: column;
      line-height: 25px;
      span {
        color: ${({ theme }) => theme.black};
        font-size: 0.9rem;
        display: block;
        margin-bottom: 1rem;
      }
      p::first-letter{
        font-weight: 500;
        font-size: 1.1rem
      } 
      @media (max-width: 767px) {
        h3{
          font-size: 1rem;
        }
        p{
          font-size: .9rem;
          line-height: 1.2rem;
        } 
      }
    }
  }
`

const Resume = () => (
    <StyledResume className="resume">
        <h2>Resume</h2>
        <ul className="styled-list">
            <li><FaSuitcase /> <h3>Working History</h3></li>
            <li>
                <h3>FullStack Developer - Webpals </h3> 
                <span>2019 - 2020</span>
                <p>Developing, building, and maintaining WordPress first tier sites using React.</p>
                <p> Creating widgets and plugins based on PHP,MYSQL,Reactjs and responsive front-end.</p>
                <p>Agile workflow with a team.</p>
            </li>
            <li>
                <h3>FullStack Web Developer - 888 Holdings</h3>
                <span>2017 - 2019</span>
                    <p>
                      Translated design team’s UX mockups into responsive, interactive features, using
                      HTML/CSS/JavaScript and AJAX, JSON with jQuery.
                    </p>
                    <p>
                      Executed and contributed to full-stack web development projects, with an emphasis
                      on front end features, browser manipulation, and cross-browser compatibility.
                    </p>
                    <p>Assisted in development of back end features in PHP.</p>
                    <p>
                      Troubleshooted issues affecting production, stage, and development environments
                      as requested.
                    </p>
            </li>
            <li>
                <h3>Webmaster & PHP Developer - IGMD ltd</h3>
                <span>2015 - 2017</span>
                <p>Building fully responsive, cross browser websites.</p>
                <p>Work with an established team of developers and interact with product
                managers, marketing teams and designers.</p>
                <p>Develop features for CRM using AJAX, PHP, MySql database.</p>
                <p>Working with Restful API’s.</p>
            </li>
        </ul>
    </StyledResume>
);

export default Resume;