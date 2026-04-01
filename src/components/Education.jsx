import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

function TimelineCard({ title, date, subtitle, location, badge, children }) {
  const [ref, isVisible] = useIntersection();
  const dotStyle = { background: 'var(--accent2)', boxShadow: '0 0 0 2px var(--accent2)' };

  return (
    <div ref={ref} className={`timeline-item${isVisible ? ' visible' : ''}`}>
      <div className="timeline-dot" style={dotStyle} />
      <div className="timeline-card">
        <div className="timeline-header">
          <div className="timeline-title">{title}</div>
          <div className="timeline-date">{date}</div>
        </div>
        {subtitle  && <div className="timeline-subtitle">{subtitle}</div>}
        {location  && <div className="timeline-location">{location}</div>}
        {children  && <div className="timeline-body">{children}</div>}
        {badge     && <span className="timeline-badge">{badge}</span>}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">Academic Background</div>
      <h2 className="section-title">Education</h2>
      <div className="section-divider" />

      <div className="timeline">
        <TimelineCard
          title="University of Westminster"
          date="Sep 2022 – Jun 2026"
          subtitle="BEng Software Engineering · GPA: 3.70 / 4.00"
          location="📍 London, UK"
          badge="3.70 GPA"
        >
          Key modules: Object-Oriented Programming, Algorithms, Database Systems, Mobile Native App
          Development, Cyber Security, Concurrent Programming, Formal Methods, Software Engineering
          Principles &amp; Practice, Robotics, and more.
        </TimelineCard>

        <TimelineCard
          title="Full-Stack Web Development Bootcamp — Udemy"
          date="Summer 2025"
          subtitle="Dr. Angela Yu · HTML, CSS, JS, Node, React, PostgreSQL, Web3 & Dapps"
          location="📍 Online"
        >
          End-to-end bootcamp covering front-end through back-end development, real-world projects,
          and best practices to build portfolio-ready full-stack applications.
        </TimelineCard>

        <TimelineCard
          title="APTECH Education, Surulere"
          date="Aug 2015 – Aug 2017"
          subtitle="Diploma in Advanced Software Engineering · Grade: Distinction"
          location="📍 Lagos, Nigeria"
          badge="Distinction"
        />

        <TimelineCard
          title="University of Agriculture, Abeokuta"
          date="Sep 2008 – Jun 2014"
          subtitle="BSc Aquaculture Management · GPA: 3.76"
          location="📍 Abeokuta, Nigeria"
          badge="3.76 GPA"
        />

        <TimelineCard
          title="Issa Memorial High School (Jubril Martins HS)"
          date="Sep 2002 – Jun 2008"
          subtitle="WAEC / GCSE"
          location="📍 Nigeria"
        />
      </div>
    </section>
  );
}
