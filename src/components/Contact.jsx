import React from 'react';
import { Mail, FileDown, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ personal, onDownloadCv }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="section-badge" style={{ marginBottom: '16px' }}>
            <Mail size={16} />
            <span>Contacto Direto</span>
          </div>

          <h2 className="contact-heading">
            Pronto para impulsionar o teu próximo <br />
            <span className="gradient-text">projeto de engenharia?</span>
          </h2>

          <p className="contact-lead">
            Estou ativamente disponível para oportunidades de emprego (Full-Time, Remoto, Híbrido ou Presencial).
            Sente-te à vontade para descarregar o meu currículo ou entrar em contacto direto por email ou LinkedIn.
          </p>

          <div className="contact-actions-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onDownloadCv}
            >
              <FileDown size={18} />
              <span>Descarregar CV (PDF)</span>
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="btn btn-secondary"
            >
              <Send size={18} />
              <span>Enviar Mensagem por Email</span>
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
