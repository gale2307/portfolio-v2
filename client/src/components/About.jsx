import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__text">
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <p className="section-subtitle">A little background</p>
          <p>
            I'm a Software Engineer based in Sydney, Australia with 4 years of experience building
            scalable backend systems and microservices for e-commerce and digital banking platforms.
          </p>
          <p>
            I hold a Master of Computer Science (Data Science & AI) from the University of Sydney
            and a Bachelor of Science in Computer Science from UC Irvine. I'm a fast learner who likes to explore and work with new tech stacks, 
            which led to a wide variety of projects including fullstack development, mobile development, machine learning, and game development.
          </p>
          <a href="/resume.pdf" className="btn btn-outline" download>
            Download Resume
          </a>
        </div>

        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <p>Your Photo Here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
