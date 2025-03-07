import React from 'react';
import '../styles/Home.css';
import myPhoto from '../assets/MyPhoto/MyPhoto.png';

const Home = () => {
  return (
    <section className="home">
      <div className="triangle one"></div>
      <div className="triangle two"></div>

      <div className="message">
        <p>Hey there! I am</p>
        <h1>Theo</h1>
        <h1>Stefanidis</h1>
      </div>

      <div className="profession">
        <h1>Software</h1>
        <h1>Developer</h1>
      </div>

      <img className="photo" src={myPhoto} alt="Theo" />

      <button className="resume-btn">My Resume</button>
    </section>
  );
};

export default Home;
