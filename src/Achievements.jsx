import './Achievements.css';

export const Achievements = () => (
  <div className="achievements">
    <h2 className="ach-title">Achievements</h2>
    <div className="achievements-list">
      <div className="achievement-card">
        <img src="portfolio\public\tce.jpg" alt="TechFusion Certificate" className="achievement-certificate" />
        <span>TechFusion Ideathon – 2nd Prize (TCE Madurai)</span>
      </div>
      <div className="achievement-card">
        <img src="portfolio\public\srm.jpg" alt="Techspectrum Certificate" className="achievement-certificate" />
        <span>Techspectrum Ideanova – 2nd Prize (SRM Trichy)</span>
      </div>
    </div>
  </div>
);
