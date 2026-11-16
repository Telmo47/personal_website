export const portfolioData = {
  pt: {
    personal: {
      name: "Telmo Botelho",
      role: "Engenheiro Informático | Full-Stack & Sistemas",
      tagline: "Engenharia de software focada em soluções robustas, código limpo e arquiteturas modernas.",
      heroDescription:
        "Olá! Sou o Telmo Botelho, Engenheiro Informático. Foco-me em desenvolvimento de software moderno, arquiteturas limpas e resolução de problemas técnicos complexos. Licenciatura concluída com sucesso, com prontidão imediata para integrar equipas de engenharia.",
      status: {
        available: true,
        label: "Disponível para Oportunidades",
        academicStage: "Licenciatura Concluída",
        academicDetail:
          "Licenciatura em Engenharia Informática 100% concluída. Disponibilidade total para início imediato e integração em equipas de engenharia.",
      },
      location: "Portugal (Remoto / Híbrido / Presencial)",
      github: "https://github.com/Telmo47",
      linkedin: "https://www.linkedin.com/in/telmo-botelho-56614736b/?isSelfProfile=true",
      email: "telmobotelho4@gmail.com",
      cvPdfPath: "./Curriculo_Telmo_Botelho.pdf",
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
        title: "Formify",
        category: "completed",
        categoryLabel: "Concluído",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47",
        demoUrl: "",
        description:
          "Plataforma de criação, edição e gestão dinâmica de formulários web. Concebida com a função de treinar e aplicar a metodologia ágil SCRUM, combinando interface reativa em React com backend em C#.",
        tags: ["React", "JavaScript", "C#", "HTML/CSS", "SCRUM", "Markdown"],
        highlights: [
          "Gestão de ciclo de vida de desenvolvimento e sprints orientado à metodologia ágil SCRUM",
          "Interface moderna e intuitiva em React para geração, personalização e preenchimento de formulários",
          "Arquitetura de backend e processamento estruturado de dados em C#",
        ],
      },
      {
        id: 7,
        title: "CRM - Gestor de Candidaturas (JobTracker)",
        category: "in_progress",
        categoryLabel: "Em Desenvolvimento",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47/CRM",
        demoUrl: "",
        description:
          "Plataforma web para gestão e acompanhamento do ciclo de vida de candidaturas a empregos. Permite controlar o estado de cada vaga com filtros avançados, métricas agregadas e paginação.",
        tags: ["C#", ".NET 10", "ASP.NET Core MVC", "PostgreSQL", "Entity Framework Core", "Docker"],
        highlights: [
          "Dashboard com métricas e KPIs em tempo real para empresas e candidaturas",
          "Autenticação segura e controlo de acessos via ASP.NET Core Identity",
          "Gestão relacional completa com Entity Framework Core e base de dados PostgreSQL",
          "Filtragem e pesquisa avançada por estado da vaga (Submetido, Teste Técnico, Oferta Aberta)",
        ],
      },
      {
        id: 8,
        title: "LoL Support Tracker",
        category: "completed",
        categoryLabel: "Concluído",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47/LoL-Tracker",
        demoUrl: "",
        description:
          "Aplicação web full-stack de análise de desempenho e métricas avançadas para League of Legends, com foco na role de Suporte e consumo em tempo real da Riot Games API.",
        tags: ["React", "TypeScript", "Vite", "C#", ".NET Core", "Riot Games API", "Redis", "Docker"],
        highlights: [
          "Backend API em C# .NET Core com cálculo de métricas essenciais de Suporte (VSPM, KP%, Control Wards e Sinergias com ADCs)",
          "Camada de cache em Redis para evitar rate limits da API oficial da Riot Games",
          "Frontend moderno em React e TypeScript com interface responsiva, estilização condicional e painéis de KPIs",
        ],
      },
      {
        id: 6,
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
        items: ["React", "TypeScript", "Vite", "HTML/CSS Moderno"],
      },
      {
        title: "Backend & Arquitetura",
        icon: "Server",
        color: "#9d4edd",
        items: ["C#", ".NET 10 / ASP.NET Core", "Java", "Express.js / Node.js", "Python"],
      },
      {
        title: "Base de Dados, Cache & Mensageria",
        icon: "Database",
        color: "#38ef7d",
        items: ["SQL (PostgreSQL)", "Redis", "Entity Framework Core", "RabbitMQ", "Mosquitto (MQTT) / HiveMQ"],
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
        period: "Licenciatura Concluída",
        title: "Engenharia Informática Finalizada com Sucesso",
        description:
          "Licenciatura 100% concluída com bases sólidas em desenvolvimento de software, sistemas e arquitetura. Total disponibilidade e motivação para integrar equipas de engenharia.",
        gradeHighlight: "Licenciatura 100% Concluída — Disponibilidade Imediata",
      },
    ],
  },

  en: {
    personal: {
      name: "Telmo Botelho",
      role: "Software Engineer | Full-Stack & Systems",
      tagline: "Software engineering focused on robust solutions, clean code, and modern architectures.",
      heroDescription:
        "Hello! I'm Telmo Botelho, a Software Engineer. I specialize in modern software development, clean architectures, and solving complex technical challenges. Degree completed, fully ready for immediate onboarding in high-impact engineering teams.",
      status: {
        available: true,
        label: "Available for Opportunities",
        academicStage: "Graduated (B.Sc.)",
        academicDetail:
          "Degree in Computer Science & Engineering 100% completed. Available immediately for full-time onboarding in high-impact engineering teams.",
      },
      location: "Portugal (Remote / Hybrid / On-site)",
      github: "https://github.com/Telmo47",
      linkedin: "https://www.linkedin.com/in/telmo-botelho-56614736b/?isSelfProfile=true",
      email: "telmobotelho4@gmail.com",
      cvPdfPath: "./Curriculo_Telmo_Botelho.pdf",
    },

    focusAreas: [
      {
        id: "software-ai",
        title: "Software Development & AI Integration",
        icon: "Sparkles",
        color: "#00f2fe",
        description:
          "Application development integrating Artificial Intelligence models for complex data analysis, prediction, and automation.",
        technologies: ["React", "Vite", "Java", "C#", ".NET"],
      },
      {
        id: "distributed-systems",
        title: "Distributed Computing & Systems Performance",
        icon: "Cpu",
        color: "#9d4edd",
        description:
          "High-performance software architecture, experienced in multi-threading, concurrency control, and distributed network processing.",
        technologies: ["Java", "Threads", "Concurrency", "Networks"],
      },
      {
        id: "agile-systems",
        title: "Agile Methodologies & Enterprise Systems",
        icon: "Layers",
        color: "#10b981",
        description:
          "Agile software delivery (Scrum), business process modeling, and enterprise solutions leveraging Microsoft Power Platform (Power Apps, Power BI).",
        technologies: ["Scrum", "Microsoft Power Platform", "Power Apps", "Power BI"],
      },
      {
        id: "networks-iot",
        title: "Network Infrastructure, Security & IoT",
        icon: "ShieldCheck",
        color: "#f59e0b",
        description:
          "Hands-on skills in cybersecurity, local network administration, traffic analysis, and cyber-physical IoT prototyping with MQTT.",
        technologies: ["Linux", "Docker", "Nmap", "Wireshark", "VirtualBox"],
      },
    ],

    projects: [
      {
        id: 1,
        title: "MERGE-App (AI Music Classification)",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47",
        demoUrl: "",
        description:
          "Full-stack platform utilizing Artificial Intelligence and Machine Learning to interpret lyrics, audio signals, and generate advanced musical classifications.",
        tags: ["React", "Express.js", "PostgreSQL", "RabbitMQ", "Python", "Machine Learning", "Java"],
        highlights: [
          "Asynchronous event-driven messaging architecture powered by RabbitMQ",
          "Python Machine Learning pipeline integrated with Express.js backend and PostgreSQL database",
          "Intelligent text and acoustic parameter analysis for automated genre and mood classification",
        ],
      },
      {
        id: 2,
        title: "Distributed Cryptocurrency (P2P)",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: false,
        githubUrl: "",
        demoUrl: "",
        description:
          "High-performance distributed system built entirely in Java with RMI, focusing on parallel programming, thread synchronization, and network processing where clients manage digital wallets and trade assets atomically.",
        tags: ["Java", "Multi-threading", "Concurrency", "Network Sockets"],
        highlights: [
          "High-speed distributed communication over Java RMI and custom Network Sockets",
          "Advanced concurrency control preventing race conditions and double-spending across nodes",
          "Secure virtual wallet state management and atomic peer-to-peer asset exchange",
        ],
      },
      {
        id: 3,
        title: "Fluid Balancer (IoT)",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: false,
        githubUrl: "",
        demoUrl: "",
        description:
          "Prototyping and implementation of an Internet of Things system focused on efficient sensor messaging in Linux. Automatically balances fluid levels between two tanks using dual ultrasonic distance sensors.",
        tags: ["Linux", "Mosquitto (MQTT)", "HiveMQ", "PHP", "C", "Physical Sensors"],
        highlights: [
          "Embedded C firmware for analog/digital ultrasonic distance sensor telemetry",
          "Real-time event streaming via MQTT protocol through Mosquitto and HiveMQ brokers",
          "Automated continuous level balancing algorithms and system monitoring on Linux",
        ],
      },
      {
        id: 4,
        title: "GGData",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47",
        demoUrl: "",
        description:
          "Full-stack MVC platform allowing users to discover video game ratings, write comprehensive reviews, and explore aggregated gaming statistics.",
        tags: ["MVC", ".NET", "C#", "React"],
        highlights: [
          "Clean Model-View-Controller (MVC) architecture in .NET and C# with high decoupling",
          "Dynamic React frontend for catalog navigation, instant search, and community review submission",
          "Robust user management, secure authentication, and aggregate review scoring algorithms",
        ],
      },
      {
        id: 5,
        title: "Formify",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47",
        demoUrl: "",
        description:
          "Dynamic web platform for creating, editing, and managing customized digital forms. Developed to practice and apply the SCRUM agile framework, combining a reactive React frontend with C# backend services.",
        tags: ["React", "JavaScript", "C#", "HTML/CSS", "SCRUM", "Markdown"],
        highlights: [
          "End-to-end agile sprint planning and iterative product delivery applying SCRUM",
          "Modern and responsive React interface for dynamic form building and response submission",
          "Structured data processing, validation schemas, and backend architecture in C#",
        ],
      },
      {
        id: 7,
        title: "CRM - Job Application Tracker (JobTracker)",
        category: "in_progress",
        categoryLabel: "In Progress",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47/CRM",
        demoUrl: "",
        description:
          "Full-featured web platform to manage and track job applications across recruitment pipelines. Features live status tracking, pagination, and actionable analytics.",
        tags: ["C#", ".NET 10", "ASP.NET Core MVC", "PostgreSQL", "Entity Framework Core", "Docker"],
        highlights: [
          "Dashboard with aggregated real-time metrics tracking target companies and applications",
          "Secure user authentication and identity management powered by ASP.NET Core Identity",
          "Relational data architecture with Entity Framework Core and PostgreSQL running in Docker",
          "Multi-stage pipeline management with search and status filters (Submitted, Technical Test, Offer)",
        ],
      },
      {
        id: 8,
        title: "LoL Support Tracker",
        category: "completed",
        categoryLabel: "Completed",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47/LoL-Tracker",
        demoUrl: "",
        description:
          "Full-stack analytics web application for League of Legends, specifically engineered to evaluate Support role performance by consuming the official Riot Games API in real time.",
        tags: ["React", "TypeScript", "Vite", "C#", ".NET Core", "Riot Games API", "Redis", "Docker"],
        highlights: [
          "C# .NET Core backend API calculating specialized metrics (Vision per Minute, Kill Participation, Control Wards, Synergies)",
          "High-performance Redis caching layer to handle Riot Games API rate limiting seamlessly",
          "Modern React + TypeScript frontend featuring responsive KPI widgets and match outcome styling",
        ],
      },
      {
        id: 6,
        title: "Interactive Portfolio & AI-Assisted Dev",
        category: "in_progress",
        categoryLabel: "In Progress",
        hasGithub: true,
        githubUrl: "https://github.com/Telmo47/personal_website",
        demoUrl: "",
        description:
          "Personal engineering portfolio engineered with modern glassmorphism aesthetics and AI-assisted workflows for rapid component structuring and continuous deployment.",
        tags: ["React", "Vite", "Modern CSS", "Prompt Engineering"],
        highlights: [
          "Custom Dark Tech design system featuring glassmorphism cards and fluid micro-animations",
          "Accelerated agile development cycle leveraging AI agents and context engineering",
          "Zero-cost permanent static deployment on Vercel with automatic continuous GitHub deployment",
        ],
      },
    ],

    techStack: [
      {
        title: "Frontend & UI",
        icon: "Layout",
        color: "#00f2fe",
        items: ["React", "TypeScript", "Vite", "Modern HTML/CSS"],
      },
      {
        title: "Backend & Architecture",
        icon: "Server",
        color: "#9d4edd",
        items: ["C#", ".NET 10 / ASP.NET Core", "Java", "Express.js / Node.js", "Python"],
      },
      {
        title: "Databases, Cache & Messaging",
        icon: "Database",
        color: "#38ef7d",
        items: ["SQL (PostgreSQL)", "Redis", "Entity Framework Core", "RabbitMQ", "Mosquitto (MQTT) / HiveMQ"],
      },
      {
        title: "Infrastructure, Networks & Security",
        icon: "ShieldCheck",
        color: "#f59e0b",
        items: ["Linux", "Docker", "Nmap", "Wireshark"],
      },
      {
        title: "Enterprise Solutions & Methodologies",
        icon: "Briefcase",
        color: "#60a5fa",
        items: [
          "Microsoft Power Platform (Power Apps, Power BI)",
          "Agile Methodologies (Scrum)",
          "Git / Version Control",
        ],
      },
    ],

    academicTimeline: [
      {
        period: "Year 1 — Computing Foundations",
        title: "Logic, Algorithmic Thinking & Architecture",
        description:
          "Imperative programming in C, linear algebra, calculus, foundational data structures, and computer organization/circuits.",
        gradeHighlight: "Solid foundations in algorithmic thinking and computer architecture",
      },
      {
        period: "Year 2 — Systems & Engineering",
        title: "Advanced Structures, Databases & Concurrency",
        description:
          "Relational Database modeling & administration (SQL), Operating Systems (processes, threads, memory management, system calls), and Computer Networks.",
        gradeHighlight: "Excellence in Relational Data Modeling and Complex Structures",
      },
      {
        period: "Year 3 — Specialization & Capstone Engineering",
        title: "Web Development, Distributed Systems & Project",
        description:
          "Agile software engineering methodologies, distributed systems architecture, cybersecurity, and full-stack project design.",
        gradeHighlight: "Collaborative teamwork delivering end-to-end software solutions",
      },
      {
        period: "Degree Completed",
        title: "B.Sc. in Computer Science & Engineering Completed",
        description:
          "Degree 100% completed with comprehensive foundations in modern software development, distributed systems, and clean architecture. Ready for immediate onboarding.",
        gradeHighlight: "100% Graduated — Immediate Availability",
      },
    ],
  },
};

