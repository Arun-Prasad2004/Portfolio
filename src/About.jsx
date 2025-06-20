import './About.css';
import { ThreeBackground } from './WavyBackground';

export const About = () => (
  <div className="about-wrapper">
    <ThreeBackground />
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="\profile.jpg" alt="Arun Prasad" />
        </div>
        <div className="about-text">
          <p>
            I’m a passionate individual with a strong interest in AI, Data Science, and Full Stack Development.
            I thrive on solving real-world problems and building intelligent tools that blend logic with creativity.
            I'm always learning, always building, and always improving.
          </p>
        </div>
      </div>
    </div>
  </div>
);
