export type Language = 'es' | 'en';

export interface TranslationDictionary {
  nav: {
    links: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      certifications: string;
      contact: string;
    };
    roleSubtitle: string;
    available: string;
    availableMobile: string;
    switchToLight: string;
    switchToDark: string;
    switchLangAria: string;
    switchLangTitle: string;
    githubAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    cvShortMobile: string;
    cvExtendedMobile: string;
  };
  cv: {
    downloadLabel: string;
    downloadPdfLabel: string;
    selectVersion: string;
    shortTitle: string;
    shortBadge: string;
    shortDesc: string;
    extendedTitle: string;
    extendedBadge: string;
    extendedDesc: string;
    englishTitle: string;
    englishBadge: string;
    englishDesc: string;
    footerFormat: string;
    footerVerified: string;
  };
  hero: {
    badge: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtitle: string;
    exploreProjects: string;
    aboutMe: string;
    cards: {
      architectureTitle: string;
      architectureDesc: string;
      databaseTitle: string;
      databaseDesc: string;
      containersTitle: string;
      containersDesc: string;
      testingTitle: string;
      testingDesc: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    availabilityBadge: string;
    bio1Part1: string;
    bio1School: string;
    bio1Part2: string;
    bio2Part1: string;
    bio2Bold1: string;
    bio2Part2: string;
    bio2Bold2: string;
    bio3: string;
    metrics: {
      residency: string;
      tests: string;
      cloudBadges: string;
      degree: string;
    };
    education: {
      degree: string;
      school: string;
      description: string;
      status: string;
      languagesLabel: string;
      languagesValue: string;
    };
    timelineTitle: string;
    timelineBadge: string;
    milestones: Array<{
      period: string;
      title: string;
      institution: string;
      description: string;
      tags: string[];
    }>;
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillars: Array<{
      title: string;
      badge: string;
      description: string;
    }>;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    filterAll: string;
    categories: Record<
      'backend' | 'frontend' | 'database' | 'devops' | 'testing' | 'ai',
      {
        title: string;
        badge: string;
        description: string;
        practicalFocus: string;
        tabLabel: string;
      }
    >;
    skillNameOverrides: Record<string, string>;
    bannerTitle: string;
    bannerDesc: string;
    bannerTags: string[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    filterAll: string;
    searchPlaceholder: string;
    emptyTitle: string;
    emptySubtitle: string;
    itemLabel: string;
    categoryLabels: Record<'all' | 'mobile' | 'frontend' | 'backend' | 'database' | 'devops' | 'ai', string>;
    card: {
      inProgressFallback: string;
      featured: string;
      zoomHint: string;
      exploreButton: string;
      previewUnavailable: string;
      viewDetailsAria: string;
      screenshotAlt: string;
    };
    modal: {
      inProgressTitle: string;
      inProgressDesc: string;
      githubBackend: string;
      githubMain: string;
      githubFrontend: string;
      liveDemo: string;
      repoScreenshots: string;
      of: string;
      zoomTooltip: string;
      zoomButton: string;
      fallbackError: string;
      summaryTitle: string;
      highlightsTitle: string;
      architectureTitle: string;
      patternLabel: string;
      stateDataLabel: string;
      challengesTitle: string;
      decisionsTitle: string;
      fullStackTitle: string;
      close: string;
      exploreCode: string;
      closeAria: string;
      selectScreenshotAria: string;
    };
  };
  certifications: {
    badge: string;
    title: string;
    subtitlePart1: string;
    subtitleCloud: string;
    subtitlePart2: string;
    subtitleUdemy: string;
    subtitlePart3: string;
    subtitleTecNM: string;
    filterLabel: string;
    filterAll: string;
    filterCloud: string;
    filterUdemy: string;
    filterAcademic: string;
    topBadge: string;
    priorityPrefix: string;
    verifyButton: string;
    itemLabel: string;
    categoryLabels: Record<
      'cloud' | 'security' | 'ai' | 'backend' | 'frontend' | 'mobile' | 'devops' | 'academic' | 'other',
      string
    >;
  };
  contact: {
    availabilityBadge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    linkedinCta: string;
    githubCta: string;
    emailTitle: string;
    emailProtectedTooltip: string;
    copyEmailAria: string;
    sendMessage: string;
    copied: string;
    copy: string;
    sendDirectButton: string;
    connectLinkedinButton: string;
    exploreGithubButton: string;
    mailSubject: string;
    metaLocation: string;
    metaResponse: string;
    metaContact: string;
    metaQuality: string;
  };
  footer: {
    portfolioTagline: string;
    builtWith: string;
    usingTech: string;
  };
  pagination: {
    ariaPrefix: string;
    showing: string;
    of: string;
    previous: string;
    next: string;
    previousAria: string;
    nextAria: string;
  };
  lightbox: {
    defaultTitle: string;
    ariaPrefix: string;
    zoomInTitle: string;
    zoomOutTitle: string;
    resetTitle: string;
    closeTitle: string;
    prevTitle: string;
    nextTitle: string;
    hintClick: string;
    hintZoomOut: string;
    hintZoomIn: string;
    hintDrag: string;
    hintArrows: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  es: {
    nav: {
      links: {
        home: 'Inicio',
        about: 'Sobre Mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        certifications: 'Certificaciones',
        contact: 'Contacto',
      },
      roleSubtitle: 'Backend & Full-Stack Developer',
      available: 'Disponible',
      availableMobile: 'Disponible para proyectos',
      switchToLight: 'Cambiar a modo claro',
      switchToDark: 'Cambiar a modo oscuro',
      switchLangAria: 'Switch language to English',
      switchLangTitle: 'Cambiar idioma a Inglés (EN)',
      githubAria: 'Perfil de GitHub',
      openMenuAria: 'Abrir menú de navegación',
      closeMenuAria: 'Cerrar menú de navegación',
      cvShortMobile: 'CV (1 Pág)',
      cvExtendedMobile: 'CV (2 Págs)',
    },
    cv: {
      downloadLabel: 'Descargar CV',
      downloadPdfLabel: 'Descargar CV (PDF)',
      selectVersion: 'Selecciona una versión',
      shortTitle: 'CV Resumido (ES)',
      shortBadge: '1 Página',
      shortDesc: 'Ideal para lectura rápida de reclutadores y procesos con filtros ATS.',
      extendedTitle: 'CV Extendido (ES)',
      extendedBadge: '2 Páginas',
      extendedDesc: 'Incluye arquitectura detallada, MinIO S3 y todos los proyectos.',
      englishTitle: 'Resume in English (EN)',
      englishBadge: '1 Page',
      englishDesc: 'Versión en inglés optimizada para vacantes internacionales o remotas.',
      footerFormat: 'Formato PDF optimizado',
      footerVerified: 'Verificado 2026',
    },
    hero: {
      badge: 'Software Engineer | Backend & Full-Stack Developer',
      headlinePrefix: 'Egresado de Ingeniería en Sistemas Computacionales',
      headlineHighlight: 'enfocado en Backend y Full-Stack',
      subtitle:
        'Desarrollo aplicaciones web y APIs con enfoque en código mantenible, buenas prácticas y soluciones orientadas a necesidades reales.',
      exploreProjects: 'Explorar Proyectos',
      aboutMe: 'Sobre Mí',
      cards: {
        architectureTitle: 'Arquitectura Backend Modular',
        architectureDesc:
          'APIs REST con NestJS, Java (Spring Boot) y Laravel, arquitectura modular y tipado estricto.',
        databaseTitle: 'Bases de Datos & Caché',
        databaseDesc:
          'Modelado relacional con PostgreSQL, SQL (Oracle Mode) y MySQL, transacciones explícitas y caché con Redis.',
        containersTitle: 'Contenedores & Despliegue',
        containersDesc:
          'Empaquetado Docker multi-stage con imágenes Distroless non-root, OpenShift, Nginx y entornos Linux.',
        testingTitle: 'Testing & Control de Concurrencia',
        testingDesc:
          '1,625+ pruebas en Jest, JUnit 5 / JaCoCo en Java, 44 pruebas en Pest y control de concurrencia ACID.',
      },
    },
    about: {
      badge: 'Perfil Profesional & Trayectoria',
      title: 'Sobre Mí',
      subtitle:
        'Egresado de Ingeniería en Sistemas Computacionales enfocado en Backend y Full-Stack. Construyo software funcional con APIs REST, bases de datos relacionales, pruebas automatizadas y despliegue con Docker.',
      availabilityBadge: 'Disponible • Oaxaca, México • 100% Remoto / Presencial solo en Oaxaca',
      bio1Part1: 'Egresado de Ingeniería en Sistemas Computacionales por el ',
      bio1School: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
      bio1Part2: ', con residencia profesional concluida y titulación en trámite.',
      bio2Part1:
        'Cuento con experiencia comprobable desarrollando sistemas web institucionales y proyectos independientes, especializándome en backend con ',
      bio2Bold1: 'NestJS, Java (Spring Boot), Node.js y Laravel',
      bio2Part2: ', junto a interfaces reactivas en ',
      bio2Bold2: 'React y Vue 3',
      bio3: 'Mi forma de trabajo prioriza la estabilidad: diseño bases de datos relacionales con transacciones explícitas, aplico tipado estricto, escribo pruebas automatizadas y despliego servicios mediante contenedores Docker.',
      metrics: {
        residency: 'Residencia Profesional ITO',
        tests: 'Pruebas Automatizadas',
        cloudBadges: 'Insignias Cloud (AWS & GCP)',
        degree: 'Ingeniería TecNM / ITO',
      },
      education: {
        degree: 'Ingeniería en Sistemas Computacionales',
        school: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
        description:
          'Formación universitaria en arquitectura de software, bases de datos relacionales, estructuras de datos, POO y redes.',
        status: 'Egresado • Titulación en trámite',
        languagesLabel: 'Inglés:',
        languagesValue: 'B1/B2 (Documentación técnica)',
      },
      timelineTitle: 'Trayectoria & Hitos Clave',
      timelineBadge: 'Experiencia Verificable',
      milestones: [
        {
          period: '2025 — 2026',
          title: 'Backend Developer — Residencia Profesional',
          institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
          description:
            'Diseño y desarrollo de la arquitectura backend para el sistema de soporte técnico e inventario tecnológico del ITO. Implementado con NestJS, PostgreSQL, Redis, MinIO S3 y Docker, respaldado por una suite de 998 pruebas automatizadas organizadas en 143 suites (Jest).',
          tags: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Jest (998 pruebas / 143 suites)'],
        },
        {
          period: '2024 — Presente',
          title: 'Desarrollador Backend & Full-Stack — Proyectos de Ingeniería',
          institution: 'Nano-DevCode • Proyectos de Código Abierto',
          description:
            'Desarrollo de sistemas backend y full-stack: motor transaccional bancario con Java 25 y Spring Boot bajo arquitectura BBVA APX/ASO (SPEI con bloqueo FOR UPDATE, CEP XML, batch Control-M y 27 pruebas JUnit 5), plataforma SaaS empresarial con NestJS/Prisma (627 pruebas Jest), punto de venta con visión artificial (YOLOv8 97.1% mAP@50) y CMS en Laravel (44 pruebas Pest).',
          tags: ['Java / Spring Boot', 'Arquitectura APX/ASO', 'NestJS', 'YOLOv8', 'Laravel'],
        },
        {
          period: '2024 — Presente',
          title: 'Especialización en Nube, Seguridad & DevOps',
          institution: 'AWS & Google Cloud (Credly) • Udemy • INFOTEC',
          description:
            '16 acreditaciones oficiales en la nube (AWS Cloud Quest: Solutions Architect, AWS Cloud Practitioner y 14 insignias de Google Cloud) en arquitectura de soluciones, redes, infraestructura con Terraform, seguridad y modelos GenAI. Formación continua en APIs backend modulares, tipado estricto con TypeScript y contenedores Docker.',
          tags: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Linux', 'Testing'],
        },
        {
          period: '2021 — 2025',
          title: 'Ingeniería en Sistemas Computacionales',
          institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
          description:
            'Formación académica universitaria con bases en ingeniería de software, arquitectura de sistemas, diseño y normalización de bases de datos relacionales, estructuras de datos, programación orientada a objetos y redes de computadoras.',
          tags: ['Ingeniería de Software', 'Bases de Datos', 'Estructuras de Datos', 'Redes'],
        },
      ],
      pillarsEyebrow: 'Criterio Profesional',
      pillarsTitle: 'Pilares de Calidad & Prácticas de Ingeniería',
      pillarsSubtitle:
        'Principios que aplico en cada repositorio para garantizar código mantenible, confiable y listo para integrarse en equipo.',
      pillars: [
        {
          title: 'Arquitectura Backend Modular',
          badge: 'NestJS · Java · Laravel',
          description:
            'Módulos desacoplados con inyección de dependencias, tipado estricto de extremo a extremo, validación de DTOs/Records y separación estricta de capas.',
        },
        {
          title: 'Bases de Datos & Consistencia',
          badge: 'PostgreSQL · SQL · Redis',
          description:
            'Transacciones explícitas con QueryRunner o Spring @Transactional, bloqueo pesimista/optimista para evitar conflictos y caché en memoria con Redis.',
        },
        {
          title: 'Testing Automatizado & Calidad',
          badge: '1,650+ Pruebas Verificadas',
          description:
            '1,625 pruebas en Jest, 27 pruebas con JUnit 5 / JaCoCo en Java y 44 pruebas con 116 aserciones en Pest PHP. Código comprobado para evitar regresiones.',
        },
        {
          title: 'Contenedores & Despliegue',
          badge: 'Docker · OpenShift · Linux',
          description:
            'Empaquetado multi-stage con Docker (imágenes Distroless y ejecución non-root), Jenkins, OpenShift, proxy inverso Nginx y servidores Linux.',
        },
      ],
    },
    skills: {
      badge: 'Stack Tecnológico Verificable',
      title: 'Habilidades Técnicas',
      subtitle:
        'Tecnologías y herramientas aplicadas directamente en desarrollo backend, bases de datos relacionales, interfaces reactivas y pruebas automatizadas.',
      filterLabel: 'Filtrar área:',
      filterAll: 'Todas',
      categories: {
        backend: {
          title: 'Backend & APIs',
          badge: 'Arquitectura & Servicios',
          description:
            'Diseño e implementación de APIs REST modulares y motores transaccionales con inyección de dependencias, tipado estricto y separación de capas.',
          practicalFocus: 'Arquitectura modular, DTOs/Records validados y servicios desacoplados',
          tabLabel: 'Backend',
        },
        frontend: {
          title: 'Frontend & UI Web',
          badge: 'Interfaces & Reactividad',
          description:
            'Construcción de interfaces web modernas y adaptables, gestión reactiva de estado global y sincronización con APIs.',
          practicalFocus: 'Diseño responsive, estados globales y consumo eficiente de APIs',
          tabLabel: 'Frontend',
        },
        database: {
          title: 'Bases de Datos & Caché',
          badge: 'Persistencia & Transacciones',
          description:
            'Modelado entidad-relación, transacciones explícitas para consistencia atómica y optimización con memoria caché.',
          practicalFocus: 'Transacciones con QueryRunner / JDBC y prevención de condiciones de carrera',
          tabLabel: 'Bases de Datos',
        },
        devops: {
          title: 'DevOps, Cloud & Servidores',
          badge: 'Infraestructura & Contenedores',
          description:
            'Empaquetado en contenedores ligeros y seguros, aprovisionamiento de infraestructura y administración de entornos Linux.',
          practicalFocus: 'Docker multi-stage Distroless non-root, OpenShift e IaC con Terraform',
          tabLabel: 'DevOps',
        },
        testing: {
          title: 'Testing & Calidad de Código',
          badge: '1,650+ Pruebas Automatizadas',
          description:
            'Pruebas unitarias y de integración para garantizar que las reglas de negocio, endpoints y transacciones funcionen sin regresiones.',
          practicalFocus: '1,625 pruebas Jest en NestJS, JUnit 5 / JaCoCo en Java y Pest PHP en Laravel',
          tabLabel: 'Testing',
        },
        ai: {
          title: 'Visión Artificial & Modelos IA',
          badge: 'Inferencia Edge & CV',
          description:
            'Entrenamiento de modelos de detección sobre datasets reales, exportación para inferencia acelerada y aplicaciones con LLMs.',
          practicalFocus: 'Detección en tiempo real con YOLOv8 (~21 FPS con DirectML)',
          tabLabel: 'IA / Visión',
        },
      },
      skillNameOverrides: {},
      bannerTitle: 'Compromiso con el Código Defendible & Buenas Prácticas',
      bannerDesc:
        'Cada habilidad técnica mostrada está respaldada por proyectos públicos con código abierto, suites de pruebas automatizadas o acreditaciones oficiales.',
      bannerTags: ['TypeScript & Java', 'Docker Distroless', '1,650+ Tests'],
    },
    projects: {
      badge: 'Casos de Estudio & Código Real',
      title: 'Proyectos de Software Destacados',
      subtitle:
        'Proyectos desarrollados para resolver necesidades reales, con interfaces claras, lógica ordenada y un enfoque práctico en la funcionalidad.',
      filterLabel: 'Filtrar:',
      filterAll: 'Todos',
      searchPlaceholder: 'Buscar por tecnología o nombre...',
      emptyTitle: 'No se encontraron proyectos',
      emptySubtitle: 'Prueba cambiando la categoría seleccionada o el término de búsqueda.',
      itemLabel: 'proyectos',
      categoryLabels: {
        all: 'Todos',
        mobile: 'Mobile',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Bases de Datos',
        devops: 'DevOps',
        ai: 'IA',
      },
      card: {
        inProgressFallback: 'En Construcción',
        featured: 'Destacado',
        zoomHint: 'Ver con Zoom',
        exploreButton: 'Explorar arquitectura y retos',
        previewUnavailable: 'Preview no disponible',
        viewDetailsAria: 'Ver detalles técnicos de',
        screenshotAlt: 'Captura del proyecto',
      },
      modal: {
        inProgressTitle: 'Proyecto en Construcción Activa',
        inProgressDesc:
          'Plataforma empresarial de gran envergadura en desarrollo activo. El backend modular (NestJS) y el frontend web (React) disponen de arquitectura robusta, suite de pruebas automatizadas y documentación viva. El cliente móvil complementario se encuentra en etapa preliminar de desarrollo.',
        githubBackend: 'GitHub Backend',
        githubMain: 'Código en GitHub',
        githubFrontend: 'GitHub Frontend',
        liveDemo: 'Demo en vivo',
        repoScreenshots: 'Capturas directas del repositorio',
        of: 'de',
        zoomTooltip: 'Haz clic para ampliar la imagen y hacer zoom interactivo',
        zoomButton: 'Hacer Zoom',
        fallbackError: 'Error al cargar captura desde GitHub Raw',
        summaryTitle: 'Resumen del Proyecto',
        highlightsTitle: 'Aspectos Destacados de Implementación',
        architectureTitle: 'Arquitectura y Patrones',
        patternLabel: 'Patrón:',
        stateDataLabel: 'Estado y Datos:',
        challengesTitle: 'Retos Técnicos Superados',
        decisionsTitle: 'Decisiones Clave de Ingeniería',
        fullStackTitle: 'Stack Tecnológico Completo',
        close: 'Cerrar',
        exploreCode: 'Explorar Código',
        closeAria: 'Cerrar modal de proyecto',
        selectScreenshotAria: 'Seleccionar captura',
      },
    },
    certifications: {
      badge: 'Validación & Formación Continua',
      title: 'Certificaciones Oficiales & Especializaciones',
      subtitlePart1: 'Acreditaciones internacionales de ',
      subtitleCloud: 'Google Cloud y AWS (Credly)',
      subtitlePart2: ', cursos especializados de ',
      subtitleUdemy: 'Udemy',
      subtitlePart3: ' y formación académica del ',
      subtitleTecNM: 'TecNM / INFOTEC',
      filterLabel: 'Filtrar:',
      filterAll: 'Todas',
      filterCloud: 'AWS & Google Cloud (Credly)',
      filterUdemy: 'Especializaciones Udemy',
      filterAcademic: 'Académicas / TecNM',
      topBadge: 'Principal Acreditación',
      priorityPrefix: 'Prioridad #',
      verifyButton: 'Verificar credencial',
      itemLabel: 'certificaciones',
      categoryLabels: {
        cloud: 'Cloud & Architecture',
        security: 'Cloud Security / DevOps',
        ai: 'Data, ML & AI',
        backend: 'Backend & APIs',
        frontend: 'Frontend & Web Development',
        mobile: 'Mobile & Cross-Platform',
        devops: 'DevOps & Herramientas',
        academic: 'Formación Oficial / TecNM',
        other: 'Especialización',
      },
    },
    contact: {
      availabilityBadge: 'Disponible para Nuevas Oportunidades & Proyectos',
      titlePrefix: '¿Tienes algún proyecto o ',
      titleHighlight: 'oportunidad en mente',
      titleSuffix: '?',
      subtitle:
        'Estoy disponible para incorporarme a equipos de tecnología o colaborar en el desarrollo de APIs REST, servicios backend y aplicaciones full-stack.',
      linkedinCta: 'Conectar perfil profesional →',
      githubCta: 'Ver repositorios & proyectos →',
      emailTitle: 'Correo Electrónico',
      emailProtectedTooltip: 'Protegido con ofuscación anti-bot',
      copyEmailAria: 'Copiar correo al portapapeles',
      sendMessage: 'Enviar mensaje →',
      copied: '¡Copiado!',
      copy: 'Copiar',
      sendDirectButton: 'Enviar Mensaje Directo',
      connectLinkedinButton: 'Conectar en LinkedIn',
      exploreGithubButton: 'Explorar GitHub',
      mailSubject: 'Contacto Profesional - Portafolio de Software Engineer',
      metaLocation: 'Oaxaca, México (CST / UTC-6) • 100% Remoto / Presencial solo en Oaxaca',
      metaResponse: 'Respuesta habitual en menos de 24 horas',
      metaContact: 'Contacto directo vía correo o LinkedIn',
      metaQuality: 'Código limpio, pruebas y buenas prácticas',
    },
    footer: {
      portfolioTagline: '• Portafolio de Ingeniería de Software',
      builtWith: 'Construido con',
      usingTech: 'usando React, Vite, TypeScript & Tailwind CSS.',
    },
    pagination: {
      ariaPrefix: 'Paginación de',
      showing: 'Mostrando',
      of: 'de',
      previous: 'Anterior',
      next: 'Siguiente',
      previousAria: 'Página anterior',
      nextAria: 'Página siguiente',
    },
    lightbox: {
      defaultTitle: 'Captura de pantalla',
      ariaPrefix: 'Visor con zoom:',
      zoomInTitle: 'Acercar (+)',
      zoomOutTitle: 'Alejar (-)',
      resetTitle: 'Restablecer (100%)',
      closeTitle: 'Cerrar (Esc)',
      prevTitle: 'Captura anterior (Flecha Izquierda)',
      nextTitle: 'Siguiente captura (Flecha Derecha)',
      hintClick: 'Clic para hacer zoom',
      hintZoomOut: 'Alejar',
      hintZoomIn: 'Acercar',
      hintDrag: 'Arrastra para desplazar',
      hintArrows: 'Flechas para navegar',
    },
  },
  en: {
    nav: {
      links: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        certifications: 'Certifications',
        contact: 'Contact',
      },
      roleSubtitle: 'Backend & Full-Stack Developer',
      available: 'Available',
      availableMobile: 'Available for opportunities',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      switchLangAria: 'Cambiar idioma a Español',
      switchLangTitle: 'Switch language to Spanish (ES)',
      githubAria: 'GitHub Profile',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      cvShortMobile: 'Resume (EN)',
      cvExtendedMobile: 'CV (2 Pages)',
    },
    cv: {
      downloadLabel: 'Download Resume',
      downloadPdfLabel: 'Download Resume (PDF)',
      selectVersion: 'Select a version',
      shortTitle: 'Short CV (ES)',
      shortBadge: '1 Page',
      shortDesc: 'Ideal for quick recruiter review and ATS screening in Spanish.',
      extendedTitle: 'Extended CV (ES)',
      extendedBadge: '2 Pages',
      extendedDesc: 'Includes detailed architecture, MinIO S3, and all projects in Spanish.',
      englishTitle: 'Resume in English (EN)',
      englishBadge: '1 Page',
      englishDesc: 'English version tailored for international and remote engineering roles.',
      footerFormat: 'ATS-optimized PDF format',
      footerVerified: 'Verified 2026',
    },
    hero: {
      badge: 'Software Engineer | Backend & Full-Stack Developer',
      headlinePrefix: 'Computer Systems Engineering Graduate',
      headlineHighlight: 'focused on Backend & Full-Stack',
      subtitle:
        'I build web applications and REST APIs focused on maintainable code, engineering best practices, and real-world business solutions.',
      exploreProjects: 'Explore Projects',
      aboutMe: 'About Me',
      cards: {
        architectureTitle: 'Modular Backend Architecture',
        architectureDesc:
          'REST APIs with NestJS, Java (Spring Boot), and Laravel using modular layers and strict typing.',
        databaseTitle: 'Databases & Caching',
        databaseDesc:
          'Relational modeling with PostgreSQL, SQL (Oracle Mode), and MySQL, explicit transactions, and Redis caching.',
        containersTitle: 'Containers & Deployment',
        containersDesc:
          'Multi-stage Docker builds with non-root Distroless images, OpenShift, Nginx reverse proxy, and Linux.',
        testingTitle: 'Testing & Concurrency Control',
        testingDesc:
          '1,625+ Jest tests, JUnit 5 / JaCoCo in Java, 44 Pest PHP tests, and ACID concurrency safeguards.',
      },
    },
    about: {
      badge: 'Professional Profile & Background',
      title: 'About Me',
      subtitle:
        'Computer Systems Engineering graduate focused on Backend and Full-Stack development. I build reliable software with REST APIs, relational databases, automated testing, and Docker.',
      availabilityBadge: 'Available • Oaxaca, Mexico • 100% Remote / Local On-Site Only',
      bio1Part1: 'Computer Systems Engineering graduate from the ',
      bio1School: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
      bio1Part2: ', with professional residency completed and degree in progress.',
      bio2Part1:
        'I have hands-on experience building institutional web systems and independent engineering projects, specializing in backend development with ',
      bio2Bold1: 'NestJS, Java (Spring Boot), Node.js, and Laravel',
      bio2Part2: ', alongside reactive interfaces in ',
      bio2Bold2: 'React and Vue 3',
      bio3: 'My workflow prioritizes reliability: I design relational databases with explicit transactions, enforce strict typing, write automated test suites, and containerize services with Docker.',
      metrics: {
        residency: 'ITO Professional Residency',
        tests: 'Automated Tests',
        cloudBadges: 'Cloud Badges (AWS & GCP)',
        degree: 'Engineering Degree (ITO)',
      },
      education: {
        degree: 'B.S. in Computer Systems Engineering',
        school: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
        description:
          'University degree covering software engineering, systems architecture, relational database design, data structures, OOP, and networking.',
        status: 'Graduate • Degree in progress',
        languagesLabel: 'English:',
        languagesValue: 'B1/B2 (Technical documentation)',
      },
      timelineTitle: 'Experience & Key Milestones',
      timelineBadge: 'Verifiable Experience',
      milestones: [
        {
          period: '2025 — 2026',
          title: 'Backend Developer — Professional Residency',
          institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
          description:
            'Designed and developed the backend architecture for ITO’s IT support helpdesk and asset inventory system. Built with NestJS, PostgreSQL, Redis, MinIO S3, and Docker, backed by 998 automated tests across 143 Jest suites.',
          tags: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Jest (998 tests / 143 suites)'],
        },
        {
          period: '2024 — Present',
          title: 'Backend & Full-Stack Developer — Engineering Projects',
          institution: 'Nano-DevCode • Open Source Projects',
          description:
            'Built backend and full-stack systems: a Java 25 & Spring Boot banking core simulator under BBVA APX/ASO architecture (SPEI with SELECT FOR UPDATE, CEP XML, Control-M batch, and 27 JUnit 5 tests), an enterprise SaaS platform with NestJS/Prisma (627 Jest tests), a computer-vision POS (YOLOv8 97.1% mAP@50), and a Laravel CMS (44 Pest tests).',
          tags: ['Java / Spring Boot', 'APX/ASO Architecture', 'NestJS', 'YOLOv8', 'Laravel'],
        },
        {
          period: '2024 — Present',
          title: 'Cloud, Security & DevOps Specialization',
          institution: 'AWS & Google Cloud (Credly) • Udemy • INFOTEC',
          description:
            '16 verified cloud credentials (AWS Cloud Quest: Solutions Architect, AWS Cloud Practitioner, and 14 Google Cloud badges) in solution architecture, networking, Terraform IaC, security, and GenAI. Continuous training in modular backend APIs, strict TypeScript, and Docker containers.',
          tags: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Linux', 'Testing'],
        },
        {
          period: '2021 — 2025',
          title: 'B.S. in Computer Systems Engineering',
          institution: 'Instituto Tecnológico de Oaxaca (TecNM / ITO)',
          description:
            'University engineering program focused on software engineering, systems architecture, relational database normalization, data structures, object-oriented programming, and computer networks.',
          tags: ['Software Engineering', 'Databases', 'Data Structures', 'Networking'],
        },
      ],
      pillarsEyebrow: 'Engineering Standards',
      pillarsTitle: 'Quality Pillars & Engineering Practices',
      pillarsSubtitle:
        'Principles I apply across every repository to ensure maintainable, reliable, and team-ready code.',
      pillars: [
        {
          title: 'Modular Backend Architecture',
          badge: 'NestJS · Java · Laravel',
          description:
            'Decoupled modules with dependency injection, end-to-end strict typing, validated DTOs/Records, and clean layer separation.',
        },
        {
          title: 'Databases & Consistency',
          badge: 'PostgreSQL · SQL · Redis',
          description:
            'Explicit transactions via QueryRunner or Spring @Transactional, pessimistic/optimistic locking to prevent race conditions, and Redis caching.',
        },
        {
          title: 'Automated Testing & Quality',
          badge: '1,650+ Verified Tests',
          description:
            '1,625 Jest tests, 27 JUnit 5 / JaCoCo tests in Java, and 44 Pest PHP tests (116 assertions). Tested code to prevent regressions.',
        },
        {
          title: 'Containers & Deployment',
          badge: 'Docker · OpenShift · Linux',
          description:
            'Multi-stage Docker builds (non-root Distroless images), Jenkins pipelines, OpenShift manifests, Nginx reverse proxy, and Linux servers.',
        },
      ],
    },
    skills: {
      badge: 'Verifiable Tech Stack',
      title: 'Technical Skills',
      subtitle:
        'Technologies and tools applied directly in backend engineering, relational databases, reactive frontends, and automated testing.',
      filterLabel: 'Filter area:',
      filterAll: 'All',
      categories: {
        backend: {
          title: 'Backend & APIs',
          badge: 'Architecture & Services',
          description:
            'Design and implementation of modular REST APIs and transactional engines with dependency injection, strict typing, and clean layer separation.',
          practicalFocus: 'Modular architecture, validated DTOs/Records, and decoupled services',
          tabLabel: 'Backend',
        },
        frontend: {
          title: 'Frontend & Web UI',
          badge: 'Interfaces & Reactivity',
          description:
            'Building modern responsive web interfaces, reactive global state management, and efficient API synchronization.',
          practicalFocus: 'Responsive design, global state stores, and zero-polling API sync',
          tabLabel: 'Frontend',
        },
        database: {
          title: 'Databases & Caching',
          badge: 'Persistence & Transactions',
          description:
            'Entity-relationship modeling, explicit transactions for atomic consistency, and in-memory cache optimization.',
          practicalFocus: 'QueryRunner / JDBC transactions and race-condition prevention',
          tabLabel: 'Databases',
        },
        devops: {
          title: 'DevOps, Cloud & Servers',
          badge: 'Infrastructure & Containers',
          description:
            'Lightweight secure container packaging, infrastructure provisioning, CI/CD pipelines, and Linux administration.',
          practicalFocus: 'Multi-stage non-root Distroless Docker, OpenShift, and Terraform IaC',
          tabLabel: 'DevOps',
        },
        testing: {
          title: 'Testing & Code Quality',
          badge: '1,650+ Automated Tests',
          description:
            'Unit and integration testing to guarantee business rules, API endpoints, and transactions run without regressions.',
          practicalFocus: '1,625 Jest tests in NestJS, JUnit 5 / JaCoCo in Java, and Pest PHP in Laravel',
          tabLabel: 'Testing',
        },
        ai: {
          title: 'Computer Vision & AI Models',
          badge: 'Edge Inference & CV',
          description:
            'Training object detection models on real datasets, exporting for hardware-accelerated inference, and LLM-powered apps.',
          practicalFocus: 'Real-time detection with YOLOv8 (~21 FPS via DirectML)',
          tabLabel: 'AI / Vision',
        },
      },
      skillNameOverrides: {
        'APIs REST (JSON / XML)': 'REST APIs (JSON / XML)',
        'Arquitectura APX / ASO': 'APX / ASO Architecture',
        'Redis (Caché & Rate Limiting)': 'Redis (Cache & Rate Limiting)',
        'Concurrencia Optimista': 'Optimistic Concurrency',
        'Jest (1,625 pruebas en NestJS)': 'Jest (1,625 NestJS tests)',
        'Pest PHP (44 pruebas / 116 aserciones)': 'Pest PHP (44 tests / 116 assertions)',
        'Pruebas Unitarias & E2E': 'Unit & E2E Testing',
        'Mocks & Reflexión Arquitectónica': 'Mocks & Architectural Reflection',
      },
      bannerTitle: 'Commitment to Defensible Code & Engineering Best Practices',
      bannerDesc:
        'Every technical skill listed is backed by public open-source repositories, automated test suites, or verified cloud credentials.',
      bannerTags: ['TypeScript & Java', 'Distroless Docker', '1,650+ Tests'],
    },
    projects: {
      badge: 'Case Studies & Real Code',
      title: 'Featured Software Projects',
      subtitle:
        'Projects built to solve real-world problems with clear interfaces, structured architecture, and a practical focus on reliability.',
      filterLabel: 'Filter:',
      filterAll: 'All',
      searchPlaceholder: 'Search by technology or name...',
      emptyTitle: 'No projects found',
      emptySubtitle: 'Try changing the selected category or search query.',
      itemLabel: 'projects',
      categoryLabels: {
        all: 'All',
        mobile: 'Mobile',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        devops: 'DevOps',
        ai: 'AI',
      },
      card: {
        inProgressFallback: 'In Progress',
        featured: 'Featured',
        zoomHint: 'View with Zoom',
        exploreButton: 'Explore architecture & challenges',
        previewUnavailable: 'Preview unavailable',
        viewDetailsAria: 'View technical details of',
        screenshotAlt: 'Project screenshot',
      },
      modal: {
        inProgressTitle: 'Project Actively in Development',
        inProgressDesc:
          'Large-scale enterprise platform currently under active development. The modular backend (NestJS) and web frontend (React) feature robust architecture, automated test suites, and living documentation. The companion mobile client is in its initial development stage.',
        githubBackend: 'Backend GitHub',
        githubMain: 'Source on GitHub',
        githubFrontend: 'Frontend GitHub',
        liveDemo: 'Live Demo',
        repoScreenshots: 'Direct repository screenshots',
        of: 'of',
        zoomTooltip: 'Click to enlarge image and use interactive zoom',
        zoomButton: 'Zoom In',
        fallbackError: 'Failed to load screenshot from GitHub Raw',
        summaryTitle: 'Project Overview',
        highlightsTitle: 'Implementation Highlights',
        architectureTitle: 'Architecture & Patterns',
        patternLabel: 'Pattern:',
        stateDataLabel: 'State & Data:',
        challengesTitle: 'Technical Challenges Solved',
        decisionsTitle: 'Key Engineering Decisions',
        fullStackTitle: 'Complete Tech Stack',
        close: 'Close',
        exploreCode: 'Explore Code',
        closeAria: 'Close project modal',
        selectScreenshotAria: 'Select screenshot',
      },
    },
    certifications: {
      badge: 'Validation & Continuous Learning',
      title: 'Official Certifications & Specializations',
      subtitlePart1: 'International credentials from ',
      subtitleCloud: 'Google Cloud & AWS (Credly)',
      subtitlePart2: ', specialized courses from ',
      subtitleUdemy: 'Udemy',
      subtitlePart3: ', and academic training from ',
      subtitleTecNM: 'TecNM / INFOTEC',
      filterLabel: 'Filter:',
      filterAll: 'All',
      filterCloud: 'AWS & Google Cloud (Credly)',
      filterUdemy: 'Udemy Specializations',
      filterAcademic: 'Academic / TecNM',
      topBadge: 'Top Credential',
      priorityPrefix: 'Priority #',
      verifyButton: 'Verify credential',
      itemLabel: 'certifications',
      categoryLabels: {
        cloud: 'Cloud & Architecture',
        security: 'Cloud Security / DevOps',
        ai: 'Data, ML & AI',
        backend: 'Backend & APIs',
        frontend: 'Frontend & Web Development',
        mobile: 'Mobile & Cross-Platform',
        devops: 'DevOps & Tooling',
        academic: 'Official Training / TecNM',
        other: 'Specialization',
      },
    },
    contact: {
      availabilityBadge: 'Available for New Opportunities & Projects',
      titlePrefix: 'Have a project or ',
      titleHighlight: 'opportunity in mind',
      titleSuffix: '?',
      subtitle:
        'I am available to join engineering teams or collaborate on REST APIs, backend services, and full-stack web applications.',
      linkedinCta: 'Connect on LinkedIn →',
      githubCta: 'Browse repos & projects →',
      emailTitle: 'Email Address',
      emailProtectedTooltip: 'Protected with anti-bot obfuscation',
      copyEmailAria: 'Copy email to clipboard',
      sendMessage: 'Send message →',
      copied: 'Copied!',
      copy: 'Copy',
      sendDirectButton: 'Send Direct Email',
      connectLinkedinButton: 'Connect on LinkedIn',
      exploreGithubButton: 'Explore GitHub',
      mailSubject: 'Professional Inquiry - Software Engineer Portfolio',
      metaLocation: 'Oaxaca, Mexico (CST / UTC-6) • 100% Remote / Local On-Site Only',
      metaResponse: 'Typical response in under 24 hours',
      metaContact: 'Direct contact via email or LinkedIn',
      metaQuality: 'Clean code, automated tests & best practices',
    },
    footer: {
      portfolioTagline: '• Software Engineering Portfolio',
      builtWith: 'Built with',
      usingTech: 'using React, Vite, TypeScript & Tailwind CSS.',
    },
    pagination: {
      ariaPrefix: 'Pagination for',
      showing: 'Showing',
      of: 'of',
      previous: 'Previous',
      next: 'Next',
      previousAria: 'Previous page',
      nextAria: 'Next page',
    },
    lightbox: {
      defaultTitle: 'Screenshot',
      ariaPrefix: 'Zoom viewer:',
      zoomInTitle: 'Zoom in (+)',
      zoomOutTitle: 'Zoom out (-)',
      resetTitle: 'Reset (100%)',
      closeTitle: 'Close (Esc)',
      prevTitle: 'Previous screenshot (Left Arrow)',
      nextTitle: 'Next screenshot (Right Arrow)',
      hintClick: 'Click to zoom',
      hintZoomOut: 'Zoom out',
      hintZoomIn: 'Zoom in',
      hintDrag: 'Drag to pan',
      hintArrows: 'Arrows to navigate',
    },
  },
};
