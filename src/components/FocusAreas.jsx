import React from 'react';
import { Sparkles, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function FocusAreas({ areas, t }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      default:
        return <Zap size={22} />;
    }
  };

  return (
    <section id="focus-areas" className="focus-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t.focusAreas.badge}</span>
          </div>
          <h2 className="section-title">{t.focusAreas.title}</h2>
          <p className="section-subtitle">
            {t.focusAreas.subtitle}
          </p>
        </div>

        <div className="focus-grid">
          {areas.map((area) => (
            <div key={area.id} className="focus-card glass-card">
              <div className="focus-card-header">
                <div
                  className="focus-icon-wrap"
                  style={{
                    color: area.color,
                    borderColor: `${area.color}40`,
                    background: `${area.color}15`,
                    boxShadow: `0 0 16px ${area.color}20`,
                  }}
                >
                  {getIcon(area.icon)}
                </div>
                <h3 className="focus-card-title">{area.title}</h3>
              </div>

              <p className="focus-card-desc">{area.description}</p>

              <div className="focus-tech-block">
                <span className="focus-tech-label">{t.focusAreas.techLabel}</span>
                <div className="focus-tech-tags">
                  {area.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="focus-tag-pill"
                      style={{
                        borderColor: `${area.color}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
