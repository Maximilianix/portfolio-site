import React from 'react';
import Button from '../button/Button';
import profileImage from '../../assets/images/profile-image.webp';
import cv from '../../assets/files/cv.pdf';
import './_sideBar.scss';
import '../../styles/components/_styledlist.scss';
import { FaDownload,FaCode } from 'react-icons/fa';

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
        <aside>
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
        </aside>
    );
}

export default SideBar;


