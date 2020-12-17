import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
ul {
    margin: 2rem 0 5rem 0;
    line-height: 2rem;
    span {
      font-weight: bold;
    }
  }
`

const ContactInfo = () => (
    <StyledDiv className="contactInfo">
        <h2>Contact Information</h2>
        <ul>
            <li><span>Address: </span>Tel Aviv, Dereh Namir 107, Israel</li>
            <li><span>Phone: </span>+975 54-55029916</li>
            <li><span>E-mail: </span>mreksha@gmail.com</li>
            <li><span>Job: </span>Full-Stack Web developer</li>
        </ul>
    </StyledDiv>
);

export default ContactInfo;


