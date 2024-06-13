import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 50px 20px;
  background: #f0f0f0;
  text-align: center;
`;

const About = () => (
  <AboutContainer id="about">
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>About Me</motion.h2>
    <p>
      I am a Full Stack Developer with a strong foundation in both frontend and backend technologies. Currently pursuing a Dual Degree (BTech + MTech) in Industrial and Systems Engineering at IIT Kharagpur.
    </p>
  </AboutContainer>
);

export default About;
