import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

function SkillCard({ icon, title, children }) {
  const [ref, isVisible] = useIntersection();
  return (
    <div ref={ref} className={`skill-category${isVisible ? ' visible' : ''}`}>
      <div className="skill-category-icon">{icon}</div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function ProgressBar({ label, pct, colorClass, isVisible }) {
  return (
    <div className="skill-progress-item">
      <label><span>{label}</span><span>{pct}%</span></label>
      <div className="progress-track">
        <div
          className={`progress-fill ${colorClass}`}
          style={{ width: isVisible ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function ProficiencyCard() {
  const [ref, isVisible] = useIntersection();
  return (
    <div ref={ref} className="skill-category">
      <div className="skill-category-icon">📊</div>
      <h3>Proficiency</h3>
      <div className="skill-progress-list">
        <ProgressBar label="Python / Django"   pct={90} colorClass="fill-blue"   isVisible={isVisible} />
        <ProgressBar label="JavaScript / React" pct={85} colorClass="fill-green"  isVisible={isVisible} />
        <ProgressBar label="SQL / PostgreSQL"   pct={88} colorClass="fill-blue"   isVisible={isVisible} />
        <ProgressBar label="Node.js / APIs"     pct={80} colorClass="fill-orange" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">What I Work With</div>
      <h2 className="section-title">Skills &amp; Technologies</h2>
      <div className="section-divider" />

      <div className="skills-grid">
        <SkillCard icon="⌨" title="Languages">
          <div className="skill-tags">
            {['Python', 'JavaScript', 'Java', 'Swift', 'SQL', 'C++'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </SkillCard>

        <SkillCard icon="⚙" title="Frameworks & Tools">
          <div className="skill-tags">
            {['React', 'Node.js', 'Django', 'Laravel', 'Git', 'Docker'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </SkillCard>

        <SkillCard icon="🗄" title="Database & APIs">
          <div className="skill-tags">
            {['PostgreSQL', 'Firebase', 'RESTful APIs', 'Query Optimization'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </SkillCard>

        <SkillCard icon="☁" title="Cloud & DevOps">
          <div className="skill-tags">
            {['AWS', 'Google Cloud', 'CI/CD', 'Agile/Scrum', 'TDD'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </SkillCard>

        <SkillCard icon="🔒" title="Security & Networking">
          <div className="skill-tags">
            {['Cybersecurity', 'Cisco CCNA', 'CompTIA Network+', 'CEH'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </SkillCard>

        <ProficiencyCard />
      </div>
    </section>
  );
}
