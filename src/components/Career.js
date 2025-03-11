import React from 'react';
import '../styles/Career.css';
import Timeline from './Timeline';

const Career = () => {
  return (
    <section className="career">
      <h1 className="section-title">My Career Journey</h1>

      <p className="section-text">
        Here are the key milestones that shaped my journey as a developer, from
        my early steps in programming to becoming a software professional.
      </p>

      <Timeline />
    </section>
  );
};

export default Career;
