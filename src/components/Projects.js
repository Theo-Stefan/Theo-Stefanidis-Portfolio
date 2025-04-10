import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  fadeLeft,
  fadeUp,
  fadeIn,
  containerStagger,
  fadeUpShort,
} from '../utils/motionVariants';
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(false);
  };

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
      <motion.h1
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        {t('projects.title')}
      </motion.h1>

      <motion.p
        className="section-text"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {t('projects.text')}
      </motion.p>

      {/* Category Filter Section */}
      <motion.div
        variants={fadeUpShort}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
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
                <li
                  onClick={() => handleCategorySelect('Desktop Applications')}
                >
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
      </motion.div>

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
