import React from 'react';
import { Terminal, FileDown } from 'lucide-react';

export default function Navbar({ lang, onLanguageChange, onDownloadCv, t }) {
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
            <span className="brand-name">Telmo.dev</span>
            <span className="brand-sub">Portfolio // 2026</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('hero')}>
                {t.nav.home}
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('focus-areas')}>
                {t.nav.focusAreas}
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('projects')}>
                {t.nav.projects}
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('stack')}>
                {t.nav.stack}
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('academic')}>
                {t.nav.academic}
              </button>
            </li>
            <li>
              <button type="button" className="nav-link-btn" onClick={() => scrollTo('contact')}>
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => onLanguageChange('pt')}
              title="Português"
            >
              <span className="lang-flag">🇵🇹</span> PT
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
              title="English"
            >
              <span className="lang-flag">🇬🇧</span> EN
            </button>
          </div>

          <button type="button" className="btn btn-primary" onClick={onDownloadCv}>
            <FileDown size={17} />
            <span>{t.nav.downloadCv}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
