import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ target, label }) {
  const [ref, count] = useCountUp(target);

  const display = () => {
    if (target >= 1000000) return (count / 1000000).toFixed(1) + 'M+';
    if (!Number.isInteger(target)) return count.toFixed(2);
    return Math.floor(count) + (target >= 50 && target < 1000 ? '%' : '');
  };

  return (
    <div className="stat-card">
      <span className="stat-number" ref={ref}>{display()}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats-bar">
      <StatCard target={4}       label="Years Experience" />
      <StatCard target={1000000} label="Users Supported" />
      <StatCard target={60}      label="% Speed Improvement" />
      <StatCard target={3.70}    label="GPA (out of 4.00)" />
    </div>
  );
}
