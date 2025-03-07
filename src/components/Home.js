import React from 'react';
import '../styles/Home.css';
import myPhoto from '../assets/MyPhoto/MyPhoto.png';

const Home = () => {
  return (
    <section className="home">
      <div className="triangle one"></div>
      <div className="triangle two"></div>

      <img className="photo" src={myPhoto} alt="Theo" />
    </section>
  );
};

export default Home;
