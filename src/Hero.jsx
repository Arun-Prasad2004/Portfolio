import { useEffect, useState } from 'react';
import './Hero.css';

export const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // delay start
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-section ${visible ? 'fade-in-up' : ''}`}>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="portfolio\public\bg-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <h1>Hi,I m Arun</h1>
        <p> an AI + Web Developer blending logic with creativity.</p>
      </div>
    </div>
  );
};
