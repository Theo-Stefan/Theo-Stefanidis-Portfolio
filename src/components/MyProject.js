import React, { useState } from 'react';
import '../styles/MyProject.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyProject = ({ title, thumbnail, technologies }) => {
  const [ProjectModal, setProjectModal] = useState(false);

  const toggleProjectModal = () => {
    setProjectModal(!ProjectModal);
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
        <div className="see-more">See more...</div>
      </div>

      {ProjectModal && (
        <div className="ProjectModal">
          <div className="overlay" onClick={toggleProjectModal}></div>
          <div className="ProjectModal-content">
            <div className="ProjectModal-header">
              <h1>{title}</h1>
              <button
                className="close-ProjectModal"
                onClick={toggleProjectModal}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent augue odio, vestibulum dapibus viverra laoreet, sodales
                at elit. Aliquam placerat elit leo. Donec eget orci vel dolor
                maximus sollicitudin. Nunc a magna molestie, interdum dui vitae,
                imperdiet arcu. Phasellus sit amet purus sed massa vulputate
                ultricies. Integer commodo nisi eros, laoreet rhoncus massa
                lobortis quis. Nam a sapien et diam hendrerit tristique non non
                nisi. Duis congue, magna eu auctor euismod, magna lectus dapibus
                sem, non blandit risus mauris vel dui. Vestibulum efficitur
                sollicitudin tortor, a luctus velit congue eu. Suspendisse
                potenti. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent augue odio, vestibulum dapibus viverra laoreet,
                sodales at elit. Aliquam placerat elit leo. Donec eget orci vel
                dolor maximus sollicitudin. Nunc a magna molestie, interdum dui
                vitae, imperdiet arcu. Phasellus sit amet purus sed massa
                vulputate ultricies. Integer commodo nisi eros, laoreet rhoncus
                massa lobortis quis. Nam a sapien et diam hendrerit tristique
                non non nisi. Duis congue, magna eu auctor euismod, magna lectus
                dapibus sem, non blandit risus mauris vel dui. Vestibulum
                efficitur sollicitudin tortor, a luctus velit congue eu.
                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent augue odio, vestibulum dapibus viverra
                laoreet, sodales at elit. Aliquam placerat elit leo. Donec eget
                orci vel dolor maximus sollicitudin. Nunc a magna molestie,
                interdum dui vitae, imperdiet arcu. Phasellus sit amet purus sed
                massa vulputate ultricies. Integer commodo nisi eros, laoreet
                rhoncus massa lobortis quis. Nam a sapien et diam hendrerit
                tristique non non nisi. Duis congue, magna eu auctor euismod,
                magna lectus dapibus sem, non blandit risus mauris vel dui.
                Vestibulum efficitur sollicitudin tortor, a luctus velit congue
                eu. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent augue odio, vestibulum dapibus viverra
                laoreet, sodales at elit. Aliquam placerat elit leo. Donec eget
                orci vel dolor maximus sollicitudin. Nunc a magna molestie,
                interdum dui vitae, imperdiet arcu. Phasellus sit amet purus sed
                massa vulputate ultricies. Integer commodo nisi eros, laoreet
                rhoncus massa lobortis quis. Nam a sapien et diam hendrerit
                tristique non non nisi. Duis congue, magna eu auctor euismod,
                magna lectus dapibus sem, non blandit risus mauris vel dui.
                Vestibulum efficitur sollicitudin tortor, a luctus velit congue
                eu. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProject;
