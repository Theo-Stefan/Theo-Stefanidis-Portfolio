import React from 'react';
import '../styles/About.css';
import TechBox from './TechBox';
import C from '../assets/Technologies/C_Logo.png';
import Cplus from '../assets/Technologies/ISO_C++_Logo.svg.png';
import Csharp from '../assets/Technologies/Logo_C_sharp.svg.png';
import git from '../assets/Technologies/Git_icon.svg.png';
import java from '../assets/Technologies/java-logo-1.png';
import sql from '../assets/Technologies/amazon-database-logo-png-transparent.png';
import html from '../assets/Technologies/HTML5_logo_and_wordmark.svg.png';
import css from '../assets/Technologies/CSS-Logo-2011.png';
import javascript from '../assets/Technologies/JavaScript-Logo.png';
import python from '../assets/Technologies/Python-logo-notext.svg.png';
import typescript from '../assets/Technologies/png-clipart-angularjs-typescript-javascript-vue-js-others-blue-angle.png';
import react from '../assets/Technologies/react-1-logo-png-transparent.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <h1 className="section-title">{t('about.title')}</h1>

      <p className="section-text">{t('about.text1')}</p>
      <p className="section-text">{t('about.text2')}</p>

      <div className="techbox-container">
        <TechBox image={C} text={'C'} />
        <TechBox image={Cplus} text={'C++'} />
        <TechBox image={Csharp} text={'C#'} />
        <TechBox image={git} text={'Git Version Control'} />
        <TechBox image={java} text={'Java'} />
        <TechBox image={html} text={'HTML'} />
        <TechBox image={css} text={'CSS'} />
        <TechBox image={javascript} text={'JavaScript'} />
        <TechBox image={sql} text={'SQL Database'} />
        <TechBox image={python} text={'Python'} />
        <TechBox image={typescript} text={'TypeScript'} />
        <TechBox image={react} text={'React'} />
      </div>
    </section>
  );
};

export default About;
