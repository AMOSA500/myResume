import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const items = [
  { icon: '🏅', title: 'Westminster Employability Bronze Award',  desc: 'University of Westminster recognition for employability excellence.' },
  { icon: '✈',  title: 'Westminster Working Cultures Trip',       desc: 'International trip to Hong Kong as part of professional development.' },
  { icon: '📜', title: 'Work Based Learning Certificate',         desc: 'Awarded on completion of Level 5 group project — University of Westminster.' },
  { icon: '💻', title: 'British Computer Society (BCS)',          desc: 'The Chartered Institute for IT — Affiliate member.' },
  { icon: '🎓', title: 'Dip. Advanced Software Development',      desc: 'Distinction — APTECH Education, accredited by BCS.' },
  { icon: '🌐', title: 'Cisco CCNA & CompTIA Network+',           desc: 'Industry networking certifications alongside CEH (Cybersecurity).' },
];

function AchievementCard({ icon, title, desc }) {
  const [ref, isVisible] = useIntersection();
  return (
    <div ref={ref} className={`achievement-card${isVisible ? ' visible' : ''}`}>
      <div className="achievement-icon">{icon}</div>
      <div>
        <div className="achievement-title">{title}</div>
        <div className="achievement-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-label">Recognition &amp; Credentials</div>
      <h2 className="section-title">Achievements &amp; Certifications</h2>
      <div className="section-divider" />
      <div className="achievements-grid">
        {items.map(item => (
          <AchievementCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
