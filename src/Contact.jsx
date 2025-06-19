import './Contact.css';
import { RippleEffect } from './WaveBackground'; 

export const Contact = () => (
  <div className="contact">
    <RippleEffect />
    <h2 className="contact-title">Get in Touch</h2>
    <p className="contact-subtitle">Feel free to reach out through any of the platforms below.</p>

    <div className="contact-list">
      <div className="contact-item">
        <img
          src="https://img.icons8.com/color/48/000000/gmail-new.png"
          alt="Email"
          className="contact-icon"
        />
        <a href="mailto:arunprasad839@gmail.com" className="contact-link">
          arunprasad839@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="LinkedIn"
          className="contact-icon"
        />
        <a
          href="https://linkedin.com/in/arun-prasad-m-7a5882293"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          linkedin.com/in/arun-prasad
        </a>
      </div>

      <div className="contact-item">
        <img
          src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png"
          alt="GitHub"
          className="contact-icon"
        />
        <a
          href="https://github.com/Arun-Prasad2004"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          github.com/Arun-Prasad2004
        </a>
      </div>
    </div>
  </div>
);
