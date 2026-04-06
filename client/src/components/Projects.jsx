import { useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'ATAT — Auto Transcription & Translation',
    description: 'LLM-powered personal video transcriber and translator agentic system built with Claude Code. Frontend built with Next.js to play captioned video.',
    tags: ['Next.js', 'Claude API', 'AI Agents'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'AI Phishing Detection Mobile App',
    description: 'Led Agile development of a mobile phishing detection system using a multi-agent architecture with LangGraph.',
    tags: ['LangGraph', 'Multi-Agent', 'Mobile'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'Fraud Detection Microservices — Tokopedia',
    description: 'Developed and maintained 11 Golang microservices detecting fraudulent activity on a large-scale e-commerce platform. Reduced infrastructure costs by $15K/month.',
    tags: ['Golang', 'Microservices', 'GCP', 'Terraform'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'Media Moderation Platform — Tokopedia',
    description: 'Designed a media moderation platform integrating ML image classification with product takedown APIs on a large-scale e-commerce platform.',
    tags: ['Golang', 'Machine Learning', 'REST APIs'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'Promotions & FX Microservices — BCA Digital',
    description: 'Built Spring Boot microservices for promotions and foreign exchange systems. Improved rewards system scalability to support 100× larger payloads and reduced DB storage by 70%.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'RAG Pipeline & AI Diplomacy Agents',
    description: 'Built a RAG pipeline combining embeddings and Elasticsearch for context-aware query retrieval. Developed AI agents for the Diplomacy strategy game using KNN and logistic regression.',
    tags: ['Python', 'RAG', 'Elasticsearch', 'NLP'],
    liveUrl: null,
    repoUrl: null,
  },
];

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

const allTags = [...new Set(projects.flatMap((p) => p.tags))];

function getFocusParam() {
  return new URLSearchParams(window.location.search).get('focus') || 'All';
}

function setFocusParam(tag) {
  const params = new URLSearchParams(window.location.search);
  if (tag === 'All') {
    params.delete('focus');
  } else {
    params.set('focus', tag);
  }
  const query = params.toString();
  window.history.replaceState(null, '', query ? `?${query}` : window.location.pathname);
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState(getFocusParam);

  useEffect(() => {
    const onPop = () => setActiveTag(getFocusParam());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function selectTag(tag) {
    setActiveTag(tag);
    setFocusParam(tag);
  }

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="projects__filters">
          <button
            className={`filter-btn${activeTag === 'All' ? ' filter-btn--active' : ''}`}
            onClick={() => selectTag('All')}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn${activeTag === tag ? ' filter-btn--active' : ''}`}
              onClick={() => selectTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__top">
                <div className="project-card__folder">
                  <FolderIcon />
                </div>
                <div className="project-card__links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="View repo">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} onClick={() => selectTag(tag)} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FolderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
