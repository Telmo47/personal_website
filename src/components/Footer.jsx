import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <Terminal size={16} color="#00f2fe" />
          <span>© {new Date().getFullYear()} Engenheiro Informático. Todos os direitos reservados.</span>
        </div>

        <div className="footer-status-pill">
          <span>Pronto para o mercado de trabalho 🚀</span>
        </div>

        <button
          type="button"
          className="btn-secondary"
          onClick={scrollToTop}
          style={{ padding: '8px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', gap: '6px' }}
        >
          <ArrowUp size={14} />
          <span>Voltar ao Topo</span>
        </button>
      </div>
    </footer>
  );
}
