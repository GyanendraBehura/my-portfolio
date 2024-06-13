import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background: #282c34;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Gyanendra Behura. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
