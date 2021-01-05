import React, {useContext} from 'react';
import { ProjectContext } from './ProjectContext';
import styled from 'styled-components';

const StyledImgModal = styled.div`
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease-out;
  z-index:2;
  &.open{
      opacity: 1;
      pointer-events: all;
      overflow: auto;
  }
  .full-img{
      position: absolute;
      top:10%;
      left: 50%;
      transform: translate(-50%) scale(0.5);
      transition: all .3s ease-out;
      &.open{
           transform: translate(-50%) scale(1);
           width:50%;
           @media (max-width: 767px) {
                 width:80%;
           }
      }
  }
`

const ImageModal = () => {

    const {modal, setModal, image} = useContext(ProjectContext);

    const closeModal = (e) => {
        if (e.target.classList.contains("imgModal")) {
            setModal("");
        }
    }

    return (
        <StyledImgModal className={"imgModal " + modal} onClick={closeModal}>
            <img 
                className={"full-img " + modal }
                src={image}
                alt=""
            />
        </StyledImgModal>
    ) 
};

export default ImageModal;


