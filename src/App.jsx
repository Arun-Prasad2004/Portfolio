import { useEffect } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Achievements } from './Achievements';
import { Contact } from './Contact';
import { Navbar } from './Navbar';
import { ThreeBackground } from './WavyBackground';
 // <-- NEW
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <ThreeBackground /> {/* ← ADD THIS FIRST */}
      <div className="app-container">
        <Navbar />
        <section id="hero" className="fade-section"><Hero /></section>
        <section id="about" className="fade-section"><About /></section>
        <section id="skills" className="fade-section"><Skills /></section>
        <section id="projects" className="fade-section"><Projects /></section>
        <section id="experience" className="fade-section"><Experience /></section>
        <section id="certifications" className="fade-section"><Certifications /></section>
        <section id="achievements" className="fade-section"><Achievements /></section>
        <section id="contact" className="fade-section"><Contact /></section>
      </div>
    </>
  );
}

export default App;
