import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Golang', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'C'],
  },
  {
    category: 'Backend Frameworks',
    skills: ['Spring Boot', 'FastAPI', 'Flask'],
  },
  {
    category: 'Frontend Frameworks',
    skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Expo'],
  },
  {
    category: 'Infrastructure',
    skills: ['GCP', 'AWS', 'Docker', 'Terraform', 'Jenkins'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'AI & ML',
    skills: ['Langchain', 'Pytorch'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'HuggingFace', 'Claude Code'],
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
