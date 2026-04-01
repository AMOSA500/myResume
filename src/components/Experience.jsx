import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

function TimelineCard({ dotColor, pulseDot, title, date, subtitle, location, badge, children }) {
  const [ref, isVisible] = useIntersection();
  const dotStyle = dotColor
    ? { background: dotColor, boxShadow: `0 0 0 2px ${dotColor}` }
    : {};

  return (
    <div ref={ref} className={`timeline-item${isVisible ? ' visible' : ''}`}>
      <div className={`timeline-dot${pulseDot ? ' pulse' : ''}`} style={dotStyle} />
      <div className="timeline-card">
        <div className="timeline-header">
          <div className="timeline-title">{title}</div>
          <div className="timeline-date">{date}</div>
        </div>
        {subtitle  && <div className="timeline-subtitle">{subtitle}</div>}
        {location  && <div className="timeline-location">{location}</div>}
        <div className="timeline-body">{children}</div>
        {badge     && <span className="timeline-badge">{badge}</span>}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Where I&apos;ve Worked</div>
      <h2 className="section-title">Experience</h2>
      <div className="section-divider" />

      <div className="timeline">
        <TimelineCard
          pulseDot
          title="University of Westminster — Sky Project"
          date="Jan 2025 – Apr 2025"
          subtitle="Lead Developer (Python Django) · Commissioned by Sky"
          location="📍 London, UK"
          badge="Lead Developer"
        >
          Led a team of 4 students, reducing delivery time by 50% over 3 months. Guaranteed all code
          and design decisions aligned with project requirements and best practices. Coordinated tasks,
          oversaw technical direction, conducted code reviews, and provided technical guidance to resolve
          complex problems.
        </TimelineCard>

        <TimelineCard
          title="OA Nigeria Limited"
          date="Apr 2018 – Oct 2022"
          subtitle="Full-Stack Developer"
          location="📍 Lagos, Nigeria · Nigeria's #1 Sewing Machine Retailer — 20 branches, 1M+ customers"
          badge="Full-Stack"
        >
          <ul>
            <li>Designed optimised relational database schemas for Laravel apps supporting 1M+ users.</li>
            <li>Improved authentication and form logic, reducing user drop-off by <strong>40%</strong>.</li>
            <li>Integrated RESTful APIs and sped up data retrieval by <strong>60%</strong> with query tuning and indexing.</li>
            <li>Worked with cross-functional teams to deliver features aligned with business goals.</li>
          </ul>
        </TimelineCard>

        <TimelineCard
          title="LoftyInc Allied Partners Limited"
          date="Jan 2018 – Mar 2018"
          subtitle="Backend Developer — Medicine Startup"
          location="📍 Lagos, Nigeria"
          badge="Backend"
        >
          Managed a medicine startup with a £15K annual infrastructure budget. Integrated RESTful APIs
          and improved data retrieval speed by 60% through query tuning and indexing. Collaborated with
          designers, analysts, and operations to deliver business-aligned features.
        </TimelineCard>
      </div>

      <h3 style={{ fontSize: '1rem', color: 'var(--muted)', margin: '2.5rem 0 1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Additional Experience
      </h3>

      <div className="timeline">
        <TimelineCard
          dotColor="var(--accent3)"
          title="Forever Unique Care Limited"
          date="Summer 2024 – Summer 2025"
          subtitle="Business Support Executive (Tenders & Care Services) · Part-Time"
          location="📍 Dagenham, London"
        >
          <ul>
            <li>Led preparation and submission of tender applications in healthcare.</li>
            <li>Managed sponsor duties and regulatory documentation for UKVI compliance.</li>
            <li>Developed internal guides, cutting documentation errors by <strong>30%</strong>.</li>
            <li>Coordinated communication among care teams, directors, and external partners.</li>
          </ul>
        </TimelineCard>

        <TimelineCard
          dotColor="var(--accent3)"
          title="Arsenal FC (Directors) & JP Morgan"
          date="Jun 2024 – Ongoing"
          subtitle="Hospitality Assistant"
          location="📍 London, UK"
        >
          Provided guest services for 20+ staff and clients, coordinating meeting logistics and service
          delivery. Promoted safety compliance, improved audit results, and worked with vendors to
          maintain uninterrupted operations.
        </TimelineCard>
      </div>
    </section>
  );
}
