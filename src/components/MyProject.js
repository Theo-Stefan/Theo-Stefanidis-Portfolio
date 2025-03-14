import React from 'react';
import '../styles/MyProject.css';

const MyProject = ({ title, thumbnail, technologies }) => {
  return (
    <div className="project-rectangle">
      <div className="project-title">{title}</div>
      <img src={thumbnail} alt="Image" className="project-thumbnail" />
      <div className="project-technologies">{technologies}</div>
      <div className="see-more">See more...</div>
    </div>
  );
};

export default MyProject;
