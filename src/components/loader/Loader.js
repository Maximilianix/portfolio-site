import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loader {
    border: 16px solid ${({ theme }) => theme.white};
    border-top: 16px solid ${({ theme }) => theme.baseColor};
    border-radius: 50%;
    width: 130px;
    height: 130px;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Loader = () => {
    return(
    <StyledLoader className="loader-container">
        <div className="loader"></div>
    </StyledLoader>
    )
};

export default Loader;


