import React from 'react';
import '../styles/Projects.css';
import MyProject from './MyProject';
import testThumbnail from '../assets/ProjectThumbnails/test.png';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="section-title">My Projects</h1>

      <p className="section-text">
        Here are some of the projects I’ve worked on, ranging from web
        applications to software experiments. Each project reflects my passion
        for coding, problem-solving, and building intuitive user experiences.
      </p>

      <div className="projects-container">
        {ProjectsData.map((project) => (
          <MyProject
            title={project.title}
            thumbnail={project.thumbnail}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
