import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';
import { FaHome, FaFacebookF, FaLinkedinIn, FaGithub, FaPaperPlane, FaBars, FaTimes } from 'react-icons/fa';
import './_header.scss';

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const sendEmail = () => (
        window.location.href = "mailto:mreksha@gmail.com"
    )
    

    return(
        <header>
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
        </header>
    )
};

export default Header;


