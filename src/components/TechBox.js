import React from 'react';
import '../styles/TechBox.css';

const TechBox = ({ image, text }) => {
  return (
    <div className="rectangle">
      <img src={image} alt={text} className="tech-image" />
      <span className="tech-text">{text}</span>
    </div>
  );
};

export default TechBox;
