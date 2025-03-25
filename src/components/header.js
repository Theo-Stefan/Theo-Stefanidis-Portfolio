import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const topOffset = 80; // Offset for smooth scrolling

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const currentTheme = prefersDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    setIsDarkTheme(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
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
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('career')}>Career Journey</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
          </ul>
        </nav>

        <button
          className="contact-btn"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </div>

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