export const uiStrings = {
  pt: {
    nav: {
      home: "Início",
      focusAreas: "🎯 Especializações",
      projects: "🚀 Projetos",
      stack: "⚡ Stack",
      academic: "🎓 Percurso",
      contact: "📫 Contacto",
      downloadCv: "Descarregar CV",
    },
    hero: {
      titleLine1: "Construindo software",
      titleLine2: "robusto, elegante e escalável",
      btnProjects: "Explorar Projetos",
      btnCv: "Obter Currículo",
      btnContact: "Entrar em Contacto",
      quickHubTitle: "Acesso Rápido às Secções",
      quickHub: [
        { title: "Áreas de Especialização", desc: "IA, Sistemas, Ágil & Redes" },
        { title: "Pipeline de Projetos", desc: "Feitos, Em Curso e Backlog" },
        { title: "Percurso Académico", desc: "Licenciatura em Eng. Informática" },
        { title: "Stack Tecnológica", desc: "Linguagens & Ferramentas" },
        { title: "Contacto & CV", desc: "Links diretos e PDF" },
      ],
      statDegree: "Curso Concluído",
      statProjects: "Projetos no Hub",
      statAvailability: "Disponibilidade",
      academicCardTitle: "Formação: Licenciatura Concluída",
    },
    focusAreas: {
      badge: "Domínio & Competências Técnicas",
      title: "Áreas de Especialização",
      subtitle:
        "Pilares de competência em engenharia de software: da integração de Inteligência Artificial à computação distribuída, arquitetura de sistemas e segurança.",
      techLabel: "Tecnologias & Ferramentas:",
    },
    projects: {
      badge: "Showcase & Projetos Reais",
      title: "Pipeline de Projetos",
      subtitle:
        "Projetos práticos com foco em IA, sistemas distribuídos, arquitetura MVC e soluções IoT ciberfísicas.",
      filterAll: "Todos",
      filterCompleted: "Concluídos",
      filterInProgress: "Em Desenvolvimento",
      filterBacklog: "No Radar (Backlog)",
      btnCode: "Código",
      btnArchitecture: "Ver Arquitetura",
      btnDetails: "Detalhes",
      btnDemo: "Demonstração",
    },
    techStack: {
      badge: "Ferramentas & Tecnologias",
      title: "Stack Tecnológica",
      subtitle:
        "Conjunto de linguagens, frameworks, ferramentas de mensageria, sistemas e ambientes de trabalho utilizados nos meus projetos.",
    },
    academic: {
      badge: "Formação Curricular",
      title: "Percurso Académico",
      subtitle:
        "A jornada em Engenharia Informática: fundamentos teóricos rigorosos aliados à prática intensiva de projeto.",
    },
    contact: {
      badge: "Contacto Direto",
      headingLine1: "Pronto para impulsionar o teu próximo",
      headingLine2: "projeto de engenharia?",
      lead:
        "Estou ativamente disponível para oportunidades de emprego (Full-Time, Remoto, Híbrido ou Presencial). Sente-te à vontade para descarregar o meu currículo ou entrar em contacto direto por email ou LinkedIn.",
      btnCv: "Descarregar CV (PDF)",
      btnEmail: "Enviar Mensagem por Email",
    },
    modal: {
      engineeringHighlights: "Destaques de Engenharia & Arquitetura",
      technologiesUsed: "Tecnologias Utilizadas",
      viewCode: "Ver Código no GitHub",
      noPublicRepo: "🔒 Projeto sem repositório público (especificação sob consulta)",
      viewDemo: "Aceder à Demonstração",
      close: "Fechar",
    },
    footer: {
      text: "© 2026 Telmo Botelho. Todos os direitos reservados.",
      statusPill: "Pronto para o mercado de trabalho 🚀",
      backToTop: "Voltar ao Topo",
    },
    toast: {
      downloadingCv: "A transferir o Currículo de Telmo Botelho (PDF)...",
    },
  },

  en: {
    nav: {
      home: "Home",
      focusAreas: "🎯 Specializations",
      projects: "🚀 Projects",
      stack: "⚡ Stack",
      academic: "🎓 Journey",
      contact: "📫 Contact",
      downloadCv: "Download CV",
    },
    hero: {
      titleLine1: "Engineering software that is",
      titleLine2: "robust, elegant and scalable",
      btnProjects: "Explore Projects",
      btnCv: "Get Resume / CV",
      btnContact: "Get in Touch",
      quickHubTitle: "Quick Navigation Hub",
      quickHub: [
        { title: "Specializations", desc: "AI, Systems, Agile & Networks" },
        { title: "Projects Pipeline", desc: "Completed, Active & Backlog" },
        { title: "Academic Journey", desc: "B.Sc. in Computer Science" },
        { title: "Technology Stack", desc: "Languages & Tooling" },
        { title: "Contact & Resume", desc: "Direct Links & PDF" },
      ],
      statDegree: "Degree Completed",
      statProjects: "Projects in Hub",
      statAvailability: "Availability",
      academicCardTitle: "Education: B.Sc. Degree Completed",
    },
    focusAreas: {
      badge: "Domain & Technical Skills",
      title: "Areas of Specialization",
      subtitle:
        "Core software engineering pillars: from AI integration to distributed systems, scalable architectures, and network security.",
      techLabel: "Technologies & Tooling:",
    },
    projects: {
      badge: "Showcase & Production Projects",
      title: "Projects Pipeline",
      subtitle:
        "Hands-on engineering projects covering AI, distributed systems, MVC architecture, and cyber-physical IoT solutions.",
      filterAll: "All",
      filterCompleted: "Completed",
      filterInProgress: "In Progress",
      filterBacklog: "On Radar (Backlog)",
      btnCode: "Code",
      btnArchitecture: "View Architecture",
      btnDetails: "Details",
      btnDemo: "Live Demo",
    },
    techStack: {
      badge: "Tools & Ecosystem",
      title: "Technology Stack",
      subtitle:
        "Comprehensive suite of programming languages, frameworks, messaging tools, and system environments used across projects.",
    },
    academic: {
      badge: "Academic Rigor & Education",
      title: "Academic Journey",
      subtitle:
        "B.Sc. in Computer Science & Engineering: solid theoretical foundations paired with intensive hands-on lab projects.",
    },
    contact: {
      badge: "Direct Contact",
      headingLine1: "Ready to elevate your next",
      headingLine2: "engineering project?",
      lead:
        "I am actively available for career opportunities (Full-Time, Remote, Hybrid, or On-site). Feel free to download my resume/CV or connect directly via email or LinkedIn.",
      btnCv: "Download Full CV (PDF)",
      btnEmail: "Send Email Message",
    },
    modal: {
      engineeringHighlights: "Engineering & Architecture Highlights",
      technologiesUsed: "Technologies Used",
      viewCode: "View Code on GitHub",
      noPublicRepo: "🔒 Private repository (architecture spec available upon request)",
      viewDemo: "Launch Live Demo",
      close: "Close",
    },
    footer: {
      text: "© 2026 Telmo Botelho. All rights reserved.",
      statusPill: "Ready for high-impact engineering teams 🚀",
      backToTop: "Back to Top",
    },
    toast: {
      downloadingCv: "Downloading Telmo Botelho's CV (PDF)...",
    },
  },
};
