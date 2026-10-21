import React from 'react';
import { Mail, FileDown, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ personal, onDownloadCv, t }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="section-badge" style={{ marginBottom: '16px' }}>
            <Mail size={16} />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="contact-heading">
            {t.contact.headingLine1} <br />
            <span className="gradient-text">{t.contact.headingLine2}</span>
          </h2>

          <p className="contact-lead">
            {t.contact.lead}
          </p>

          <div className="contact-actions-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onDownloadCv}
            >
              <FileDown size={18} />
              <span>{t.contact.btnCv}</span>
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="btn btn-secondary"
            >
              <Send size={18} />
              <span>{t.contact.btnEmail}</span>
            </a>
          </div>

          <div className="contact-links-grid">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="contact-item-btn"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-item-btn"
            >
              <LinkedinIcon size={18} color="#0077b5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="contact-item-btn"
            >
              <Mail size={18} color="#00f2fe" />
              <span>{personal.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
