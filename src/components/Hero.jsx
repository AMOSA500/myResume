import React from 'react';
import { useTyped } from '../hooks/useTyped';

export default function Hero() {
  const typedText = useTyped();

  return (
    <section className="hero" id="about">
      <div className="hero-inner">
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <img src="/images/profile.jpg" alt="Nafiu T. Amosa" />
          <div className="avatar-status" />
        </div>

        <div className="hero-badge">Available for opportunities</div>

        <h1>Nafiu T. <span>Amosa</span></h1>

        <p className="hero-subtitle">
          {typedText}<span className="cursor" />
        </p>

        <div className="hero-contacts">
          <div className="contact-chip">📞 07462035537</div>
          <div className="contact-chip">✉ naf.amosa@gmail.com</div>
          <a
            className="contact-chip"
            href="https://github.com/AMOSA500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Github
          </a>
          <div className="contact-chip">🎓 University of Westminster</div>
        </div>

        <div className="hero-cta">
          <a href="mailto:naf.amosa@gmail.com" className="btn btn-primary">Get in Touch</a>
          <a href="#experience" className="btn btn-secondary">View Experience</a>
        </div>
      </div>
    </section>
  );
}
