import React from 'react';
import {
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  FileDown,
  Sparkles,
  Clock,
  Code2,
} from 'lucide-react';

export default function Hero({ data, onDownloadCv, t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introdução & Hub de Navegação Rápida */}
          <div>
            <div className="hero-badge-row">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>{data.personal.status.label}</span>
              </div>
              <div className="academic-badge">
                <Clock size={14} />
                <span>{data.personal.status.academicStage}</span>
              </div>
            </div>

            <h1 className="hero-title">
              {t.hero.titleLine1} <br />
              <span className="gradient-text">{t.hero.titleLine2}</span>
            </h1>

            <p className="hero-description">
              {data.personal.heroDescription}
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <FolderGit2 size={18} />
                <span>{t.hero.btnProjects}</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onDownloadCv}
              >
                <FileDown size={18} />
                <span>{t.hero.btnCv}</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={18} />
                <span>{t.hero.btnContact}</span>
              </button>
            </div>

            {/* Hub Central de Botões para as Restantes Secções */}
            <div className="hero-quickhub">
              <div className="quickhub-label">
                <Sparkles size={14} color="#00f2fe" />
                <span>{t.hero.quickHubTitle}</span>
              </div>

              <div className="quickhub-grid">
                <button
                  type="button"
                  className="quickhub-btn"
                  onClick={() => scrollTo('focus-areas')}
                >
                  <div className="quickhub-icon-wrap">
                    <Sparkles size={20} />
                  </div>
                  <div className="quickhub-text">
                    <span className="quickhub-title">{t.hero.quickHub[0].title}</span>
                    <span className="quickhub-desc">{t.hero.quickHub[0].desc}</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="quickhub-btn"
                  onClick={() => scrollTo('projects')}
                >
                  <div className="quickhub-icon-wrap">
                    <FolderGit2 size={20} />
                  </div>
                  <div className="quickhub-text">
                    <span className="quickhub-title">{t.hero.quickHub[1].title}</span>
                    <span className="quickhub-desc">{t.hero.quickHub[1].desc}</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="quickhub-btn"
                  onClick={() => scrollTo('academic')}
                >
                  <div className="quickhub-icon-wrap">
                    <GraduationCap size={20} />
                  </div>
                  <div className="quickhub-text">
                    <span className="quickhub-title">{t.hero.quickHub[2].title}</span>
                    <span className="quickhub-desc">{t.hero.quickHub[2].desc}</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="quickhub-btn"
                  onClick={() => scrollTo('stack')}
                >
                  <div className="quickhub-icon-wrap">
                    <Cpu size={20} />
                  </div>
                  <div className="quickhub-text">
                    <span className="quickhub-title">{t.hero.quickHub[3].title}</span>
                    <span className="quickhub-desc">{t.hero.quickHub[3].desc}</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="quickhub-btn"
                  onClick={() => scrollTo('contact')}
                >
                  <div className="quickhub-icon-wrap">
                    <Mail size={20} />
                  </div>
                  <div className="quickhub-text">
                    <span className="quickhub-title">{t.hero.quickHub[4].title}</span>
                    <span className="quickhub-desc">{t.hero.quickHub[4].desc}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Ficha Resumo do Perfil / Status */}
          <div className="hero-visual-card glass-card">
            <div className="hero-avatar-row">
              <div className="hero-avatar-box">
                <Code2 size={34} />
              </div>
              <div className="hero-avatar-meta">
                <h3>{data.personal.name}</h3>
                <p className="mono-tag">{data.personal.role}</p>
              </div>
            </div>

            <div className="hero-stats-mini">
              <div className="mini-stat-item">
                <div className="mini-stat-num">99%</div>
                <div className="mini-stat-lbl">{t.hero.statDegree}</div>
              </div>
              <div className="mini-stat-item">
                <div className="mini-stat-num">{data.projects.length}</div>
                <div className="mini-stat-lbl">{t.hero.statProjects}</div>
              </div>
              <div className="mini-stat-item">
                <div className="mini-stat-num">100%</div>
                <div className="mini-stat-lbl">{t.hero.statAvailability}</div>
              </div>
            </div>

            {/* Banner de Explicação de Estado Académico */}
            <div className="academic-notice-card">
              <div className="academic-notice-icon">
                <Clock size={20} />
              </div>
              <div className="academic-notice-content">
                <h4>{t.hero.academicCardTitle}</h4>
                <p>
                  {data.personal.status.academicDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
