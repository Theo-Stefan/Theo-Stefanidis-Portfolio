import React from 'react';
import './styles/header.css';

const header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Theo.</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#career">Career Journey</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <button className="button">Contact</button>
    </header>
  );
};

export default header;
