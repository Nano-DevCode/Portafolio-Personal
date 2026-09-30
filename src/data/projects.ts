import type { Project } from '../types/project';

// Base raw de los repositorios públicos en GitHub
const MOVIE_APP_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/movie-app-react-native/main/assets/readme-images';
const VUE_ECOMMERCE_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/vue-3-ecommerce/main/assets/readme-images';
const LARAVEL_BLOG_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/Laravel12Blog/main/docs/screenshots';

export const projects: Project[] = [
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
      { name: 'Vite 7', category: 'devops' },
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
  }
];
