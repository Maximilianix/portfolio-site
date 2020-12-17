import React from 'react'
import { func, string } from 'prop-types';
import { sun, moon } from '../../assets/images';
import styled from 'styled-components';

const StyledToggle = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  display: flex;
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;
  padding: 0.5rem;
  position: fixed;
  top:50%;
  left:1rem;
  z-index:6;
    @media (max-width: 767px) {
      border-radius: 0 40px 40px 0;
      left: 0;
      border-left: none;
      width: 3rem;
      height: 2.7rem;
    }
  }
  img {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    @media (max-width: 767px) {
      width: 1.5rem;
      position: absolute;
    }
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <StyledToggle onClick={toggleTheme} lightTheme={isLight}>
    <img src={sun}  alt="Sun"/>
    <img src={moon}  alt="Moon"/>
    </StyledToggle>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;