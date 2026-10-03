import type { Project } from '../types/project';

// Base raw de los repositorios públicos en GitHub
const MOVIE_APP_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/movie-app-react-native/main/assets/readme-images';
const VUE_ECOMMERCE_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/vue-3-ecommerce/main/assets/readme-images';
const LARAVEL_BLOG_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/Laravel12Blog/main/docs/screenshots';
const TIENDITA_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/Tiendita/main/docs';
const TIENDITA_ASSETS_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/Tiendita/main/assets/readme-images';
const TIENDITA_INFO_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/Tiendita/main/info';
const SOPORTE_BACKEND_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/soporte-tecnico-backend/master/docs/images';
const SOPORTE_FRONTEND_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/soporte-tecnico-frontend/main/docs/screenshots';

export const projects: Project[] = [
  {
    id: 'soporte-tecnico-frontend',
    title: 'Soporte Técnico — Service Desk & ITSM Frontend',
    tagline: 'Plataforma empresarial de Service Desk, monitoreo de SLA en tiempo real y trazabilidad con React 19, TypeScript, TanStack Query 5 y Tailwind CSS v4',
    description:
      'Aplicación Single Page Application (SPA) de grado empresarial diseñada bajo estándares ITIL / ITSM para la administración integral del ciclo de vida de incidencias técnicas, monitoreo proactivo de acuerdos de nivel de servicio (SLA), auditoría inmutable de cambios (Change Data Capture) y control de activos TI para el Instituto Tecnológico de Oaxaca (ITO / TecNM). Implementa arquitectura modular orientada al dominio con React 19, TypeScript 5 y Vite 8; comunicación bidireccional en tiempo real con Socket.io acoplada a invalidación reactiva de caché en TanStack Query v5 (zero-polling); control de acceso por roles (RBAC) con 9 perfiles institucionales; visor de diferencias (Diff Viewer) para auditoría; paleta de comandos asistida por teclado (cmdk); soporte multilenguaje completo con i18next (Español / Inglés) y modo dual Claro/Oscuro.',
    highlights: [
      'Arquitectura moderna con React 19, TypeScript 5.x y empaquetado optimizado con Vite 8 (SWC)',
      'Tiempo real bidireccional con Socket.io acoplado a invalidación reactiva de caché en TanStack Query v5',
      'Monitoreo proactivo de SLA con alertas tempranas, barras de progreso y cálculo dinámico de tiempos críticos',
      'Visor diferencial de auditoría (Diff Viewer) para trazabilidad inmutable (CDC) con Request-ID e IP',
      'Control de acceso granular por roles (RBAC) con 9 perfiles institucionales y rotación silenciosa de tokens',
      'Soporte internacional con i18next (Español / Inglés) y navegación asistida por comandos (cmdk)',
      'Sistema de diseño responsivo de alta densidad visual con Tailwind CSS v4 y soporte dual de temas'
    ],
    tags: [
      { name: 'React 19', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'TanStack Query v5', category: 'frontend' },
      { name: 'Tailwind CSS v4', category: 'frontend' },
      { name: 'Zustand 5', category: 'frontend' },
      { name: 'Socket.io', category: 'frontend' },
      { name: 'Vite 8', category: 'frontend' },
      { name: 'i18next', category: 'frontend' },
      { name: 'Docker', category: 'devops' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/soporte-tecnico-frontend',
    liveUrl: undefined,
    images: {
      thumbnail: `${SOPORTE_FRONTEND_RAW}/02-dashboard/01-dashboard-overview.png`,
      gallery: [
        `${SOPORTE_FRONTEND_RAW}/02-dashboard/01-dashboard-overview.png`,
        `${SOPORTE_FRONTEND_RAW}/03-tickets/01-current-tickets-list.png`,
        `${SOPORTE_FRONTEND_RAW}/03-tickets/06-ticket-detail-view.png`,
        `${SOPORTE_FRONTEND_RAW}/03-tickets/07-ticket-stepper-timeline.png`,
        `${SOPORTE_FRONTEND_RAW}/04-sla/01-sla-dashboard-view.png`,
        `${SOPORTE_FRONTEND_RAW}/05-audit/02-audit-diff-dialog.png`,
        `${SOPORTE_FRONTEND_RAW}/06-equipments/01-equipments-catalog.png`,
        `${SOPORTE_FRONTEND_RAW}/07-consumables/01-consumables-stock-list.png`,
        `${SOPORTE_FRONTEND_RAW}/09-reports-folios/01-technical-reports-list.png`,
        `${SOPORTE_FRONTEND_RAW}/11-ui-features/01-dark-mode-theme.png`,
        `${SOPORTE_FRONTEND_RAW}/11-ui-features/02-language-switcher.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Arquitectura modular orientada a dominios (Domain-Driven UI) con separación estricta entre Capa de Presentación (componentes atómicos y vistas de layout), Capa de Acceso a Datos (Hooks de consumo TanStack Query con stale-while-revalidate e interceptores Axios) y Capa de Estado Global del Cliente (Zustand para autenticación, RBAC y preferencias de interfaz).',
      stateAndDataManagement:
        'Estrategia de dos niveles: estado del servidor orquestado mediante TanStack React Query v5 con sincronización por WebSockets (invalidación de queries en tiempo real ante eventos de Socket.io sin sondeo continuo); estado del cliente en Zustand con persistencia en localStorage para tokens JWT y perfil de usuario; control estricto de expiración de sesión por inactividad con verificación de ciclo de vida en ventana (visibilityState).',
      keyChallenges: [
        'Sincronización multi-cliente en tiempo real de estados de tickets de alta prioridad evitando condiciones de carrera en la UI mediante invalidación dirigida de caché en React Query.',
        'Implementación de un comparador visual de diferencias (Diff Viewer) para auditoría Change Data Capture (CDC) capaz de procesar y colorear diferencias entre objetos JSON anidados con latencia cero.',
        'Garantía de rendimiento y 60 FPS en tablas densas con miles de registros de activos e inventario utilizando filtrado memoizado y diseño de alta densidad con Tailwind CSS v4.'
      ],
      engineeringDecisions: [
        'Adopción de React 19 con Vite 8 (SWC) para compilaciones ultrarrápidas y optimización moderna de hooks sin sobrecarga de runtime.',
        'Integración de i18next para internacionalización integral y paleta de comandos cmdk para acceso rápido accesible mediante atajos de teclado (Ctrl+K / Cmd+K).',
        'Implementación de interceptor Axios para rotación silenciosa de refresh tokens ante respuestas 401, reintentando automáticamente peticiones concurrentes encoladas sin interrupción para el usuario.'
      ]
    }
  },
  {
    id: 'soporte-tecnico-backend',
    title: 'ITSM & Service Desk Backend — Enterprise API',
    tagline: 'Backend empresarial de Mesa de Ayuda y Gestión de Activos TI con NestJS 11, PostgreSQL 17, Redis 8, MinIO S3 y Docker Distroless',
    description:
      'Plataforma de alta concurrencia y grado corporativo para la gestión de tickets de soporte técnico, control de ciclo de vida de activos TI e inventario desarrollada para el Instituto Tecnológico de Oaxaca (ITO / TecNM). Implementa Clean Architecture con NestJS 11 y TypeScript 5.7+ sin shims ni barrels para evitar referencias circulares; control de concurrencia optimista (@VersionColumn), transacciones atómicas ACID mediante QueryRunner, búsqueda full-text optimizada con índices GIN y tsvector en PostgreSQL 17, capa de caching y rate-limiting en Redis 8, almacenamiento de evidencias compatible con AWS S3 en MinIO, WebSockets en tiempo real (Socket.IO + Redis Adapter), integración con Telegram Bot y una suite exhaustiva de 998 pruebas unitarias en 143 suites de Jest.',
    highlights: [
      'Arquitectura limpia empresarial con NestJS 11, TypeScript 5.7+ y principios SOLID sin atajos de tipado',
      'Control de concurrencia optimista con @VersionColumn y transacciones ACID atómicas con QueryRunner en TypeORM',
      'Base de datos PostgreSQL 17 con búsqueda Full-Text rápida (tsvector + GIN) y contenedor migrator desacoplado sin downtime',
      'Capa de rendimiento y seguridad con Redis 8 (caching reactivo y rate-limiting) y almacenamiento de evidencias en MinIO S3',
      'Eventos y telemetría en tiempo real mediante WebSockets (Socket.IO + Redis) y bot bidireccional de Telegram',
      'Infraestructura robusta en Docker multi-stage con runner ultra-seguro Google Distroless (nonroot) y proxy Nginx',
      'Calidad certificada con suite de 998 pruebas unitarias en 143 test suites en Jest con mocks aislados'
    ],
    tags: [
      { name: 'NestJS 11', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'PostgreSQL 17', category: 'database' },
      { name: 'Redis 8', category: 'database' },
      { name: 'Docker Distroless', category: 'devops' },
      { name: 'TypeORM (ACID)', category: 'backend' },
      { name: 'MinIO S3', category: 'devops' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'Nginx', category: 'devops' },
      { name: 'Jest (998 Tests)', category: 'backend' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/soporte-tecnico-backend',
    liveUrl: undefined,
    images: {
      thumbnail: `${SOPORTE_BACKEND_RAW}/00-system-architecture-overview.png`,
      gallery: [
        `${SOPORTE_BACKEND_RAW}/00-system-architecture-overview.png`,
        `${SOPORTE_BACKEND_RAW}/03-database-erd.png`,
        `${SOPORTE_BACKEND_RAW}/08-data-storage-concurrency.png`,
        `${SOPORTE_BACKEND_RAW}/07-async-queues-workers.png`,
        `${SOPORTE_BACKEND_RAW}/06-telegram-bot.png`,
        `${SOPORTE_BACKEND_RAW}/1.1.png`,
        `${SOPORTE_BACKEND_RAW}/1.2.png`,
        `${SOPORTE_BACKEND_RAW}/1.3.png`,
        `${SOPORTE_BACKEND_RAW}/1.4.png`,
        `${SOPORTE_BACKEND_RAW}/2.1.png`,
        `${SOPORTE_BACKEND_RAW}/2.2.png`,
        `${SOPORTE_BACKEND_RAW}/2.3.png`,
        `${SOPORTE_BACKEND_RAW}/4.1.png`,
        `${SOPORTE_BACKEND_RAW}/5.1.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Clean Architecture modular desacoplada por dominios de negocio (Tickets, Activos TI, Movimientos, Usuarios/Staff, Catálogos y Auditoría). Eliminación estricta de barrel files (index.ts) para evitar dependencias circulares y optimizar el tree-shaking; controladores delgados, servicios de aplicación aislados con inyección de dependencias y suscriptores de eventos asíncronos.',
      stateAndDataManagement:
        'Persistencia relacional en PostgreSQL 17 con TypeORM: control de concurrencia optimista mediante @VersionColumn para mitigar condiciones de carrera concurrentes en la asignación de tickets; transacciones atómicas manuales con QueryRunner para movimientos de almacén e inventario multietapa; índices GIN con vectores tsvector en español para búsqueda textual sub-milisegundo; almacenamiento de evidencias digitales en MinIO S3 y caché distribuida con Redis 8.',
      keyChallenges: [
        'Garantizar consistencia atómica y trazabilidad estricta en las transferencias de activos tecnológicos entre departamentos universitarios sin bloqueos de tabla prolongados.',
        'Orquestación de WebSocket gateways con Socket.IO y Redis Adapter para propagación instantánea de eventos de tickets hacia múltiples clientes administrativos sin pérdida de paquetes.',
        'Aseguramiento del despliegue en contenedores Docker mediante imágenes Google Distroless (Node.js 22 LTS sobre Debian 12) ejecutándose bajo usuario "nonroot" sin shell ni utilitarios de compilación para máxima seguridad en producción.'
      ],
      engineeringDecisions: [
        'Adopción de un contenedor "migrator" desacoplado que ejecuta las migraciones de TypeORM previo al encendido del backend, erradicando synchronize:true en producción.',
        'Desarrollo de una suite exhaustiva de 998 pruebas unitarias en Jest (143 suites) con mocks rigurosos de Repositorios, DataSource y servicios de configuración, alcanzando alta resiliencia y tipado estricto sin "any".',
        'Configuración modular de variables de entorno mediante ConfigModule tipado y validado en tiempo de arranque con esquema de validación estricto Joi.'
      ]
    }
  },
  {
    id: 'vue-3-ecommerce',
    title: 'TechStore — Vue 3 E-Commerce',
    tagline: 'Plataforma de comercio electrónico con Vue 3.5, TypeScript, Pinia y Vuetify 3',
    description:
      'Plataforma Single Page Application (SPA) de alto rendimiento para comercialización de periféricos y mobiliario ergonómico. Implementa arquitectura limpia y modular con Composition API (<script setup lang="ts">), gestión de estado global centralizada mediante Pinia con persistencia automática en LocalStorage, pasarela de pago simulada multicanal (Tarjeta de crédito 3D interactiva, SPEI, OXXO Pay) y generación de comprobantes digitales de compra.',
    highlights: [
      'Arquitectura modular con Vue 3.5 Composition API y empaquetado ultrarrápido con Vite 7',
      'Estado global centralizado con Pinia y persistencia reactiva en LocalStorage mediante @vueuse/core',
      'Sistema de diseño UI basado en Material Design 3 con Vuetify 3 y soporte dual de temas (Claro / Oscuro)',
      'Catálogo interactivo con filtros multicriterio en tiempo real: slider de precio, categorías y ordenamiento lexicográfico',
      'Pasarela de pago multicanal en 3 pasos con validación estricta de formularios y tarjeta bancaria interactiva',
      'Cajón interactivo de lista de deseos (Wishlist Drawer) y motor de cupones de descuento con cálculo dinámico'
    ],
    tags: [
      { name: 'Vue 3.5', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Pinia 3.0', category: 'frontend' },
      { name: 'Vuetify 3', category: 'frontend' },
      { name: 'Vite 7', category: 'frontend' },
      { name: 'Vue Router', category: 'frontend' },
      { name: 'VueUse', category: 'frontend' },
      { name: 'LocalStorage', category: 'database' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/vue-3-ecommerce',
    liveUrl: undefined,
    images: {
      thumbnail: `${VUE_ECOMMERCE_RAW}/01-1-home-hero-banner.png`,
      gallery: [
        `${VUE_ECOMMERCE_RAW}/01-1-home-hero-banner.png`,
        `${VUE_ECOMMERCE_RAW}/02-1-catalogo-completo.png`,
        `${VUE_ECOMMERCE_RAW}/04-1-detalle-producto.png`,
        `${VUE_ECOMMERCE_RAW}/05-1-wishlist-drawer.png`,
        `${VUE_ECOMMERCE_RAW}/06-1-carrito-compras.png`,
        `${VUE_ECOMMERCE_RAW}/06-2-cupon-aplicado.png`,
        `${VUE_ECOMMERCE_RAW}/07-1-checkout-envio.png`,
        `${VUE_ECOMMERCE_RAW}/07-2-checkout-tarjeta.png`,
        `${VUE_ECOMMERCE_RAW}/07-3-checkout-spei.png`,
        `${VUE_ECOMMERCE_RAW}/08-1-comprobante-encabezado.png`,
        `${VUE_ECOMMERCE_RAW}/08-2-comprobante-articulos-totales.png`,
        `${VUE_ECOMMERCE_RAW}/03-1-tema-claro.png`,
        `${VUE_ECOMMERCE_RAW}/03-2-tema-oscuro.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Flujo unidireccional de datos con separación estricta entre Capa de Presentación (Vistas y Componentes modulares Vuetify), Capa de Estado Global (Stores de Pinia: Products, Cart, Wishlist) y Capa de Persistencia Local (@vueuse/core).',
      stateAndDataManagement:
        'Manejo de estado reactivo y desacoplado en Pinia: sincronización atómica bidireccional con localStorage para carrito, cupones y lista de deseos; cálculo reactivo de subtotales, descuentos de cupones e impuestos mediante getters memoizados.',
      keyChallenges: [
        'Sincronización reactiva y consistente entre el catálogo de productos, el cálculo dinámico de impuestos/cupones y la persistencia local sin efectos colaterales en el ciclo de vida de los componentes.',
        'Validación robusta de formularios en dos fases (expresiones regulares, validación de fecha de caducidad y máscara de tarjeta en tiempo real con detección dinámica de entidad bancaria).',
        'Optimización de rendimiento en el filtrado de catálogo multicriterio (categorías, slider de rango de precios y orden alfabético) manteniendo 60 FPS sin bloqueos en el hilo principal.'
      ],
      engineeringDecisions: [
        'Adopción de Composition API con <script setup lang="ts"> y tipado estricto sin "any" para garantizar contratos de datos sólidos y código altamente reutilizable.',
        'Uso de @vueuse/core (useLocalStorage) para abstraer la persistencia en el navegador de manera declarativa y reactiva sin manipulación imperativa del storage.',
        'Diseño de arquitectura con pasarela simulada y módulo de privacidad (NoEmailModal) para presentación técnica comercial sin exponer credenciales ni requerir dependencias de pago de terceros.'
      ]
    }
  },
  {
    id: 'movie-app-react-native',
    title: 'Movie App',
    tagline: 'Explorador de películas y series multiplataforma con Expo & NativeWind',
    description:
      'Aplicación móvil moderna de alto rendimiento orientada a la exploración fluida de producciones cinematográficas en cartelera, tendencias y próximos estrenos, consumiendo la API de The Movie Database (TMDB). Implementa arquitectura limpia, soporte responsivo de orientación (portrait/landscape) y sincronización con el tema del sistema.',
    highlights: [
      'Integración con The Movie Database (TMDB) API y sistema de caché de peticiones',
      'Manejo de estado reactivo y optimización de listas infinitas con lazy-loading',
      'Diseño moderno adaptable a iOS/Android con soporte dinámico de orientación horizontal y vertical',
      'Tema Claro/Oscuro dinámico sincronizado con tokens del sistema operativo mediante NativeWind v4'
    ],
    tags: [
      { name: 'React Native', category: 'mobile' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Expo SDK', category: 'mobile' },
      { name: 'REST API', category: 'backend' },
      { name: 'NativeWind / Tailwind', category: 'frontend' },
      { name: 'AsyncStorage / MMKV', category: 'database' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/movie-app-react-native',
    liveUrl: undefined, // Proyecto móvil nativo
    images: {
      thumbnail: `${MOVIE_APP_RAW}/home-dark.png`,
      gallery: [
        `${MOVIE_APP_RAW}/home-dark.png`,
        `${MOVIE_APP_RAW}/home-light.png`,
        `${MOVIE_APP_RAW}/detail-dark.png`,
        `${MOVIE_APP_RAW}/detail-light.png`,
        `${MOVIE_APP_RAW}/favorites-dark.png`,
        `${MOVIE_APP_RAW}/horizontal-scroll.png`,
        `${MOVIE_APP_RAW}/cast-scroll.png`,
        `${MOVIE_APP_RAW}/landscape-dark.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern: 'Modular Feature-First con separación clara entre UI Components, Hooks de consumo API, Servicios y Repositorio de Estado.',
      stateAndDataManagement: 'Consumo desacoplado mediante servicios HTTP, almacenamiento persistente local para la colección de favoritos y gestión de UI Theme dinámico.',
      keyChallenges: [
        'Renderizado sin caídas de framerate (60fps) en listas extensas y carruseles anidados de posters de alta resolución.',
        'Prevención de advertencias síncronas de Reanimated al realizar transiciones de tema claro a oscuro dinámicamente.',
        'Adaptabilidad sin desbordamientos de layout en modo horizontal (landscape) en tablets y smartphones.'
      ],
      engineeringDecisions: [
        'Uso de Expo Router para una navegación basada en archivos tipo SPA/Next.js con transiciones nativas suaves.',
        'Configuración estricta de TypeScript para tipado exhaustivo de los payloads de respuesta de TMDB.',
        'Implementación de componentes de fallback para imágenes con carga asíncrona y estados de error controlados.'
      ]
    }
  },
  {
    id: 'laravel-12-blog-cms',
    title: 'Laravel 12 CMS & Reactive Blog',
    tagline: 'Plataforma de gestión de contenidos y blog con Livewire 3 Volt, Spatie RBAC y Pest Tests',
    description:
      'Plataforma Enterprise-Grade Full-Stack construida con Laravel 12 y PHP 8.3 con tipado estricto. Implementa componentes reactivos en tiempo real con Livewire 3 Volt y Alpine.js (búsqueda instantánea, likes, guardados y comentarios), control de acceso granular por roles y permisos (RBAC) con Spatie, analíticas visuales en dashboard con soporte nativo de tema Claro/Oscuro, exportación de reportes a CSV compatibles con Excel (UTF-8 BOM), y una suite exhaustiva de 44 pruebas automatizadas con Pest PHP (116 aserciones aprobadas).',
    highlights: [
      'Arquitectura empresarial con Laravel 12.x, PHP 8.3 con tipos estrictos y MySQL 8.4',
      'Interactividad reactiva en tiempo real con Livewire 3 Volt y Alpine.js sin necesidad de SPAs separadas',
      'Control de acceso granular (RBAC) con Spatie Laravel Permission (Roles: Admin, Blogger, User) y directivas @can',
      'Dashboard administrativo con métricas KPI, monitor de seguridad, modo Claro/Oscuro y exportación de datos a CSV',
      'Experiencia de usuario completa: Búsqueda debounced, lista de lectura privada (/guardados), likes animados y newsletter',
      'Alta confiabilidad con suite de pruebas automatizadas en Pest PHP v3 (44 tests y 116 aserciones exitosas)'
    ],
    tags: [
      { name: 'Laravel 12', category: 'backend' },
      { name: 'PHP 8.3', category: 'backend' },
      { name: 'Livewire 3 Volt', category: 'frontend' },
      { name: 'MySQL 8.4', category: 'database' },
      { name: 'Tailwind CSS v4', category: 'frontend' },
      { name: 'Pest PHP', category: 'backend' },
      { name: 'Spatie RBAC', category: 'backend' },
      { name: 'Alpine.js', category: 'frontend' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/Laravel12Blog',
    liveUrl: undefined,
    images: {
      thumbnail: `${LARAVEL_BLOG_RAW}/01-home-hero.png`,
      gallery: [
        `${LARAVEL_BLOG_RAW}/01-home-hero.png`,
        `${LARAVEL_BLOG_RAW}/01-home-grid.png`,
        `${LARAVEL_BLOG_RAW}/02-search-filter.png`,
        `${LARAVEL_BLOG_RAW}/03-post-detail-header.png`,
        `${LARAVEL_BLOG_RAW}/03-post-detail-content.png`,
        `${LARAVEL_BLOG_RAW}/04-post-comments-discussion.png`,
        `${LARAVEL_BLOG_RAW}/05-reading-list-bookmarks.png`,
        `${LARAVEL_BLOG_RAW}/06-newsletter-box.png`,
        `${LARAVEL_BLOG_RAW}/07-admin-dashboard-light.png`,
        `${LARAVEL_BLOG_RAW}/08-admin-dashboard-dark.png`,
        `${LARAVEL_BLOG_RAW}/09-admin-posts-table.png`,
        `${LARAVEL_BLOG_RAW}/10-admin-users-table.png`,
        `${LARAVEL_BLOG_RAW}/11-admin-roles-permissions.png`,
        `${LARAVEL_BLOG_RAW}/12-admin-categories-table.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Arquitectura MVC enriquecida con componentes reactivos funcionales Livewire 3 Volt. Desacoplamiento estricto de controladores administrativos en app/Http/Controllers/Admin, modelos de dominio Eloquent con integridad referencial, componentes Volt aislados para interacciones públicas y middleware de autorización tipada.',
      stateAndDataManagement:
        'Persistencia relacional en MySQL 8.4 estructurada con migraciones atómicas y seeders completos; reactividad en el cliente orquestada mediante Livewire y Alpine.js con sincronización en tiempo real cliente-servidor; soporte de base de datos SQLite en memoria para ejecución veloz de pruebas automatizadas.',
      keyChallenges: [
        'Filtrado y búsqueda debounced en tiempo real en Livewire 3 Volt asegurando consultas indexadas eficientes sin sobrecarga de base de datos.',
        'Aislamiento estricto de seguridad con Spatie Permission y políticas de Laravel para garantizar que redactores y usuarios únicamente puedan manipular sus propios recursos.',
        'Generación y streaming de reportes CSV con codificación UTF-8 BOM para apertura nativa y visualización perfecta en Microsoft Excel.'
      ],
      engineeringDecisions: [
        'Adopción de Pest PHP v3 para una suite exhaustiva de 44 pruebas funcionales y de características (Autenticación, 2FA, CRUD, Livewire y Exportaciones) asegurando robustez ante regresiones.',
        'Implementación de componentes Volt de un solo archivo (Single-File Components) con Flux UI y Tailwind CSS v4 para acelerar el desarrollo sin sacrificar modularidad.',
        'Inclusión de sistema 1-Click Demo Login para que evaluadores técnicos y reclutadores interactúen al instante con cuentas de Administrador, Redactor o Lector sin barreras de registro.'
      ]
    }
  },
  {
    id: 'tiendita-ia-pos',
    title: 'Tiendita Inteligente IA — Smart POS',
    tagline: 'Punto de venta y control de inventario en tiempo real con YOLOv8, ONNX DirectML y ByteTrack',
    description:
      'Sistema autónomo de Punto de Venta (POS) y Gestión de Inventario en Tiempo Real impulsado por Visión por Computadora e Inteligencia Artificial (Edge AI). Implementa inferencia acelerada por hardware con ONNX Runtime y DirectML en GPUs AMD Radeon / Nvidia (~21 FPS), seguimiento multi-objeto continuo mediante ByteTrack, estándar triple de identificación en cascada (Deep Learning >=80% + validación geométrica + persistencia temporal), control estricto de existencias con alertas acústicas asíncronas y emisión automática de recibos fiscales detallados con cálculo de IVA y código de barras.',
    highlights: [
      'Inferencia en tiempo real acelerada por hardware (DirectML GPU) alcanzando ~21 FPS nativos en AMD Radeon RX / Nvidia con fallback a CPU',
      'Detección y clasificación personalizada de productos mediante modelo YOLOv8 entrenado en Google Colab T4 con 98.7% mAP',
      'Seguimiento multi-objeto robusto con ByteTrack, asignando IDs únicos para evitar cobros duplicados u oclusiones',
      'Estándar comercial triple de identificación: Umbral Deep Learning >=80% + validación geométrica + confirmación temporal',
      'Control dinámico de almacén en tiempo real (stock.json), bloqueo visual [SIN STOCK] y modo interactivo de inventario [M]',
      'Interfaz de terminal comercial High-DPI con estética Glassmorphism Dark UI, Picture-in-Picture (PiP) y emisión de tickets fiscales TXT'
    ],
    tags: [
      { name: 'YOLOv8', category: 'ai' },
      { name: 'Computer Vision', category: 'ai' },
      { name: 'ONNX DirectML', category: 'ai' },
      { name: 'Python 3.12', category: 'backend' },
      { name: 'OpenCV', category: 'ai' },
      { name: 'ByteTrack', category: 'ai' },
      { name: 'JSON Storage', category: 'database' },
      { name: 'Clean Architecture', category: 'backend' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/Tiendita',
    liveUrl: undefined,
    images: {
      thumbnail: `${TIENDITA_RAW}/screenshot_pos.png`,
      gallery: [
        `${TIENDITA_RAW}/screenshot_pos.png`,
        `${TIENDITA_ASSETS_RAW}/screenshot_deteccion_doble.png`,
        `${TIENDITA_RAW}/screenshot_inventario.png`,
        `${TIENDITA_RAW}/screenshot_borrado.png`,
        `${TIENDITA_RAW}/screenshot_ticket.png`,
        `${TIENDITA_RAW}/screenshot_recibo.png`,
        `${TIENDITA_RAW}/metricas_entrenamiento.png`,
        `${TIENDITA_RAW}/matriz_confusion.png`,
        `${TIENDITA_RAW}/curva_precision_recall.png`,
        `${TIENDITA_RAW}/predicciones_validacion.jpg`,
        `${TIENDITA_INFO_RAW}/results.png`,
        `${TIENDITA_INFO_RAW}/labels.jpg`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Arquitectura modular desacoplada por subsistemas independientes: Capa de Presentación (ResponsiveLayout con escalado bicúbico, UIRenderer con Segoe UI anti-aliasing y Theme obsidian), Capa de Negocio (EstadoSesion, ByteTrack multi-tracker, almacén de stock.json y AudioService asíncrono) y Capa de Inferencia (MotorONNX con DirectML Execution Provider y fallback dinámico).',
      stateAndDataManagement:
        'Gestión atómica de inventario y sesión: sincronización transaccional de stock.json para decrementar existencias al cobrar o bloquear re-escaneos al agotar existencias; cola de audio asíncrona en subprocesos para no bloquear el bucle de renderizado de video; pipeline de post-procesamiento 100% vectorizado en NumPy (letterboxing, IoU y NMS).',
      keyChallenges: [
        'Eliminación total de falsos positivos en entornos con iluminación variable, sombras y objetos de oficina mediante filtrado triple en cascada (confianza >=80%, relación de aspecto y persistencia de 3-4 fotogramas).',
        'Inferencia fluida en tiempo real sobre hardware de consumo con DirectML alcanzando ~48 ms por fotograma (~21 FPS) con preservación estricta de letterboxing sin deformar tensores.',
        'Prevención de cobros duplicados en tiempo real ante oclusiones parciales del usuario asignando IDs temporales con ByteTrack y marcas de estado [COBRADO] / [SIN STOCK].'
      ],
      engineeringDecisions: [
        'Entrenamiento de modelo ligero y preciso YOLOv8 en Google Colab con GPU T4 y conversión a formato ONNX optimizado para distribución sin dependencias pesadas de PyTorch.',
        'Diseño de interface High-DPI con fuentes vectorizadas Segoe UI y esquema obsidian glassmorphism para ergonomía comercial y lectura rápida del cajero.',
        'Desacoplamiento de alertas acústicas (pitido de escaneo, sonido de caja registradora y advertencia de falta de stock) en hilos independientes para asegurar latencia cero en el video.'
      ]
    }
  }
];
