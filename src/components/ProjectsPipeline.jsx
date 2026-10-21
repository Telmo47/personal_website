import React, { useState } from 'react';
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Compass,
  ExternalLink,
  Info,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsPipeline({ projects, onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  const countByCat = {
    all: projects.length,
    completed: projects.filter((p) => p.category === 'completed').length,
    in_progress: projects.filter((p) => p.category === 'in_progress').length,
    backlog: projects.filter((p) => p.category === 'backlog').length,
  };

  const getBadgeClass = (category) => {
    switch (category) {
      case 'completed':
        return 'badge-completed';
      case 'in_progress':
        return 'badge-in_progress';
      case 'backlog':
        return 'badge-backlog';
      default:
        return '';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'completed':
        return <CheckCircle2 size={13} />;
      case 'in_progress':
        return <Clock size={13} />;
      case 'backlog':
        return <Compass size={13} />;
      default:
        return <Layers size={13} />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={16} />
            <span>Showcase & Roadmap</span>
          </div>
          <h2 className="section-title">Pipeline de Projetos</h2>
          <p className="section-subtitle">
            Da conceção à produção: explora os projetos finalizados, o que estou ativamente a construir e o que se encontra no radar de engenharia.
          </p>
        </div>

        {/* Abas de Filtragem do Pipeline */}
        <div className="pipeline-filter-tabs">
          <button
            type="button"
            className={`filter-tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <Layers size={16} />
            <span>Todos os Projetos</span>
            <span className="tab-count">{countByCat.all}</span>
          </button>

          <button
            type="button"
            className={`filter-tab-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            <CheckCircle2 size={16} color="#34d399" />
            <span>Concluídos (Feitos)</span>
            <span className="tab-count">{countByCat.completed}</span>
          </button>

          <button
            type="button"
            className={`filter-tab-btn ${filter === 'in_progress' ? 'active' : ''}`}
            onClick={() => setFilter('in_progress')}
          >
            <Clock size={16} color="#fbbf24" />
            <span>Em Desenvolvimento</span>
            <span className="tab-count">{countByCat.in_progress}</span>
          </button>

          <button
            type="button"
            className={`filter-tab-btn ${filter === 'backlog' ? 'active' : ''}`}
            onClick={() => setFilter('backlog')}
          >
            <Compass size={16} color="#a5b4fc" />
            <span>No Radar (Backlog)</span>
            <span className="tab-count">{countByCat.backlog}</span>
          </button>
        </div>

        {/* Grelha de Cartões de Projetos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div>
                <span className={`project-category-badge ${getBadgeClass(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  <span>{project.categoryLabel}</span>
                </span>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
              </div>

              <div>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                        title="Ver Código no GitHub"
                      >
                        <GithubIcon size={16} />
                        <span>Código</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                        title="Ver Demonstração ao Vivo"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-details"
                    onClick={() => onSelectProject(project)}
                  >
                    <Info size={15} />
                    <span>Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
