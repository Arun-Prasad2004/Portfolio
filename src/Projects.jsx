import './Projects.css';
import bailLogo from '/logo.png';
import voiceDocLogo from '/doc.png';

export const Projects = () => (
  <div className="projects">
    <h2 className="projects-title">Projects</h2>

    <div className="project-container">
      <div className="project-card">
        <div className="project-header">
          <img src={bailLogo} alt="Bail Reckoner Logo" className="project-logo" />
          <div>
            <h3 className="project-title">Bail Reckoner</h3>
            <p className="project-desc">
              AI tool for checking bail eligibility using IPC/CrPC logic, tracking imprisonment,
              and recommending eligibility status.
            </p>
            <a
              href="https://github.com/Arun-Prasad2004/Bail-Reckoner"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repo →
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <img src={voiceDocLogo} alt="Voice-to-Doctor Logo" className="project-logo" />
          <div>
            <h3 className="project-title">Voice-to-Doctor Prescription</h3>
            <p className="project-desc">
              Speech-to-text system for doctors that converts spoken symptoms into structured prescriptions with medicine prediction.
            </p>
            <a
              href="https://github.com/Arun-Prasad2004/Ai-Voice-Prescription"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repo →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
