import './Skills.css';

const skills = [
  { name: 'Python', icon: 'python/python-original' },
  { name: 'Java', icon: 'java/java-original' },
  { name: 'React.js (MERN)', icon: 'react/react-original' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
  { name: 'MySQL', icon: 'mysql/mysql-original' },
  { name: 'Docker', icon: 'docker/docker-original' },
  { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original' },
  {
    name: 'Scikit-learn',
    customIcon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  },
];

export const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map(skill => (
        <div className="skill-card" key={skill.name} aria-label={skill.name}>
          <img
            src={
              skill.customIcon
                ? skill.customIcon
                : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}.svg`
            }
            alt={skill.name}
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);
