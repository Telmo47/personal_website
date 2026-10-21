export const portfolioData = {
  personal: {
    name: "Telmo Botelho",
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
    linkedin: "https://www.linkedin.com/in/telmo-botelho-56614736b/?isSelfProfile=true",
    email: "telmobotelho4@gmail.com",
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
      title: "MERGE-App (Classificação Musical com IA)",
      category: "completed",
      categoryLabel: "Concluído",
      hasGithub: true,
      githubUrl: "https://github.com/Telmo47",
      demoUrl: "",
      description:
        "Plataforma full-stack que utiliza Inteligência Artificial e Machine Learning para interpretar textos, sons e gerar classificações musicais avançadas.",
      tags: ["React", "Express.js", "PostgreSQL", "RabbitMQ", "Python", "Machine Learning", "Java"],
      highlights: [
        "Arquitetura de mensageria assíncrona orientada a eventos com RabbitMQ",
        "Pipeline de Machine Learning em Python integrado com backend Express.js e base de dados PostgreSQL",
        "Processamento e interpretação inteligente de parâmetros de texto e áudio para classificação musical",
      ],
    },
    {
      id: 2,
      title: "Criptomoeda distribuida",
      category: "completed",
      categoryLabel: "Concluído",
      hasGithub: false,
      githubUrl: "",
      demoUrl: "",
      description:
        "Sistema de alta performance desenvolvido integralmente em Java com RMI, focado em programação paralela, gestão de threads e processamento distribuído em rede no qual o cliente pode criar uma carteira virtual e consumir uma criptomoeda ficticia bem como trocar bens ficticios com outros utilizadores.",
      tags: ["Java", "Multi-threading", "Concorrência", "Sockets de Rede"],
      highlights: [
        "Comunicação distribuída de alta velocidade através de Java RMI e Sockets",
        "Programação paralela avançada com controlo estrito de concorrência e sincronização de threads",
        "Gestão segura de carteiras virtuais e transações atómicas de bens entre nós descentralizados",
      ],
    },
    {
      id: 3,
      title: "Balanceador de fluídos (IoT)",
      category: "completed",
      categoryLabel: "Concluído",
      hasGithub: false,
      githubUrl: "",
      demoUrl: "",
      description:
        "Prototipagem e implementação de um sistema de Internet das Coisas focado em mensageria e comunicação eficiente entre sensores em ambiente Linux. O objetivo é através de dois sensores de ultrasons, o balanceamento de fluidos entre dois recipientes automaticamente.",
      tags: ["Linux", "Mosquitto (MQTT)", "HiveMQ", "PHP", "C", "Sensores físicos"],
      highlights: [
        "Firmware e leitura analógica/digital em linguagem C com sensores de ultrassons",
        "Comunicação em tempo real via protocolo MQTT através de brokers Mosquitto e HiveMQ",
        "Automação contínua de balanceamento e telemetria de nível em ambiente Linux",
      ],
    },
    {
      id: 4,
      title: "GGData",
      category: "completed",
      categoryLabel: "Concluído",
      hasGithub: true,
      githubUrl: "https://github.com/Telmo47",
      demoUrl: "",
      description:
        "Prototipagem e implementação do mvc para concretização de um site tanto em backend como em frontend onde o utilizador pode verificar notas e realizar criticas sobre videojogos.",
      tags: ["MVC", ".NET", "C#", "React"],
      highlights: [
        "Arquitetura Model-View-Controller (MVC) em .NET e C# com forte desacoplamento",
        "Interface moderna e dinâmica em React para catálogo, pesquisa e avaliações de videojogos",
        "Sistema completo de gestão de utilizadores, críticas da comunidade e agregação de pontuações",
      ],
    },
    {
      id: 5,
      title: "Portfólio Interativo & AI-Assisted Dev",
      category: "in_progress",
      categoryLabel: "Em Desenvolvimento",
      hasGithub: true,
      githubUrl: "https://github.com/Telmo47/personal_website",
      demoUrl: "",
      description:
        "Site pessoal construído com foco em UI/UX moderna (glassmorphism) e gerado com o auxílio de agentes de IA para estruturação rápida de código e componentes.",
      tags: ["React", "Vite", "CSS Moderno", "Prompt Engineering"],
      highlights: [
        "Design System personalizado em tema escuro com efeitos glassmorphism e micro-interações fluidas",
        "Aceleração ágil do ciclo de desenvolvimento com agentes de IA e engenharia de contexto",
        "Preparado para deploy estático com custo zero permanente na Vercel e integração contínua com GitHub",
      ],
    },
  ],

  techStack: [
    {
      title: "Frontend & UI",
      icon: "Layout",
      color: "#00f2fe",
      items: ["React", "Vite", "HTML/CSS Moderno"],
    },
    {
      title: "Backend & Arquitetura",
      icon: "Server",
      color: "#9d4edd",
      items: ["Java", "C#", ".NET", "Express.js / Node.js", "Python"],
    },
    {
      title: "Base de Dados & Mensageria",
      icon: "Database",
      color: "#38ef7d",
      items: ["SQL (PostgreSQL)", "RabbitMQ", "Mosquitto (MQTT) / HiveMQ"],
    },
    {
      title: "Infraestrutura, Redes & Segurança",
      icon: "ShieldCheck",
      color: "#f59e0b",
      items: ["Linux", "Docker", "Nmap", "Wireshark"],
    },
    {
      title: "Soluções Empresariais & Metodologias",
      icon: "Briefcase",
      color: "#60a5fa",
      items: [
        "Microsoft Power Platform (Power Apps, Power BI)",
        "Metodologias Ágeis (Scrum)",
        "Git / Controlo de Versões",
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
