import React from 'react';


const SkillBox = ({skillIcon, skillImage, skill}) => {
    
        return (
            <div className="skill-wrap">
                <div className="card">
                    <span>{skillIcon}</span>
                    <div className="image">
                        <img src={skillImage} width="100%" height="100%" alt="Coding" />
                    </div>
                    <div className="info">
                        <h3 className="title">{ skill}</h3>
                    </div>
                </div>
            </div>
        )

    
};

export default SkillBox;
