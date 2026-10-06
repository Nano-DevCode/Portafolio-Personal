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
    id: 'soporte-tecnico-backend',
    title: 'ITSM & Service Desk Backend — API Institucional',
    tagline: 'API para Mesa de Ayuda y Gestión de Activos TI con NestJS 11, PostgreSQL 17, Redis 8, MinIO y Docker',
    description:
      'API RESTful y servicio en tiempo real para el sistema institucional de Mesa de Ayuda y Control de Inventario TI del Instituto Tecnológico de Oaxaca (ITO). Diseñado con NestJS 11 y TypeScript bajo una arquitectura modular desacoplada por dominios de negocio. Maneja control de concurrencia optimista y transacciones atómicas con TypeORM en PostgreSQL 17, optimización de búsquedas con vectores tsvector e índices GIN, almacenamiento en memoria y limitador de tasa (rate limiting) con Redis 8, almacenamiento de evidencias digitales compatible con S3 (MinIO y Cloudflare R2) y notificaciones bidireccionales mediante WebSockets y bot de Telegram. Incluye una suite exhaustiva de 998 pruebas unitarias con Jest y empaquetado en contenedores Docker Distroless.',
    highlights: [
      'Arquitectura modular por dominios con NestJS 11, TypeScript y principios SOLID',
      'Control de concurrencia optimista y transacciones atómicas para transferencias de inventario con TypeORM',
      'Base de datos PostgreSQL 17 con búsqueda de texto completo (Full-Text Search con índices GIN y tsvector)',
      'Caché en memoria y control de peticiones (rate limiting) con Redis 8',
      'Almacenamiento de evidencias y archivos adjuntos con MinIO y Cloudflare R2 (URLs prefirmadas)',
      'Comunicación en tiempo real con WebSockets (Socket.io) y notificaciones a través de Telegram Bot',
      'Contenedores Docker multi-stage con imágenes Google Distroless (usuario nonroot) y proxy Nginx',
      'Suite de 998 pruebas unitarias en 143 test suites con Jest para garantizar estabilidad'
    ],
    tags: [
      { name: 'NestJS 11', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'PostgreSQL 17', category: 'database' },
      { name: 'Redis 8', category: 'database' },
      { name: 'Docker Distroless', category: 'devops' },
      { name: 'TypeORM', category: 'backend' },
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
        'Arquitectura modular por dominios de negocio (Tickets, Activos TI, Inventario, Usuarios, Auditoría). Controladores delgados, servicios de aplicación con inyección de dependencias e interfaces desacopladas.',
      stateAndDataManagement:
        'Persistencia en PostgreSQL 17 con TypeORM. Uso de control de concurrencia optimista (@VersionColumn) para evitar sobreescritura simultánea en la asignación de tickets, y transacciones manuales con QueryRunner para movimientos de inventario. Redis 8 para caché de catálogos y rate limiting, y MinIO/R2 para evidencias multimedia.',
      keyChallenges: [
        'Evitar inconsistencias en transferencias de equipo entre departamentos mediante transacciones atómicas que aseguren que todo el movimiento se registre o se revierta por completo.',
        'Gestionar la comunicación WebSocket en tiempo real entre múltiples clientes administrativos mediante un adaptador de Redis para distribuir los eventos.',
        'Empaquetar la aplicación en imágenes Docker seguras y reducidas utilizando Google Distroless, ejecutando el proceso sin privilegios de root ni herramientas de shell innecesarias.'
      ],
      engineeringDecisions: [
        'Separación de las migraciones de base de datos en un contenedor migrator previo al inicio del API, evitando ejecutar synchronize en producción.',
        'Cobertura exhaustiva mediante pruebas unitarias en Jest (998 pruebas en 143 suites) aislando dependencias con mocks estructurados.',
        'Validación rigurosa de variables de entorno al arranque de la aplicación usando Joi en NestJS ConfigModule.'
      ]
    }
  },
  {
    id: 'soporte-tecnico-frontend',
    title: 'Soporte Técnico — Service Desk & ITSM Frontend',
    tagline: 'Plataforma web de Service Desk, seguimiento de SLA en tiempo real e inventario con React 19, TypeScript y TanStack Query',
    description:
      'Plataforma web de Service Desk y gestión de activos TI desarrollada para el Instituto Tecnológico de Oaxaca (ITO). Permite administrar el ciclo de vida de incidencias técnicas, dar seguimiento a acuerdos de nivel de servicio (SLA) con alertas en tiempo real, auditar cambios en el sistema y gestionar el inventario de equipo de cómputo. Desarrollada con React 19 y TypeScript, integra WebSockets mediante Socket.io para actualización instantánea de tickets sin sondeo periódico, control de acceso basado en roles (RBAC) con 9 perfiles, visor interactivo de diferencias para auditorías, paleta de comandos por teclado (cmdk) y soporte para temas claro/oscuro e internacionalización (Español/Inglés).',
    highlights: [
      'Desarrollo con React 19, TypeScript y empaquetado optimizado con Vite',
      'Actualización en tiempo real con Socket.io e invalidación reactiva de caché con TanStack Query v5',
      'Monitoreo de SLAs con indicadores visuales de tiempo restante y alertas tempranas',
      'Visor de diferencias (Diff Viewer) para auditar cambios realizados en tickets y activos',
      'Control de acceso granular por roles (RBAC) para 9 tipos de usuarios institucionales',
      'Navegación rápida con paleta de comandos (Ctrl+K) y soporte bilingüe con i18next',
      'Diseño responsivo con Tailwind CSS y soporte para modo claro y oscuro'
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
        'Estructura modular orientada a dominios (tickets, activos, usuarios, auditoría). Separación clara entre componentes de presentación, hooks para consumo de datos con TanStack Query y estado global de sesión con Zustand.',
      stateAndDataManagement:
        'TanStack Query para la sincronización y almacenamiento en caché de datos del servidor, invalidando consultas automáticamente ante eventos de Socket.io. Zustand para el estado de autenticación, perfil del usuario y preferencias de tema.',
      keyChallenges: [
        'Sincronizar en tiempo real el estado de los tickets entre múltiples usuarios concurrentes sin sobrecargar la red ni provocar parpadeos en la interfaz.',
        'Construir un visor visual de diferencias (Diff Viewer) capaz de comparar estructuras JSON anidadas para el historial de auditoría de forma rápida y legible.',
        'Mantener un renderizado fluido en tablas y listas con cientos de activos tecnológicos mediante filtrado memoizado.'
      ],
      engineeringDecisions: [
        'Uso de React 19 y Vite para obtener tiempos de recarga rápidos en desarrollo y optimizar el empaquetado final.',
        'Implementación de interceptores en Axios para gestionar la renovación automática de tokens JWT cuando expira la sesión.',
        'Integración de la paleta de comandos cmdk para permitir a los técnicos navegar y buscar tickets rápidamente mediante atajos de teclado.'
      ]
    }
  },
  {
    id: 'tiendita-ia-pos',
    title: 'Tiendita Inteligente IA — Punto de Venta con Visión Artificial',
    tagline: 'Punto de venta y control de inventario con YOLOv8 (97.1% mAP@50), ONNX DirectML y ByteTrack',
    description:
      'Sistema de punto de venta y control de inventario que utiliza visión por computadora para identificar productos automáticamente a través de una cámara web. Emplea un modelo YOLOv8 entrenado específicamente para la detección de productos de abarrotes (97.1% mAP@50), exportado a formato ONNX y acelerado por hardware mediante DirectML (~21 FPS / ~48 ms sobre GPU AMD Radeon RX 6600M). Combina seguimiento de objetos con ByteTrack para rastrear artículos en movimiento y evitar cobros duplicados. Cuenta con control de existencias en tiempo real, alertas sonoras asíncronas, interfaz para el cajero y emisión de tickets de compra estructurados.',
    highlights: [
      'Inferencia de visión artificial acelerada por GPU mediante ONNX Runtime y DirectML (~21 FPS / ~48 ms)',
      'Modelo YOLOv8 personalizado con precisión de 97.1% mAP@50 para productos de abarrotes',
      'Rastreo visual multi-objeto con ByteTrack para evitar duplicación de cobros en pantalla',
      'Filtrado por nivel de confianza y persistencia temporal para erradicar falsos positivos',
      'Actualización inmediata de inventario con bloqueo transaccional de productos agotados',
      'Interfaz visual clara para el operador de caja con emisión automática de comprobantes de venta'
    ],
    tags: [
      { name: 'YOLOv8', category: 'ai' },
      { name: 'Computer Vision', category: 'ai' },
      { name: 'ONNX DirectML', category: 'ai' },
      { name: 'Python 3.12', category: 'backend' },
      { name: 'OpenCV', category: 'ai' },
      { name: 'ByteTrack', category: 'ai' },
      { name: 'NumPy', category: 'ai' },
      { name: 'JSON Storage', category: 'database' }
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
        'Arquitectura modular dividida en subsistema de inferencia (ONNX con DirectML), motor de seguimiento visual (ByteTrack), gestión de inventario y renderizado de la interfaz gráfica sobre el stream de video.',
      stateAndDataManagement:
        'Control de inventario en archivo estructurado JSON con actualización inmediata al registrar cobros. Cola de alertas de audio en hilos secundarios desacoplados para no interrumpir el bucle de procesamiento de video.',
      keyChallenges: [
        'Reducir detecciones erróneas ocasionadas por sombras o iluminación variable combinando umbrales de confianza con validación durante varios fotogramas consecutivos.',
        'Lograr una tasa de fotogramas fluida (~21 FPS) en computadoras con tarjetas gráficas dedicadas sin depender de instalaciones pesadas de PyTorch en producción.',
        'Manejar oclusiones momentáneas cuando la mano del cliente o cajero cubre parcialmente el producto mediante el seguimiento continuo de IDs con ByteTrack.'
      ],
      engineeringDecisions: [
        'Exportar el modelo entrenado a formato ONNX para ejecutarlo de manera ligera y portable en diferentes plataformas con DirectML.',
        'Manejar la reproducción de sonidos y alertas en un hilo independiente para evitar retrasos en el procesamiento del video en vivo.',
        'Diseñar una vista clara en pantalla con indicadores de estado de escaneo, existencias y total acumulado para facilitar la lectura del usuario.'
      ]
    }
  },
  {
    id: 'laravel-12-blog-cms',
    title: 'Laravel 12 CMS & Blog Reactivo',
    tagline: 'Sistema de gestión de contenidos y blog interactivo con Livewire 3 Volt y Pest Tests',
    description:
      'Sistema de gestión de contenidos (CMS) y blog interactivo construido con Laravel 12 y PHP 8.3. Incorpora reactividad en el servidor sin necesidad de un framework SPA independiente gracias a Livewire 3 Volt y Alpine.js: búsqueda instantánea con debounce, sistema de comentarios, me gusta y guardado de artículos. Incluye panel de administración con control de acceso por roles y permisos (Spatie RBAC), estadísticas de publicaciones, exportación de reportes a CSV y una suite de 44 pruebas automatizadas con Pest PHP.',
    highlights: [
      'Desarrollo con Laravel 12, PHP 8.3 con tipado estricto y base de datos MySQL 8.4',
      'Reactividad en el servidor con Livewire 3 Volt y Alpine.js para interacciones fluidas',
      'Control de acceso por roles y permisos con Spatie Permission (Administrador, Redactor y Lector)',
      'Panel de administración con métricas, gestión de artículos, usuarios y categorías',
      'Búsqueda en tiempo real, guardado de artículos en lectura privada y sistema de comentarios',
      'Exportación de reportes a CSV compatibles con Excel (UTF-8 con BOM)',
      'Suite de 44 pruebas automatizadas con Pest PHP (116 aserciones aprobadas)'
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
        'Arquitectura MVC de Laravel complementada con componentes Livewire Volt. Controladores administrativos independientes para el panel de gestión y modelos Eloquent con relaciones bien definidas.',
      stateAndDataManagement:
        'Base de datos relacional MySQL 8.4 con migraciones y seeders estructurados. Livewire gestiona el estado reactivo entre cliente y servidor, con SQLite en memoria para la ejecución rápida de pruebas unitarias.',
      keyChallenges: [
        'Implementar búsqueda y filtros reactivos con debounce para evitar consultas excesivas a la base de datos mientras el usuario escribe.',
        'Garantizar el aislamiento de permisos para que los redactores únicamente puedan editar y publicar sus propios contenidos sin acceder a la administración global.',
        'Generar descargas de reportes CSV con codificación UTF-8 BOM para evitar problemas de caracteres especiales en hojas de cálculo.'
      ],
      engineeringDecisions: [
        'Elección de Pest PHP para crear una suite de pruebas clara, legible y rápida que cubre flujos de autenticación, permisos y componentes reactivos.',
        'Uso de Livewire Volt (Single-File Components) con Tailwind CSS para reducir la duplicación de código y simplificar el mantenimiento.',
        'Inclusión de acceso demo con un clic para facilitar la revisión técnica de los distintos roles sin necesidad de registrarse manualmente.'
      ]
    }
  },
  {
    id: 'vue-3-ecommerce',
    title: 'TechStore — Vue 3 E-Commerce',
    tagline: 'Tienda en línea interactiva con Vue 3.5, TypeScript, Pinia y Vuetify 3',
    description:
      'Tienda en línea desarrollada con Vue 3 y TypeScript enfocada en la venta de periféricos y accesorios de tecnología. Cuenta con un catálogo interactivo con filtros combinados por categoría y rango de precio, carrito de compras persistente con cálculo automático de impuestos y cupones, lista de deseos y una pasarela de pago simulada (tarjeta interactiva, transferencia bancaria y pago en tienda) con generación de comprobantes de compra descargables.',
    highlights: [
      'Desarrollo con Vue 3.5 Composition API (<script setup>) y Vite',
      'Gestión de estado global con Pinia y persistencia en LocalStorage',
      'Diseño responsivo con Vuetify 3 y soporte para modo claro y oscuro',
      'Filtros en tiempo real por precio, categorías y ordenamiento',
      'Proceso de checkout en pasos con validación de formularios y tarjeta interactiva',
      'Cálculo dinámico de cupones de descuento, impuestos y generación de comprobantes'
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
        'Arquitectura basada en componentes reutilizables con Composition API, separando vistas de catálogo y checkout de los stores de negocio en Pinia.',
      stateAndDataManagement:
        'Estado global en Pinia dividido por módulos (catálogo, carrito, favoritos). Persistencia sincronizada con LocalStorage mediante VueUse para conservar el estado de compra tras recargas.',
      keyChallenges: [
        'Sincronizar de forma reactiva los cálculos de subtotales, descuentos promocionales e impuestos en el carrito sin inconsistencias numéricas.',
        'Implementar validaciones en tiempo real para números de tarjeta bancaria, formato de fecha de vencimiento y códigos de seguridad con detección automática de emisor.',
        'Mantener filtros fluidos en el catálogo de productos combinando búsqueda textual, slider de precios y categorías.'
      ],
      engineeringDecisions: [
        'Uso de TypeScript en modo estricto en todos los componentes y stores para evitar errores de tipo en tiempo de ejecución.',
        'Uso de useLocalStorage de VueUse para gestionar el almacenamiento local de forma declarativa sin código repetitivo.',
        'Diseño de un flujo de compra interactivo sin requerir cuentas de pago reales, ideal para demostraciones técnicas completas.'
      ]
    }
  },
  {
    id: 'movie-app-react-native',
    title: 'Movie App',
    tagline: 'Explorador de películas y series multiplataforma con Expo & NativeWind',
    description:
      'Aplicación móvil multiplataforma desarrollada con React Native y Expo para consultar estrenos, tendencias cinematográficas y detalles de películas consumiendo la API de The Movie Database (TMDB). Ofrece navegación fluida entre categorías, visualización de fichas técnicas y reparto, guardado de favoritos en el dispositivo, soporte para orientación horizontal/vertical y adaptación automática al tema claro u oscuro del sistema.',
    highlights: [
      'Consumo de la API de The Movie Database (TMDB) con manejo de estados de carga y error',
      'Navegación fluida y estructurada con Expo Router',
      'Listas optimizadas para scroll fluido con carga diferida de imágenes',
      'Diseño responsivo adaptable a orientación vertical y horizontal (landscape)',
      'Soporte para tema claro y oscuro sincronizado con el sistema mediante NativeWind',
      'Almacenamiento local para lista de favoritos del usuario'
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
      architecturePattern:
        'Estructura modular orientada a pantallas y componentes reutilizables, separando el consumo de la API REST mediante servicios auxiliares.',
      stateAndDataManagement:
        'Manejo de estado de peticiones y respuestas mediante hooks personalizados, y persistencia local para la lista de películas favoritas.',
      keyChallenges: [
        'Optimizar el rendimiento en listas extensas y carruseles de imágenes de alta resolución evitando tirones en el scroll.',
        'Adaptar el diseño de la interfaz cuando el usuario gira el dispositivo a modo horizontal sin desbordamientos de pantalla.',
        'Manejar estados de desconexión o fallas en la API mostrando vistas de reserva (fallbacks) claras.'
      ],
      engineeringDecisions: [
        'Uso de Expo Router para una navegación declarativa y mantenible basada en estructura de archivos.',
        'Tipado completo con TypeScript para todos los modelos de datos provenientes de la API de TMDB.',
        'Estilos utilitarios con NativeWind para mantener coherencia de diseño y facilitar el soporte de temas.'
      ]
    }
  }
];
