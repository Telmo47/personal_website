export const portfolioData = {
  personal: {
    name: "Engenheiro Informático",
    role: "Software Engineer | Full-Stack & Systems",
    tagline: "Engenharia de software focada em soluções robustas, código limpo e arquiteturas modernas.",
    status: {
      available: true,
      label: "Disponível para Oportunidades",
      academicStage: "99% Licenciado",
      academicDetail: "Todo o plano curricular concluído — apenas a aguardar o lançamento da última nota pelo docente. Disponibilidade total para início imediato.",
    },
    location: "Portugal (Remoto / Híbrido / Presencial)",
    github: "https://github.com/Telmo47",
    linkedin: "https://linkedin.com",
    email: "contacto@engenheiro.dev",
    cvPdfPath: "/cv.pdf",
  },

  focusAreas: [
    {
      id: "software-ai",
      title: "Desenvolvimento de Software & Integração de IA",
      icon: "Sparkles",
      color: "#00f2fe",
      description:
        "Desenvolvimento de aplicações com integração de modelos de Inteligência Artificial para análise e processamento de dados complexos.",
      technologies: ["React", "Vite", "Java", "C#", ".NET"],
    },
    {
      id: "distributed-systems",
      title: "Computação Distribuída & Performance de Sistemas",
      icon: "Cpu",
      color: "#9d4edd",
      description:
        "Arquitetura de software de alta performance, com experiência em programação paralela (multi-threading) e execução de sistemas distribuídos em rede.",
      technologies: ["Java", "Threads", "Concorrência", "Redes"],
    },
    {
      id: "agile-systems",
      title: "Metodologias Ágeis & Sistemas Organizacionais",
      icon: "Layers",
      color: "#10b981",
      description:
        "Entrega de software através de metodologias ágeis (Scrum) e implementação de sistemas de informação empresariais (ERP, Business Intelligence).",
      technologies: ["Scrum", "Microsoft Power Platform", "Power Apps", "Power BI"],
    },
    {
      id: "networks-iot",
      title: "Infraestrutura de Redes, Segurança & IoT",
      icon: "ShieldCheck",
      color: "#f59e0b",
      description:
        "Conhecimentos práticos em segurança informática, administração de redes locais e prototipagem de sistemas ciberfísicos (IoT).",
      technologies: ["Linux", "Docker", "Nmap", "Wireshark", "VirtualBox"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Plataforma de Gestão & Dashboard Full-Stack",
      category: "completed",
      categoryLabel: "Concluído",
      tagline: "Aplicação web completa com gestão de utilizadores e métricas em tempo real.",
      description:
        "Sistema robusto desenvolvido com React no cliente e Node.js no backend, suportado por base de dados relacional. Inclui autenticação segura JWT, controlo de acessos por função (RBAC), relatórios dinâmicos e filtros analíticos.",
      tags: ["React", "Node.js", "PostgreSQL", "Express", "REST API"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      highlights: [
        "Arquitetura modular em camadas (Controller, Service, Repository)",
        "Otimização de queries SQL reduzindo tempos de resposta em 40%",
        "Interface responsiva com suporte completo a tema escuro",
      ],
    },
    {
      id: 2,
      title: "Otimizador de Algoritmos & Benchmarking",
      category: "completed",
      categoryLabel: "Concluído",
      tagline: "Ferramenta de análise de complexidade e simulação de algoritmos de grafos.",
      description:
        "Projeto académico focado na implementação e comparação de performance de algoritmos clássicos de grafos (Dijkstra, A*, Kruskal) e estruturas de dados avançadas. Produz relatórios de consumo de memória e tempo de execução.",
      tags: ["C++", "Python", "Algoritmos", "Grafos", "Benchmarking"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Implementação eficiente com gestão manual de ponteiros e memória",
        "Visualização gráfica de dados gerados via scripts de automação Python",
        "Cobertura com testes unitários exaustivos para casos limite",
      ],
    },
    {
      id: 3,
      title: "API REST de Microsserviços & Gestão de Eventos",
      category: "completed",
      categoryLabel: "Concluído",
      tagline: "Serviço modular e contentorizado com Docker para processamento de transações.",
      description:
        "Microsserviço concebido para alta disponibilidade e facilidade de integração. Fornece documentação interativa OpenAPI/Swagger, validação estrita de esquemas de dados e contentorização completa.",
      tags: ["TypeScript", "Docker", "Express", "Swagger", "Jest"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Ambiente 100% reproduzível com Docker Compose",
        "Documentação Swagger completa para consumo rápido por equipas externas",
        "Pipeline de testes automatizados com Jest",
      ],
    },
    {
      id: 4,
      title: "Portfólio Web Interativo & Dark Tech",
      category: "in_progress",
      categoryLabel: "Em Desenvolvimento",
      tagline: "Aplicação SPA de alto impacto visual com gamificação de competências.",
      description:
        "Portfólio profissional desenvolvido de raiz com React e Vite, tirando partido de glassmorphism, variáveis de estilo personalizadas e componentes interativos (painel de RPG, pipeline dinâmico e navegação rápida).",
      tags: ["React 19", "Vite", "Modern CSS", "Glassmorphism", "Lucide"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "100% otimizado para alojamento estático gratuito permanente (Vercel)",
        "Sem recurso a frameworks pesadas de CSS para máxima performance e controlo",
        "Ficha de habilidades estilo videojogo com animações progressivas",
      ],
    },
    {
      id: 5,
      title: "Aplicação Colaborativa em Tempo Real",
      category: "in_progress",
      categoryLabel: "Em Desenvolvimento",
      tagline: "Ambiente de notas partilhadas e sincronização de estado com WebSockets.",
      description:
        "Exploração prática de comunicação bidirecional em tempo real para múltiplos utilizadores em simultâneo com deteção de conflitos e persistência periódica em cache.",
      tags: ["WebSockets", "Node.js", "React", "Redis"],
      githubUrl: "https://github.com",
      demoUrl: "",
      highlights: [
        "Sincronização de cursor e edição simultânea em tempo real",
        "Gestão de reconexão automática e resiliência de rede",
      ],
    },
    {
      id: 6,
      title: "Pipeline CI/CD com Kubernetes & Cloud Multi-Stage",
      category: "backlog",
      categoryLabel: "No Radar",
      tagline: "Estudo e implementação de orquestração de contentores em ambiente de produção.",
      description:
        "Projeto planeado para consolidar competências de infraestrutura moderna, orquestração de pods e automação de deploys com zero downtime.",
      tags: ["Kubernetes", "GitHub Actions", "Terraform", "AWS / GCP"],
      githubUrl: "",
      demoUrl: "",
      highlights: [
        "Orquestração e escalabilidade automática com K8s",
        "Estratégia de deployment blue/green ou canário",
      ],
    },
    {
      id: 7,
      title: "Ferramenta CLI para Engenheiros de Software",
      category: "backlog",
      categoryLabel: "No Radar",
      tagline: "Utilitário de linha de comandos para automação de tarefas de desenvolvimento.",
      description:
        "Ferramenta de terminal de alta velocidade para gerar scaffolding de projetos, validar commits e automatizar rotinas diárias de engenharia.",
      tags: ["Go / Rust", "CLI", "Shell", "DevOps"],
      githubUrl: "",
      demoUrl: "",
      highlights: [
        "Executável binário único sem dependências externas",
        "Interação rápida e integrada com Git hooks",
      ],
    },
  ],

  academicTimeline: [
    {
      period: "1º Ano — Fundações da Computação",
      title: "Lógica, Algoritmia & Arquitetura",
      description:
        "Domínio de programação imperativa em C, álgebra linear, cálculo, estruturas de dados básicas e circuitos/arquitetura de computadores.",
      gradeHighlight: "Bases sólidas de pensamento lógico e algorítmico",
    },
    {
      period: "2º Ano — Engenharia & Sistemas",
      title: "Estruturas Avançadas, BD & Concorrência",
      description:
        "Modelação e administração de Bases de Dados Relacionais (SQL), Sistemas Operativos (processos, threads, gestão de memória e chamadas de sistema) e Redes de Computadores.",
      gradeHighlight: "Destaque em Modelação de Dados e Estruturas Complexas",
    },
    {
      period: "3º Ano — Especialização & Engenharia de Software",
      title: "Desenvolvimento Web, Sistemas Distribuídos & Projeto",
      description:
        "Metodologias ágeis de desenvolvimento de software, arquitetura de sistemas distribuídos, segurança da informação e conceção de projetos práticos completos.",
      gradeHighlight: "Desenvolvimento de projetos integrados em equipa",
    },
    {
      period: "Momento Atual",
      title: "Conclusão Curricular & Prontidão para o Mercado",
      description:
        "Com todo o percurso concluído, encontro-me exclusivamente a aguardar o lançamento da última nota pelo docente para emissão da certidão oficial. Foco total em novos desafios profissionais.",
      gradeHighlight: "Disponibilidade imediata a 100%",
    },
  ],

  devNotes: [
    {
      id: 1,
      title: "Arquitetura Limpa no Frontend: Separar Estado, Lógica e Apresentação",
      date: "Outubro 2026",
      readTime: "4 min de leitura",
      summary:
        "Como a separação de responsabilidades em componentes puros e hooks personalizados melhora a testabilidade e previne renderizações desnecessárias em React.",
      tag: "Arquitetura Frontend",
    },
    {
      id: 2,
      title: "Gestão de Concorrência: Mutexes, Semáforos e Race Conditions na Prática",
      date: "Setembro 2026",
      readTime: "6 min de leitura",
      summary:
        "Uma reflexão detalhada sobre os desafios clássicos de concorrência e sincronização de processos em sistemas operacionais e como evitá-los em código real.",
      tag: "Sistemas & SO",
    },
    {
      id: 3,
      title: "Da Teoria Académica aos Padrões da Indústria: A Transição do Estudante",
      date: "Agosto 2026",
      readTime: "5 min de leitura",
      summary:
        "Lições práticas de como código que apenas 'passa nos testes da cadeira' difere de código resiliente, documentado e pronto para produção contínua.",
      tag: "Carreira & Engenharia",
    },
  ],
};
