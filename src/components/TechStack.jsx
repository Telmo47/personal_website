import React from 'react';
import { Cpu, Layout, Server, Database, ShieldCheck, Briefcase, Zap } from 'lucide-react';

export default function TechStack({ categories = [], t }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} />;
      case 'Briefcase':
        return <Briefcase size={20} />;
      default:
        return <Zap size={20} />;
    }
  };

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={16} />
            <span>{t.techStack.badge}</span>
          </div>
          <h2 className="section-title">{t.techStack.title}</h2>
          <p className="section-subtitle">
            {t.techStack.subtitle}
          </p>
        </div>

        <div className="stack-categories-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="stack-box glass-card">
              <div className="stack-box-header">
                <div
                  className="stack-box-icon"
                  style={{
                    color: category.color,
                    background: `${category.color}15`,
                    borderColor: `${category.color}35`,
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="stack-items-list">
                {category.items.map((item, i) => (
                  <div key={i} className="stack-item">
                    <span
                      className="stack-bullet"
                      style={{
                        backgroundColor: category.color,
                        boxShadow: `0 0 8px ${category.color}`,
                      }}
                    ></span>
                    <span className="stack-item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
