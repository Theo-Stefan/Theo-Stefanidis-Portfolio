import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import myPhoto from '../assets/MyPhoto/MyPhoto.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home">
      <div className="triangle one"></div>
      <div className="triangle two"></div>

      <div className="message">
        <p>{t('home.hey')}</p>
        <h1>{t('home.name')}</h1>
        <h1>{t('home.surname')}</h1>
      </div>

      <div className="profession">
        <h1>Software</h1>
        <h1>Developer</h1>
      </div>

      <img className="photo" src={myPhoto} alt="Theo" />

      <button className="resume-btn">{t('home.resumeBTN')}</button>
    </section>
  );
};

export default Home;
