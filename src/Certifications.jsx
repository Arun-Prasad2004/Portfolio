import './Certifications.css';
import mlLogo from '/ibm-ml-badge.png';           // Place in public/
import pythonLogo from '/ibm-python-badge.png';   // Place in public/
import aiLogo from '/dliai-llm-badge.png';        // Place DL.AI logo in public/

export const Certifications = () => (
  <div className="certifications">
    <h2 className="cert-title">Certifications</h2>
    <div className="cert-grid">
      <div className="cert-card">
        <img src={mlLogo} alt="IBM Machine Learning with Python" className="cert-logo"/>
        <span>IBM Machine Learning with Python</span>
      </div>
      <div className="cert-card">
        <img src={pythonLogo} alt="IBM Python for Data Science" className="cert-logo"/>
        <span>IBM Python for Data Science</span>
      </div>
      <div className="cert-card">
        <img src={aiLogo} alt="Generative AI with LLMs (DeepLearning.AI / Coursera)" className="cert-logo"/>
        <span>Generative AI with LLMs (DeepLearning.AI, Coursera)</span>
      </div>
    </div>
  </div>
);
