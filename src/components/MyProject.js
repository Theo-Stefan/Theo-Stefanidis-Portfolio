import React, { useState } from 'react';
import '../styles/MyProject.css';
import {
  faXmark,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSwiper from './ImageSwiper';
import { useTranslation } from 'react-i18next';

const MyProject = ({
  title,
  thumbnail,
  images,
  videoURL,
  technologies,
  projectLink,
  description,
}) => {
  const [ProjectModal, setProjectModal] = useState(false);
  const { t } = useTranslation();

  const toggleProjectModal = () => {
    setProjectModal(!ProjectModal);
  };

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  if (ProjectModal) {
    document.body.classList.add('active-ProjectModal');
  } else {
    document.body.classList.remove('active-ProjectModal');
  }

  return (
    <>
      <div className="project-rectangle" onClick={toggleProjectModal}>
        <div className="project-title">{title}</div>
        <img src={thumbnail} alt="Image" className="project-thumbnail" />
        <div className="project-technologies">{technologies}</div>
        <div className="see-more">{t('projects.seeMore')}</div>
      </div>

      {ProjectModal && (
        <div className="ProjectModal">
          <div className="overlay" onClick={toggleProjectModal}></div>
          <div className="ProjectModal-window">
            <div className="ProjectModal-header">
              <button
                className="open-project"
                onClick={() => openLink(projectLink)}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
              <h1>{title}</h1>
              <button
                className="close-ProjectModal"
                onClick={toggleProjectModal}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="content">
              {videoURL ? (
                <div className="video-wrapper">
                  <iframe
                    src={videoURL}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <ImageSwiper images={images} />
              )}

              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProject;
