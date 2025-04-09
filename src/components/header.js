import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const topOffset = 80;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const currentTheme = prefersDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
      setIsDarkTheme(prefersDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - topOffset,
        behavior: 'smooth',
      });
    }
  };

  const refreshToHome = () => {
    window.scrollTo({
      top: document.getElementById('home').offsetTop - topOffset,
      behavior: 'auto',
    });
    window.location.reload();
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a onClick={refreshToHome} className="logo-link">
            Theo.
          </a>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a onClick={() => scrollToSection('home')}>{t('header.home')}</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')}>
                {t('header.about')}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('career')}>
                {t('header.career')}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('projects')}>
                {t('header.projects')}
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="contact-btn"
          onClick={() => scrollToSection('contact')}
        >
          {t('header.contactBTN')}
        </button>
      </div>

      <div className="language-selection" onClick={toggleDropdown}>
        <span className="language-text">{i18n.language.toUpperCase()}</span>
      </div>

      {isDropdownVisible && (
        <div className="language-dropdown">
          <ul>
            <li onClick={() => handleLanguageSelect('en')}>EN</li>
            <li onClick={() => handleLanguageSelect('it')}>IT</li>
            <li onClick={() => handleLanguageSelect('gr')}>GR</li>
          </ul>
        </div>
      )}

      <button id="theme-switch-btn" onClick={toggleTheme}>
        {isDarkTheme ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </header>
  );
};

export default Header;
