import React from 'react';
import Button from '../button/Button';
import profileImage from '../../assets/images/profile.webp';
import cv from '../../assets/files/cv.pdf';
import styled from 'styled-components';
import { FaDownload, FaCode } from 'react-icons/fa';

const StyledAside = styled.aside`
 background-color: ${({ theme }) => theme.white};;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};;
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    .styled-list {
      top: -30px;
      font-size: 14px;
      h3 {
        margin-right: 5px;
      }
    }
    .profile-name {
      padding: 12px;
      align-self: start;
      .name {
        font-weight: 500;
        text-transform: uppercase;
      }
      .job {
        color: ${({ theme }) => theme.gray};;
      }
    }
    figure {
      clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .downloadCv {
      margin-bottom: 2rem;
    }
  }
`

const SideBar = () => {

    const downloadCv = () => {
        fetch(cv)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'MaximR-cv.pdf';
					a.click();
				});
            });
    }

    return (
        <StyledAside>
            <div className="profile">
                <div className="profile-name">
                    <span className="name">Maxim Reksha</span><br />
                    <span className="job">Web Developer</span>
                </div>
                <figure className="profile-image">
                    <img src={profileImage} alt="Profile" width="100%" height="100%"/>
                </figure>
                <ul className="styled-list">
                    <li><FaCode /></li>
                    <li><h3>Name:</h3> Maxim Reksha</li>
                    <li><h3>Birthday:</h3> 28 July 1986</li>
                    <li><h3>Job:</h3> Freelancer</li>
                    <li><h3>Email:</h3> mreksha@gmail.com</li>
                </ul>
                <Button
                    classVal={"downloadCv"}
                    value={"Download Cv"}
                    icon={<FaDownload />}
                    handleBtnClick={downloadCv}
                />
            </div>
        </StyledAside>
    );
}

export default SideBar;


