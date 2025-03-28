import React, { useState } from 'react';
import '../styles/Projects.css';
import MyProject from './MyProject';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { ProjectsData } from './ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? ProjectsData
      : ProjectsData.filter((project) =>
          project.category.includes(selectedCategory),
        );

  return (
    <section id="projects" className="projects">
      <h1 className="section-title">My Projects</h1>

      <p className="section-text">
        Here are some of the projects I’ve worked on, ranging from web
        applications to software experiments. Each project reflects my passion
        for coding, problem-solving, and building intuitive user experiences.
      </p>

      {/* Category Filter Section */}
      <div className="category-filter">
        <div className="icon-filter">
          <FontAwesomeIcon icon={faArrowDownShortWide} />
        </div>
        <span className="filterByCategory">Filter By Category:</span>
        <div className="category-selection" onClick={toggleDropdown}>
          <span
            className="category-text"
            style={{ color: 'var(--background-color-3)' }}
          >
            {selectedCategory}
          </span>
        </div>

        {/* Dropdown for selecting category */}
        {isDropdownVisible && (
          <div className="category-dropdown">
            <ul>
              <li onClick={() => handleCategorySelect('All')}>All</li>
              <li onClick={() => handleCategorySelect('Web Development')}>
                Web Development
              </li>
              <li onClick={() => handleCategorySelect('Desktop Applications')}>
                Desktop Applications
              </li>
              <li onClick={() => handleCategorySelect('Game Development')}>
                Game Development
              </li>
              <li onClick={() => handleCategorySelect('Mobile Applications')}>
                Mobile Applications
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Projects Container */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <MyProject
            key={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
            images={project.images}
            technologies={project.technologies}
            projectLink={project.projectLink}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
