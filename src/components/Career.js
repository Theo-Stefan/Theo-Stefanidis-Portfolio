import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp } from '../utils/motionVariants';
import '../styles/Career.css';
import Timeline from './Timeline';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  return (
    <section id="career" className="career">
      <motion.h1
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        {t('career.title')}
      </motion.h1>

      <motion.p
        className="section-text"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {t('career.text')}
      </motion.p>

      <Timeline />
    </section>
  );
};

export default Career;
