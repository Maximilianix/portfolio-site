import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/roboto.css';

export const GlobalStyles = createGlobalStyle`


  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  body {
    color: ${({ theme }) => theme.black};
    transition: all 0.25s linear;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    background-color: ${({ theme }) => theme.baseColor};
    background-image: radial-gradient(circle,${({ theme }) => theme.lightbaseColor} 0%,${({ theme }) => theme.baseColor} 70%,${({ theme }) => theme.darkbaseColor} 100%);
    @media (max-width: 768px) {
        .wrapper {
            padding: 1rem;
        }
    }
  }
  ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color:${({ theme }) => theme.black};
}
button {
  cursor: pointer;
}

button:disabled {
  cursor: default;
}
.container {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;
  grid-template-columns: minmax(300px, 25%) minmax(680px, 100%);
  grid-template-rows: 760px;
  max-width: 1170px;
  margin: auto;
  position: relative;
  z-index: 5;
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  @media (max-width: 992px) {
    max-width: 750px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .mainContent {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto 1fr auto;
    .mainWrapper {
      background-color: ${({ theme }) => theme.white};
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      padding: 2rem;
    }
  }
  h2 {
    position: relative;
    display: inline-block;
    padding: 15px 0 0 3px;
    margin-bottom: 15px;
    z-index: 1;
    font-weight:700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 7px;
      left: 0;
      bottom: 4px;
      z-index: -1;
      background-color: ${({ theme }) => theme.lightbaseColor};
    }
  }
  h3{
    font-weight:500;
  }
}
.styled-list {
  color: ${({ theme }) => theme.gray};
  line-height: 40px;
  position: relative;
  padding-bottom: 16px;
  > li {
    border-left: solid 2px ${({ theme }) => theme.lightGray};
    padding: 0 0 27px 20px;
    display: flex;
    line-height: 13px;
    &:first-child {
      padding: 0 0 60px 19px;
    }
    &:last-child {
      border: 0;
      margin-left: 2px;
    }
    &:first-of-type:before {
      border: 0;
      background: ${({ theme }) => theme.lightbaseColor};
      width: 50px;
      height: 50px;
      left: 4px;
    }
    &:before {
      border-color: ${({ theme }) => theme.lightbaseColor} !important;
      content: "";
      border: solid 2px;
      width: 8px;
      height: 8px;
      border-radius: 50px;
      margin-left: -27px;
      background: ${({ theme }) => theme.white};
      position: absolute;
    }
    h3 {
      color: ${({ theme }) => theme.black};
    }
    svg {
      width: 50px;
      height: 100%;
      color: ${({ theme }) => theme.black};
      padding: 10px;
      position: relative;
      left: -44px;
    }
  }
}`