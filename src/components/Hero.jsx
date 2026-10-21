import React from 'react';
import {
  Gamepad2,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  FileDown,
  Sparkles,
  Clock,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default function Hero({ data, onDownloadCv }) {
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
              Construindo software <br />
              <span className="gradient-text">robusto, elegante e escalável</span>
            </h1>

            <p className="hero-description">
              Olá! Sou <strong>{data.personal.name}</strong>. Foco-me em desenvolvimento de software moderno,
              arquiteturas limpas e resolução de problemas técnicos complexos. Formação quase 100% concluída, com prontidão imediata para integrar equipas de engenharia.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <FolderGit2 size={18} />
                <span>Explorar Projetos</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onDownloadCv}
              >
                <FileDown size={18} />
                <span>Obter Currículo</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={18} />
                <span>Entrar em Contacto</span>
              </button>
            </div>

            {/* Hub Central de Botões para as Restantes Secções */}
            <div className="hero-quickhub">
              <div className="quickhub-label">
                <Sparkles size={14} color="#00f2fe" />
                <span>Acesso Rápido às Secções</span>
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
                    <span className="quickhub-title">Áreas de Especialização</span>
                    <span className="quickhub-desc">IA, Sistemas, Ágil & Redes</span>
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
                    <span className="quickhub-title">Pipeline de Projetos</span>
                    <span className="quickhub-desc">Feitos, Em Curso e Backlog</span>
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
                    <span className="quickhub-title">Percurso Académico</span>
                    <span className="quickhub-desc">Licenciatura & Estado Atual</span>
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
                    <span className="quickhub-title">Stack Tecnológica</span>
                    <span className="quickhub-desc">Linguagens, Frameworks & Ferramentas</span>
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
                    <span className="quickhub-title">Contacto & CV</span>
                    <span className="quickhub-desc">Links diretos e PDF</span>
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
                <div className="mini-stat-lbl">Curso Concluído</div>
              </div>
              <div className="mini-stat-item">
                <div className="mini-stat-num">{data.projects.length}</div>
                <div className="mini-stat-lbl">Projetos no Hub</div>
              </div>
              <div className="mini-stat-item">
                <div className="mini-stat-num">100%</div>
                <div className="mini-stat-lbl">Disponibilidade</div>
              </div>
            </div>

            {/* Banner de Explicação de Estado Académico */}
            <div className="academic-notice-card">
              <div className="academic-notice-icon">
                <Clock size={20} />
              </div>
              <div className="academic-notice-content">
                <h4>Status Curricular: Apenas à Espera da Nota Final</h4>
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
