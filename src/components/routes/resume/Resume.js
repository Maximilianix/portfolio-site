import React from 'react';
import { FaSuitcase } from 'react-icons/fa';
import './_resume.scss';
import '../../../styles/components/_styledlist.scss';

const Resume = () => (
    <div className="resume">
        <h2>Resume</h2>
        <ul className="styled-list">
            <li><FaSuitcase /> <h3>Working History</h3></li>
            <li>
                <h3>FullStack Developer - Webpals </h3> 
                <span>20198 - 2020</span>
                <p>
                    Developing, building, and maintaining WordPress first tier sites using React.<br/>
                    Creating widgets and plugins based on PHP,MYSQL,Reactjs and responsive front-end.<br/>
                    Agile workflow with a team.<br/>
                </p>
            </li>
            <li>
                <h3>FullStack Web Developer - 888 Holdings</h3>
                <span>2017 - 2019</span>
                <p>
                    Translated design team’s UX mockups into responsive, interactive features, using
                    HTML/CSS/JavaScript and AJAX, JSON with jQuery.<br/>
                    Executed and contributed to full-stack web development projects, with an emphasis
                    on front end features, browser manipulation, and cross-browser compatibility.<br/>
                    Assisted in development of back end features in PHP.<br/>
                    Troubleshooted issues affecting production, stage, and development environments
                    as requested.
                </p>
            </li>
            <li>
                <h3>Webmaster & PHP Developer - IGMD ltd</h3>
                <span>2015 - 2017</span>
                <p>
            Building fully responsive, cross browser websites.<br/>
            Work with an established team of developers and interact with product
            managers, marketing teams and designers.<br/>
            Develop features for CRM using AJAX, PHP, MySql database.<br/>
            Working with Restful API’s.<br/>

                </p>
            </li>
        </ul>
    </div>
);

export default Resume;