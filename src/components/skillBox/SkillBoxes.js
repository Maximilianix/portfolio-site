import React, { useEffect, useState } from 'react';
import SkillBox from './SkillBox';
import Trail from './Trail';
import { FaPhp, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiMysql, SiJson, SiRedux, SiWebpack, SiJquery, SiSass, SiBootstrap, SiGulp, SiWordpress } from 'react-icons/si';
import { php,javascript,nodejs,html,css,react,redux,mysql,json,webpack,jquery,sass,bootstrap,gulp,wordpress } from '../../assets/images';
import './_skillbox.scss';



//https://iconscout.com/
//https://react-icons.github.io/react-icons/

const SkillBoxes = () => {

    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true)
    }, []);

    const skills = [
        {skillName:'PHP',skillIcon:<FaPhp />,skillImage:php},
        {skillName:'JS',skillIcon:<FaJsSquare />,skillImage:javascript},
        {skillName:'NodeJS',skillIcon:<FaNodeJs />,skillImage:nodejs},
        {skillName:'HTML',skillIcon:<FaHtml5 />,skillImage:html},
        {skillName:'CSS',skillIcon:<FaCss3Alt />,skillImage:css},
        {skillName:'ReactJs',skillIcon:<FaReact />,skillImage:react},
        {skillName:'Redux',skillIcon:<SiRedux />,skillImage:redux},
        {skillName:'MySQL',skillIcon:<SiMysql />,skillImage:mysql},
        {skillName:'Json',skillIcon:<SiJson />,skillImage:json},
        {skillName:'Webpack',skillIcon:<SiWebpack />,skillImage:webpack},
        {skillName:'Jquery',skillIcon:<SiJquery />,skillImage:jquery},
        {skillName:'Sass',skillIcon:<SiSass />,skillImage:sass},
        {skillName:'Bootstrap',skillIcon:<SiBootstrap />,skillImage:bootstrap},
        {skillName:'Gulp',skillIcon:<SiGulp />,skillImage:gulp},
        {skillName:'Wordpress',skillIcon:<SiWordpress />,skillImage:wordpress},
    ];

    return (
        <div className="skill-box-wrapper">
            <Trail open={open} >
                {skills.map(skill => (
                    <SkillBox
                        key={skill.skillName}
                        skill={skill.skillName}
                        skillIcon={skill.skillIcon}
                        skillImage={skill.skillImage}
                    />
                ))}
            </Trail>
        </div>

    )
};

export default SkillBoxes;
