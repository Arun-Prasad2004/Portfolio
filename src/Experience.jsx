import './Experience.css';
import awsLogo from '/aws.png';
import buildLogo from '/build.png';

export const Experience = () => (
  <div className="experience">
    <h2 className="experience-title">Position of Responsibility</h2>

    <div className="experience-container">
      <div className="experience-card">
        <img src={awsLogo} alt="AWS Cloud Club" className="experience-logo" />
        <div className="experience-content">
          <h3 className="experience-role">Graphic Designer</h3>
          <p className="experience-org">AWS Cloud Club</p>
          <p className="experience-duration">2025 – Present</p>
        </div>
      </div>

      <div className="experience-card">
        <img src={buildLogo} alt="IITM Build Club" className="experience-logo" />
        <div className="experience-content">
          <h3 className="experience-role">Member</h3>
          <p className="experience-org">IITM Build Club</p>
          <p className="experience-duration">2024 – Present</p>
        </div>
      </div>
    </div>
  </div>
);
