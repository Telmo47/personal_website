import React from 'react';
import { GraduationCap, Award, CheckCircle2, Clock } from 'lucide-react';

export default function AcademicJourney({ timeline }) {
  return (
    <section id="academic" className="academic-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={16} />
            <span>Formação Curricular</span>
          </div>
          <h2 className="section-title">Percurso Académico</h2>
          <p className="section-subtitle">
            A jornada em Engenharia Informática: fundamentos teóricos rigorosos aliados à prática intensiva de projeto.
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
