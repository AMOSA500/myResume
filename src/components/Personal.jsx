import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

function LangBar({ name, pct, colorClass }) {
  return (
    <div className="lang-item">
      <span className="lang-name">{name}</span>
      <div className="lang-bar">
        <div className={`lang-fill ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function LanguagesCard() {
  const [ref, isVisible] = useIntersection();
  return (
    <div ref={ref} className="misc-card">
      <h3>Languages Spoken</h3>
      <LangBar name="English" pct={isVisible ? 98 : 0} colorClass="fill-blue" />
      <LangBar name="Yoruba"  pct={isVisible ? 90 : 0} colorClass="fill-green" />
      <LangBar name="Hausa"   pct={isVisible ? 75 : 0} colorClass="fill-orange" />
    </div>
  );
}

const interests = ['🏆 Hackathons', '🔓 Open Source', '🤖 AI & ML', '🎵 Music', '⚽ Football'];

export default function Personal() {
  return (
    <section>
      <div className="section-label">Personal</div>
      <h2 className="section-title">Languages &amp; Interests</h2>
      <div className="section-divider" />
      <div className="misc-grid">
        <LanguagesCard />
        <div className="misc-card">
          <h3>Interests</h3>
          <div className="skill-tags">
            {interests.map(i => <span key={i} className="tag">{i}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
