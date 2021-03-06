import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lightbaseColor};
  color: ${({ theme }) => theme.black};
  padding: 5px 5px 5px 12px;
  border-radius: 32px;
  font-weight: bold;
  border: none;
  font-size: 14px;
  background-repeat: no-repeat;
  background-position: -120px -120px, 0 0;

  background-image: -webkit-linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -moz-linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -o-linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );

  -moz-background-size: 250% 250%, 100% 100%;
  background-size: 250% 250%, 100% 100%;

  -webkit-transition: all 0s ease;
  -moz-transition: all 0s ease;
  -o-transition: all 0s ease;
  transition: all 0s ease;
  .icon {
    background-color: ${({ theme }) => theme.white};
    border-radius: 48px;
    margin-left: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      fill:${({ theme }) => theme.black};
    }
  }
  &:hover {
    background-position: 0 0, 0 0;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    transition-duration: 0.5s;
    box-shadow:${({ theme }) => theme.boxShadow};w;
  }
  &:active {
    box-shadow: none;
  }
`

const Button = (props) => (
    <StyledButton className={`btn ${props.classVal}`} onClick={props.handleBtnClick}>
        {props.value}
        <i className="icon">{props.icon}</i>
    </StyledButton>
);

export default Button;


