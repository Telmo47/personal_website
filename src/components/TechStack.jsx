import React from 'react';
import { Cpu, Layout, Server, Database, Wrench } from 'lucide-react';

export default function TechStack() {
  const stackCategories = [
    {
      title: 'Frontend & UI',
      icon: <Layout size={20} />,
      items: [
        { name: 'React (v18 / v19)', level: 'Avançado' },
        { name: 'JavaScript (ES6+) & TypeScript', level: 'Sólido' },
        { name: 'HTML5 Semântico & CSS3 Moderno', level: 'Avançado' },
        { name: 'Single Page Apps (SPA) & Vite', level: 'Avançado' },
        { name: 'UI Responsiva & Acessibilidade', level: 'Sólido' },
      ],
    },
    {
      title: 'Backend & Sistemas',
      icon: <Server size={20} />,
      items: [
        { name: 'Node.js & Express', level: 'Sólido' },
        { name: 'C & C++ (Programação de Sistemas)', level: 'Competente' },
        { name: 'Python (Scripts & Algoritmos)', level: 'Sólido' },
        { name: 'Arquitetura de REST APIs', level: 'Sólido' },
        { name: 'Concorrência & Processos', level: 'Competente' },
      ],
    },
    {
      title: 'Bases de Dados & Modelação',
      icon: <Database size={20} />,
      items: [
        { name: 'PostgreSQL & MySQL', level: 'Sólido' },
        { name: 'SQL & Modelação Relacional', level: 'Avançado' },
        { name: 'Otimização de Índices e Queries', level: 'Sólido' },
        { name: 'Transações & Propriedades ACID', level: 'Sólido' },
        { name: 'Bases de Dados NoSQL / SQLite', level: 'Competente' },
      ],
    },
    {
      title: 'Ferramentas & Metodologias',
      icon: <Wrench size={20} />,
      items: [
        { name: 'Git & Fluxos de Controlo de Versões', level: 'Avançado' },
        { name: 'Linux (Bash / Shell Scripting)', level: 'Sólido' },
        { name: 'Docker & Contentorização Básica', level: 'Competente' },
        { name: 'Metodologias Ágeis (Scrum/Kanban)', level: 'Sólido' },
        { name: 'Testes Unitários & Debugging', level: 'Sólido' },
      ],
    },
  ];

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={16} />
            <span>Ferramentas & Tecnologias</span>
          </div>
          <h2 className="section-title">Stack Tecnológica</h2>
          <p className="section-subtitle">
            Tecnologias, ambientes e linguagens com que trabalho no dia a dia para desenvolver sistemas resilientes.
          </p>
        </div>

        <div className="stack-categories-grid">
          {stackCategories.map((category, idx) => (
            <div key={idx} className="stack-box glass-card">
              <div className="stack-box-header">
                <div className="stack-box-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="stack-items-list">
                {category.items.map((item, i) => (
                  <div key={i} className="stack-item">
                    <span className="stack-item-name">{item.name}</span>
                    <span className="stack-item-badge">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
