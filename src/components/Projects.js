import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background: #ffffff;
`;

const ProjectCard = styled(motion.div)`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const projects = [
  {
    title: "Web Based OMR Checker",
    description: "Built web-based OMR Checker with 99.8% accuracy using HTML, CSS, React.js, Flask, MYSQL, and OpenCV.",
  },
  {
    title: "Faulty Product Detector",
    description: "Developed AI-embedded firmware for vision-based inspection systems using CNN and other image processing algorithms.",
  },
  // Add other projects here...
];

const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default Projects;
