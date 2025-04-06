import React, { useState } from 'react';
import '../styles/Projects.css';
import MyProject from './MyProject';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { ProjectsData } from './ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const projectsData = ProjectsData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { t } = useTranslation();

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
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory),
        );

  return (
    <section id="projects" className="projects">
      <h1 className="section-title">{t('projects.title')}</h1>

      <p className="section-text">{t('projects.text')}</p>

      {/* Category Filter Section */}
      <div className="category-filter">
        <div className="icon-filter">
          <FontAwesomeIcon icon={faArrowDownShortWide} />
        </div>
        <span className="filterByCategory">
          {t('projects.filterByCategory')}:
        </span>
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
              <li onClick={() => handleCategorySelect('All')}>
                {t('projects.categories.all')}
              </li>
              <li onClick={() => handleCategorySelect('Web Development')}>
                {t('projects.categories.webDev')}
              </li>
              <li onClick={() => handleCategorySelect('Desktop Applications')}>
                {t('projects.categories.desktopApp')}
              </li>
              <li onClick={() => handleCategorySelect('Game Development')}>
                {t('projects.categories.gameDev')}
              </li>
              <li onClick={() => handleCategorySelect('Mobile Applications')}>
                {t('projects.categories.mobileApp')}
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
            videoURL={project.videoURL}
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
