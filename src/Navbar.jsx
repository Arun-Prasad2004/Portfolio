import './Navbar.css';

export const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Home</a>
      <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
      <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
      <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
      <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Position of Responsibility</a>
      <a href="#certifications" onClick={(e) => scrollToSection(e, '#certifications')}>Certifications</a>
      <a href="#achievements" onClick={(e) => scrollToSection(e, '#achievements')}>Achievements</a>
      <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
    </nav>
  );
};