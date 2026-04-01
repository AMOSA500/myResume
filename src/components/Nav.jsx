import React, { useState, useEffect } from 'react';

const sections = ['about', 'skills', 'experience', 'education', 'achievements'];

export default function Nav({ isLight, onToggle }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const els = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      els.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <span className="nav-logo-bracket">&lt;</span>
        <span className="nav-logo-name">Nafiu<span className="nav-logo-dot">.</span>Amosa</span>
        <span className="nav-logo-bracket">/&gt;</span>
      </div>
      <ul className="nav-links">
        {sections.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={onToggle}>
        {isLight ? '🌙 Dark' : '☀ Light'}
      </button>
    </nav>
  );
}
