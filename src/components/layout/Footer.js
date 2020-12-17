import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.white};
    color:  ${({ theme }) => theme.black};
    border-radius: 8px;
    padding: 12px;
    box-shadow:  ${({ theme }) => theme.boxShadow};
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const Footer = () => (
    <StyledFooter>
        <h4>Maxim R.</h4>
        <small>Copyright &#169; 2020 Maxim Reksha. All Rights Reserved. </small>
    </StyledFooter>
);

export default Footer;