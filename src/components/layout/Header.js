import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';
import { FaHome, FaFacebookF, FaLinkedinIn, FaGithub, FaPaperPlane, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const StyledHeader = styled.header`
 background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  nav {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    @media (max-width: 767px) {
      .navLeft {
        ul {
          .collapseNav {
            position: absolute;
            flex-direction: column;
            opacity: 0;
            left: -100%;
            top: 52px;
            transition: all 0.5s ease;
          }
        }
      }
      &.active {
        .navLeft {
          ul {
            flex-direction: column;
            position: relative;
            .collapseNav {
              position: absolute;
              left: 0%;
              opacity: 1;
              background-color: ${({ theme }) => theme.white};
              left: 50px;
              z-index: 10;
              border-radius: 0 0 8px 8px;
              box-shadow: ${({ theme }) => theme.boxShadow};
            }
          }
        }
      }
    }
    ul li a {
      padding: 1rem;
      transition: all 0.3s ease;
      font-weight: 500;
      width: 100%;
      text-align: center;
    }
    .navLeft {
      ul {
        .collapseNav {
          display: flex;
          li {
            a {
              &.is-active,
              &:hover {
                padding: 0.8rem 1rem;
                border-bottom: 0.41rem solid ${({ theme }) => theme.lightbaseColor};
                @media (max-width: 767px) {
                  background-color: ${({ theme }) => theme.lightbaseColor};
                  color: $white;
                  border: none;
                }
              }
            }
          }
        }
      }
    }
    .navRight {
      display: flex;
      align-items: center;
      ul li a {
        font-size: 14px;
        @media (max-width: 767px) {
          font-size: 12px;
        }
        &:hover {
          transform: scale(1.3);
          color: ${({ theme }) => theme.lightbaseColor};
        }
      }
      .mobileMenu {
        display: none;
      }
      @media (max-width: 767px) {
        .mobileMenu {
          font-size: 20px;
          margin-right: 23px;
          cursor: pointer;
          border-left: solid 1px ${({ theme }) => theme.gray};
          padding-left: 21px;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .navHire {
          display: none;
        }
      }
      .navHire {
        margin-right: 5px;
      }
    }
    ul {
      text-transform: uppercase;
      display: flex;
      li {
        display: flex;
        align-items: center;
        .navHome {
          background-color: ${({ theme }) => theme.lightbaseColor};
          border-radius: 8px 0 0 8px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          @media (max-width: 767px) {
            width: 50px;
          }
          &.is-active {
            svg {
              color: ${({ theme }) => theme.white};
            }
          }
        }
      }
    }
  }
`

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const sendEmail = () => (
        window.location.href = "mailto:mreksha@gmail.com"
    )
    

    return(
        <StyledHeader>
            <nav className={open ? "active" : ""}>
                <div className="navLeft">
                    <ul>
                        <li>
                            <NavLink className="navHome" to="/" activeClassName="is-active" exact={true} onClick={closeMobileMenu}> <FaHome /></NavLink>
                        </li>
                        <ul className="collapseNav">
                            <li>
                                <NavLink className="navLink" to="/resume" activeClassName="is-active" onClick={closeMobileMenu}> Resume </NavLink>
                            </li>
                            <li>
                                <NavLink className="navLink" to="/portfolio" activeClassName="is-active" onClick={closeMobileMenu}> Portfolio </NavLink>
                            </li>
                            <li>
                                <NavLink className="navLink" to="/contact" activeClassName="is-active" onClick={closeMobileMenu}> Contact </NavLink>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="navRight">
                    <ul>
                        <li><a className="fb" href="https://www.facebook.com/reksha/" rel="noreferrer" target="_blank"><FaFacebookF /></a></li>
                        <li><a className="ins" href="https://github.com/Maximilianix" rel="noreferrer" target="_blank"><FaGithub /></a></li>
                        <li><a className="ins" href="https://www.linkedin.com/in/maxim-reksha/" rel="noreferrer" target="_blank"><FaLinkedinIn /></a></li>
                    </ul>
                    <Button
                        classVal={"navHire"}
                        value={"Hire Me"}
                        icon={<FaPaperPlane />}
                        handleBtnClick={sendEmail}
                    />
                    <div onClick={handleClick}>
                        {open ? ( 
                                <div className="mobileMenu"><i><FaTimes /></i></div>
                        ) : (
                                <div className="mobileMenu"><i><FaBars /></i></div>
                            )}
                    </div>
                </div>
            </nav>
        </StyledHeader>
    )
};

export default Header;


