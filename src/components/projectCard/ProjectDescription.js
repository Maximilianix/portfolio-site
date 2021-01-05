import React, { useState } from 'react';
import Button from '../button/Button';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectDescription = ({ description, length = 75 }) => {
    const [showLess, setShowLess] = useState(true);

    if (description.length < length) {
        return <p>{description}</p>;
    }

  
    return (
        <React.Fragment>
            <p>{showLess ? `${description.slice(0, length)}...` : description}</p>
            <Button
                classVal={"readMore"}
                handleBtnClick={() => setShowLess(!showLess)}
                value={showLess ? "Read More" : "Show Less"}
                icon={showLess ? <FaChevronDown /> : <FaChevronUp />}
            />
        </React.Fragment>
    )
}

export default ProjectDescription;