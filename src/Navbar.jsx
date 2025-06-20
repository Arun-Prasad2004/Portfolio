import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Responsibility</a>
        <a href="#certifications" onClick={(e) => scrollToSection(e, '#certifications')}>Certifications</a>
        <a href="#achievements" onClick={(e) => scrollToSection(e, '#achievements')}>Achievements</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
      </div>
    </nav>
  );
};
