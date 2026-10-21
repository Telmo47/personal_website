import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function AcademicJourney({ timeline, t }) {
  return (
    <section id="academic" className="academic-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={16} />
            <span>{t.academic.badge}</span>
          </div>
          <h2 className="section-title">{t.academic.title}</h2>
          <p className="section-subtitle">
            {t.academic.subtitle}
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-badge">
                  <Award size={14} color="#00f2fe" />
                  <span>{item.gradeHighlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
