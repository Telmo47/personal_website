import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label={t.modal.close}
        >
          <X size={18} />
        </button>

        <h3 className="modal-title">{project.title}</h3>
        {project.tagline && <p className="modal-subtitle">{project.tagline}</p>}

        <div className="modal-body">
          <p>{project.description}</p>

          <h4 className="modal-section-title">{t.modal.engineeringHighlights}</h4>
          <ul className="modal-list">
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle size={16} color="#00f2fe" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="modal-section-title">{t.modal.technologiesUsed}</h4>
          <div className="project-tags" style={{ marginBottom: '24px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-pill">
                #{tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            {project.hasGithub ? (
              <a
                href={project.githubUrl || 'https://github.com/Telmo47'}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>{t.modal.viewCode}</span>
              </a>
            ) : (
              <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.84rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {t.modal.noPublicRepo}
              </span>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                <span>{t.modal.viewDemo}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
