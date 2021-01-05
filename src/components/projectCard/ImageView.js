import React, {useContext} from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContext';

const StyledImg = styled.div`
    max-height: 200px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .3s ease-out;
        cursor: pointer;
        &:hover{
            transform: scale(1.2)
        }
    }
`

const ImageView = (props) => {
    
    const { setModal, setImage } = useContext(ProjectContext);

    const openModal = (e) => {
        setModal("open");
        setImage(e.target.src);
    }
    return (
        <StyledImg className="img-container">
            <img
                src={props.src}
                alt={props.alt}
                data-original="fullImg"
                onClick={openModal}
            />
        </StyledImg>
    )
};

export default ImageView;


