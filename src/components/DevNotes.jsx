import React from 'react';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function DevNotes({ notes }) {
  return (
    <section id="notes" className="notes-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>Engenharia & Conhecimento</span>
          </div>
          <h2 className="section-title">Notas Técnicas & Artigos</h2>
          <p className="section-subtitle">
            Reflexões sobre decisões de arquitetura, boas práticas de código e desafios de engenharia superados.
          </p>
        </div>

        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card glass-card">
              <div>
                <div className="note-meta">
                  <span className="note-tag">{note.tag}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{note.date}</span>
                  </div>
                </div>

                <h3 className="note-title">{note.title}</h3>
                <p className="note-summary">{note.summary}</p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} />
                  <span>{note.readTime}</span>
                </span>
                <span style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                  Ler Nota <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
