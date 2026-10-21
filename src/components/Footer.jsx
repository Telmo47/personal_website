import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <Terminal size={16} color="#00f2fe" />
          <span>{t.footer.text}</span>
        </div>

        <div className="footer-status-pill">
          <span>{t.footer.statusPill}</span>
        </div>

        <button
          type="button"
          className="btn-secondary"
          onClick={scrollToTop}
          style={{ padding: '8px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', gap: '6px' }}
        >
          <ArrowUp size={14} />
          <span>{t.footer.backToTop}</span>
        </button>
      </div>
    </footer>
  );
}
