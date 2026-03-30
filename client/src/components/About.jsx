import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__text">
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <p className="section-subtitle">A little background</p>
          <p>
            I'm a full-stack developer based in [City, Country] with a passion for building
            products that live on the internet. I love turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>
          <p>
            When I'm not pushing pixels or writing code, you'll find me hiking, reading,
            or experimenting with new technologies. I'm always open to exciting opportunities
            and collaborations.
          </p>
          <div className="about__facts">
            <div className="about__fact">
              <span className="about__fact-number accent">3+</span>
              <span>Years Experience</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-number accent">20+</span>
              <span>Projects Completed</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-number accent">10+</span>
              <span>Happy Clients</span>
            </div>
          </div>
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
