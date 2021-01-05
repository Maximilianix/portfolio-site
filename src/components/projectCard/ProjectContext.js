import React, { useState, createContext } from 'react';

export const ProjectContext = createContext(null);

export const ProjectProvider = (props) => {
    const [modal, setModal] = useState("");
    const [image, setImage] = useState("");

    const store = {
        modal,
        setModal,
        image,
        setImage
    }

    return (
        <ProjectContext.Provider value={store} >
            {props.children}
        </ProjectContext.Provider>
    )
}