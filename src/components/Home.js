import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import myPhoto from '../assets/MyPhoto/MyPhoto.png';

const Home = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 830);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 830);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="home">
      <div className="triangle one"></div>
      <div className="triangle two"></div>

      <div className="message">
        <p>{t('home.hey')}</p>
        {!isMobile ? (
          <>
            <h1>{t('home.name')}</h1>
            <h1>{t('home.surname')}</h1>
          </>
        ) : (
          <div className="message-names">
            <h1>{t('home.name')}</h1>
            <h1>{t('home.surname')}</h1>
          </div>
        )}
      </div>

      <div className="profession">
        <h1>Software</h1>
        <h1>Developer</h1>
      </div>

      <img className="photo" src={myPhoto} alt="Theo" />

      <a href="/CV/Theo Stefanidis Resume.pdf" download>
        <button className="resume-btn">{t('home.resumeBTN')}</button>
      </a>
    </section>
  );
};

export default Home;
