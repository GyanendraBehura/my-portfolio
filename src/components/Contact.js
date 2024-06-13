import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px 20px;
  background: #ffffff;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:gyanendrajsp2001@gmail.com">gyanendrajsp2001@gmail.com</a></p>
    <p>Phone: +91 9348629765</p>
    <p>GitHub: <a href="https://github.com/gyani-behura">gyani-behura</a></p>
  </ContactContainer>
);

export default Contact;
