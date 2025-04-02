import React from 'react';
import '../styles/Career.css';
import Timeline from './Timeline';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  return (
    <section id="career" className="career">
      <h1 className="section-title">{t('career.title')}</h1>

      <p className="section-text">{t('career.text')}</p>

      <Timeline />
    </section>
  );
};

export default Career;
