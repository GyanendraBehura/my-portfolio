import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 50px 20px;
  background: #f0f0f0;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const skills = [
  "Git", "C/C++", "Python", "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "NextJS",
  "Flask", "Flutter", "Dart", "React Native", "ExpressJS", "MongoDB", "Django", "OpenCV",
  "Pandas", "Tkinter", "PyAutoGUI", "Bootstrap", "Tailwind CSS", "Postgres", "Prisma", "AWS", "Docker"
];

const Skills = () => (
  <SkillsContainer id="skills">
    <h2>Skills</h2>
    <SkillList>
      {skills.map((skill, index) => (
        <SkillItem key={index}>{skill}</SkillItem>
      ))}
    </SkillList>
  </SkillsContainer>
);

export default Skills;
