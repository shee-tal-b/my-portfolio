import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const headerOffset = 60; // Adjust this value based on your header's height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Sheetal B</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li><a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>Education</a></li>
            <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
