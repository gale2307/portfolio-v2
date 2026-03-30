import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My <span className="accent">Skills</span></h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
