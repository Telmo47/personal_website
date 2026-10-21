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

export default function ProjectsPipeline({ projects, onSelectProject, t }) {
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
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
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
            <span>{t.projects.filterAll} ({countByCat.all})</span>
          </button>

          <button
            type="button"
            className={`filter-tab-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            <CheckCircle2 size={16} color="#00f2fe" />
            <span>{t.projects.filterCompleted} ({countByCat.completed})</span>
          </button>

          <button
            type="button"
            className={`filter-tab-btn ${filter === 'in_progress' ? 'active' : ''}`}
            onClick={() => setFilter('in_progress')}
          >
            <Clock size={16} color="#f59e0b" />
            <span>{t.projects.filterInProgress} ({countByCat.in_progress})</span>
          </button>

          {countByCat.backlog > 0 && (
            <button
              type="button"
              className={`filter-tab-btn ${filter === 'backlog' ? 'active' : ''}`}
              onClick={() => setFilter('backlog')}
            >
              <Compass size={16} color="#a5b4fc" />
              <span>{t.projects.filterBacklog} ({countByCat.backlog})</span>
            </button>
          )}
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
                    {project.hasGithub ? (
                      <a
                        href={project.githubUrl || 'https://github.com/Telmo47'}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                        title={t.projects.btnCode}
                      >
                        <GithubIcon size={16} />
                        <span>{t.projects.btnCode}</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn-architecture"
                        onClick={() => onSelectProject(project)}
                        title={t.projects.btnArchitecture}
                      >
                        <Layers size={15} />
                        <span>{t.projects.btnArchitecture}</span>
                      </button>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                        title={t.projects.btnDemo}
                      >
                        <ExternalLink size={16} />
                        <span>{t.projects.btnDemo}</span>
                      </a>
                    )}
                  </div>

                  {project.hasGithub && (
                    <button
                      type="button"
                      className="btn-details"
                      onClick={() => onSelectProject(project)}
                    >
                      <Info size={15} />
                      <span>{t.projects.btnDetails}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
