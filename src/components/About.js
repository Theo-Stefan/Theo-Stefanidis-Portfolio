import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp, containerStagger } from '../utils/motionVariants';
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

  const techs = [
    { img: C, text: 'C' },
    { img: Cplus, text: 'C++' },
    { img: Csharp, text: 'C#' },
    { img: git, text: 'Git Version Control' },
    { img: java, text: 'Java' },
    { img: html, text: 'HTML' },
    { img: css, text: 'CSS' },
    { img: javascript, text: 'JavaScript' },
    { img: sql, text: 'SQL Database' },
    { img: python, text: 'Python' },
    { img: typescript, text: 'TypeScript' },
    { img: react, text: 'React' },
  ];

  return (
    <section id="about" className="about">
      <motion.h1
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        {t('about.title')}
      </motion.h1>

      <motion.p
        className="section-text"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {t('about.text1')}
      </motion.p>

      <motion.p
        className="section-text"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t('about.text2')}
      </motion.p>

      <motion.div
        className="techbox-container"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <TechBox image={tech.img} text={tech.text} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
