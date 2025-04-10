import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeLeft, fadeRight } from '../utils/motionVariants';
import '../styles/Contact.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <motion.h1
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        {t('contact.contactMe')}
      </motion.h1>

      <div className="contact-container">
        <motion.div
          className="contact-left"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <div className="get-in-touch">
            <h2>{t('contact.getInTouch')}</h2>
            <a
              href="https://github.com/Theo-Stefan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/theodoros-stefanidis-477276245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
          </div>

          <div className="my-email">
            <h2>{t('contact.myEmail')}</h2>
            <div className="contact-email">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>t.stefanidis24@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="line-between"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="contact-right"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
