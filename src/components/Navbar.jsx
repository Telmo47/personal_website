import React from 'react';
import { Terminal, FileDown, Menu, Sparkles } from 'lucide-react';

export default function Navbar({ onDownloadCv }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <div className="brand-icon">
            <Terminal size={20} />
          </div>
          <div className="brand-title">
            <span className="brand-name">Engenheiro.dev</span>
            <span className="brand-sub">Portfolio // 2026</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('hero')}>
                Início
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('focus-areas')}>
                🎯 Especializações
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('projects')}>
                🚀 Projetos
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('stack')}>
                ⚡ Stack
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('academic')}>
                🎓 Percurso
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('contact')}>
                📫 Contacto
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <button type="button" className="btn btn-primary" onClick={onDownloadCv}>
            <FileDown size={17} />
            <span>Descarregar CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
