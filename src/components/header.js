import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const topOffset = 80; //when smooth scrolling it needs a little bit of offset

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Function
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
    </header>
  );
};

export default Header;
