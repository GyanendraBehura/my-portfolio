import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #282c34;
  color: white;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Gyanendra Behura</h1>
    <NavLinks>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
