import { EMAIL, LINKEDIN_URL } from '../constants';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
        <p>
          For any inquiries, feel free to reach out through email or LinkedIn.
        </p>
        <div className="contact__info">
          <a href={`mailto:${EMAIL}`} className="contact__info-item">
            <EmailIcon /> {EMAIL}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact__info-item">
            <LinkedInIcon /> {LINKEDIN_URL.replace('https://www.', '')}
          </a>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
