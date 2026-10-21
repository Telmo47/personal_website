import React from 'react';
import {
  Gamepad2,
  Layout,
  Server,
  Database,
  Binary,
  Cpu,
  Network,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function RpgStats({ stats }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={18} />;
      case 'Server':
        return <Server size={18} />;
      case 'Database':
        return <Database size={18} />;
      case 'Binary':
        return <Binary size={18} />;
      case 'Cpu':
        return <Cpu size={18} />;
      case 'Network':
        return <Network size={18} />;
      default:
        return <Zap size={18} />;
    }
  };

  // Calcular média geral ponderada das habilidades
  const overallScore = (
    stats.reduce((acc, curr) => acc + curr.value, 0) / stats.length
  ).toFixed(1);

  return (
    <section id="rpg-stats" className="rpg-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Gamepad2 size={16} />
            <span>Ficha de Engenheiro // RPG Stats</span>
          </div>
          <h2 className="section-title">Habilitações & Domínio Técnico</h2>
          <p className="section-subtitle">
            Habilidades quantificadas em formato de barras de atributos de videojogo (escala de 1 a 10),
            baseadas no desempenho académico e projetos práticos.
          </p>
        </div>

        <div className="rpg-card-container glass-card">
          <div className="rpg-header-bar">
            <div className="rpg-player-info">
              <span className="rpg-class-badge">Classe: Engenheiro Informático</span>
              <span className="mono-tag" style={{ color: 'var(--text-secondary)' }}>
                Nível: Conclusão de Curso
              </span>
            </div>

            <div className="rpg-overall-power">
              <div className="power-counter-box">
                <div className="power-val">{overallScore} / 10</div>
                <div className="power-lbl">Poder Médio de Engenharia</div>
              </div>
            </div>
          </div>

          <div className="rpg-bars-grid">
            {stats.map((stat) => {
              const percentage = (stat.value / stat.max) * 100;
              return (
                <div key={stat.id} className="rpg-bar-item">
                  <div className="bar-top-row">
                    <div className="bar-label-group">
                      <div className="bar-icon" style={{ color: stat.color }}>
                        {getIcon(stat.icon)}
                      </div>
                      <span className="bar-name">{stat.label}</span>
                    </div>

                    <div className="bar-score-group">
                      <span className="score-val" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                      <span className="score-max">/{stat.max}</span>
                      <span className="bar-level-title">{stat.levelTitle}</span>
                    </div>
                  </div>

                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: stat.color,
                        boxShadow: `0 0 10px ${stat.color}80`,
                      }}
                    ></div>
                  </div>

                  <p className="bar-desc">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
