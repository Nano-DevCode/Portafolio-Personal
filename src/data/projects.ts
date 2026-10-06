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
    id: 'sistema-mesa-de-ayuda-e-inventario-ti',
    title: 'Sistema de Mesa de Ayuda e Inventario TI',
    tagline: 'Sistema institucional para gestionar soporte técnico, inventario y seguimiento de incidencias.',
    description:
      'Aplicación web para gestionar tickets, inventario y seguimiento de incidencias dentro del Instituto Tecnológico de Oaxaca. Permite registrar solicitudes de soporte, asignar responsabilidades, controlar accesos por roles, revisar el historial de cambios y mantener el inventario de equipos y consumibles. El sistema combina un backend con NestJS y PostgreSQL y un frontend con React, TypeScript y herramientas modernas para apoyar la operación diaria del equipo técnico.',
    highlights: [
      'Gestión de tickets, usuarios y permisos dentro del mismo sistema',
      'Seguimiento de inventario y control de activos tecnológicos',
      'Historial de cambios para auditar actividades del sistema',
      'Actualización en tiempo real para que el personal técnico vea cambios al instante',
      'Backend con NestJS, PostgreSQL, Redis y TypeORM',
      'Frontend con React, TanStack Query, Zustand, Socket.io y Tailwind CSS',
      'Suite de 998 pruebas unitarias en 143 test suites con Jest',
      'Despliegue con Docker y contenedores para un entorno institucional'
    ],
    tags: [
      { name: 'NestJS', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'TypeORM', category: 'backend' },
      { name: 'MinIO S3', category: 'devops' },
      { name: 'React', category: 'frontend' },
      { name: 'TanStack Query', category: 'frontend' },
      { name: 'Zustand', category: 'frontend' },
      { name: 'Socket.io', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Jest (998 pruebas / 143 suites)', category: 'backend' },
      { name: 'Docker', category: 'devops' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/soporte-tecnico-backend',
    secondaryGithubUrl: 'https://github.com/Nano-DevCode/soporte-tecnico-frontend',
    liveUrl: undefined,
    images: {
      thumbnail: `${SOPORTE_BACKEND_RAW}/00-system-architecture-overview.png`,
      gallery: [
        `${SOPORTE_BACKEND_RAW}/00-system-architecture-overview.png`,
        `${SOPORTE_BACKEND_RAW}/03-database-erd.png`,
        `${SOPORTE_BACKEND_RAW}/08-data-storage-concurrency.png`,
        `${SOPORTE_BACKEND_RAW}/07-async-queues-workers.png`,
        `${SOPORTE_BACKEND_RAW}/06-telegram-bot.png`,
        `${SOPORTE_FRONTEND_RAW}/02-dashboard/01-dashboard-overview.png`,
        `${SOPORTE_FRONTEND_RAW}/03-tickets/01-current-tickets-list.png`,
        `${SOPORTE_FRONTEND_RAW}/03-tickets/06-ticket-detail-view.png`,
        `${SOPORTE_FRONTEND_RAW}/04-sla/01-sla-dashboard-view.png`,
        `${SOPORTE_FRONTEND_RAW}/05-audit/02-audit-diff-dialog.png`,
        `${SOPORTE_FRONTEND_RAW}/06-equipments/01-equipments-catalog.png`,
        `${SOPORTE_FRONTEND_RAW}/11-ui-features/01-dark-mode-theme.png`
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Arquitectura backend modular con separación de responsabilidades. El frontend se estructura por módulos de tickets, activos, inventario y auditoría para mantener los flujos operativos claros y reutilizables.',
      stateAndDataManagement:
        'Persistencia en PostgreSQL con TypeORM para tickets, inventario y auditoría. Se aplicó control de concurrencia optimista para prevenir conflictos y transacciones explícitas con QueryRunner para movimientos de inventario. Redis se usa para caché en memoria y rate limiting, y MinIO para almacenamiento de evidencias multimedia. El frontend usa TanStack Query y Zustand para sincronización y gestión del estado de la sesión.',
      keyChallenges: [
        'Evitar inconsistencias en transferencias de equipo y movimientos de inventario mediante transacciones atómicas y validación de cambios simultáneos.',
        'Mantener la UI sincronizada en tiempo real para múltiples usuarios institucionales, sin sobrecargar la red ni generar estados desactualizados.',
        'Empaquetar el backend y el frontend en un entorno institucional seguro y observable, con imágenes Docker reducidas y reglas estrictas de despliegue.'
      ],
      engineeringDecisions: [
        'Separación de migraciones de base de datos y procesos de arranque para evitar sincronización automática en producción.',
        'Cobertura exhaustiva con pruebas unitarias en Jest (998 pruebas en 143 suites), aislando dependencias con mocks estructurados.',
        'Uso de React, TanStack Query y Socket.io para mantener la experiencia del usuario fluida y con actualización inmediata de datos.'
      ]
    }
  },
  {
    id: 'tiendita-ia-pos',
    title: 'Tiendita Inteligente IA — Punto de Venta con Visión Artificial',
    tagline: 'Punto de venta y control de inventario con YOLOv8, ONNX DirectML y ByteTrack',
    description:
      'Sistema de punto de venta y control de inventario que utiliza visión por computadora para identificar productos automáticamente a través de una cámara web. Emplea un modelo YOLOv8 entrenado para detectar productos de abarrotes (97.1% mAP@50 en validación sobre el dataset propio del proyecto, pesos MiModelo_YOLO_BEST.pt), exportado a ONNX y acelerado con DirectML (~21 FPS en GPU AMD Radeon RX 6600M con DirectML). Combina seguimiento de objetos con ByteTrack para rastrear artículos en movimiento y evitar cobros duplicados. Cuenta con control de existencias en tiempo real, alertas sonoras asíncronas, interfaz para el cajero y emisión de tickets de compra estructurados.',
    highlights: [
      'Inferencia de visión artificial acelerada por GPU mediante ONNX Runtime y DirectML (~21 FPS en GPU AMD Radeon RX 6600M con DirectML)',
      '97.1% mAP@50 en validación sobre el dataset propio del proyecto (pesos MiModelo_YOLO_BEST.pt)',
      'Rastreo visual multi-objeto con ByteTrack para evitar duplicación de cobros en pantalla',
      'Filtrado por nivel de confianza y persistencia temporal para reducir falsos positivos',
      'Actualización inmediata de inventario con bloqueo transaccional de productos agotados',
      'Interfaz visual clara para el operador de caja con emisión automática de comprobantes de venta'
    ],
    tags: [
      { name: 'YOLOv8', category: 'ai' },
      { name: 'Computer Vision', category: 'ai' },
      { name: 'ONNX DirectML', category: 'ai' },
      { name: 'Python', category: 'backend' },
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
        'Lograr ~21 FPS en GPU AMD Radeon RX 6600M con DirectML sin depender de instalaciones pesadas de PyTorch en producción.',
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
    title: 'Laravel CMS & Blog Reactivo',
    tagline: 'Sistema de gestión de contenidos y blog interactivo con Livewire Volt y Pest Tests',
    description:
      'Sistema de gestión de contenidos (CMS) y blog interactivo construido con Laravel y PHP. Incorpora reactividad en el servidor sin necesidad de un framework SPA independiente gracias a Livewire Volt y Alpine.js: búsqueda instantánea con debounce, sistema de comentarios, me gusta y guardado de artículos. Incluye panel de administración con control de acceso por roles y permisos (Spatie RBAC), estadísticas de publicaciones, exportación de reportes a CSV y una suite de 44 pruebas automatizadas con Pest PHP.',
    highlights: [
      'Desarrollo con Laravel, PHP con tipado estricto y base de datos MySQL',
      'Reactividad en el servidor con Livewire Volt y Alpine.js para interacciones fluidas',
      'Control de acceso por roles y permisos con Spatie Permission (Administrador, Redactor y Lector)',
      'Panel de administración con métricas, gestión de artículos, usuarios y categorías',
      'Búsqueda en tiempo real, guardado de artículos en lectura privada y sistema de comentarios',
      'Exportación de reportes a CSV compatibles con Excel (UTF-8 con BOM)',
      'Suite de 44 pruebas automatizadas y 116 aserciones con Pest PHP'
    ],
    tags: [
      { name: 'Laravel', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'Livewire Volt', category: 'frontend' },
      { name: 'MySQL', category: 'database' },
      { name: 'Tailwind CSS', category: 'frontend' },
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
        'Base de datos relacional MySQL con migraciones y seeders estructurados. Livewire gestiona el estado reactivo entre cliente y servidor, con SQLite en memoria para la ejecución rápida de pruebas unitarias.',
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
    tagline: 'Tienda en línea interactiva con Vue 3, TypeScript, Pinia y Vuetify 3',
    description:
      'Tienda en línea desarrollada con Vue 3 y TypeScript enfocada en la venta de periféricos y accesorios de tecnología. Cuenta con un catálogo interactivo con filtros combinados por categoría y rango de precio, carrito de compras persistente con cálculo automático de impuestos y cupones, lista de deseos y una pasarela de pago simulada (tarjeta interactiva, transferencia bancaria y pago en tienda) con generación de comprobantes de compra descargables.',
    highlights: [
      'Desarrollo con Vue 3 Composition API (<script setup>) y Vite',
      'Gestión de estado global con Pinia y persistencia en LocalStorage',
      'Diseño responsivo con Vuetify 3 y soporte para modo claro y oscuro',
      'Filtros en tiempo real por precio, categorías y ordenamiento',
      'Proceso de checkout en pasos con validación de formularios y tarjeta interactiva',
      'Cálculo dinámico de cupones de descuento, impuestos y generación de comprobantes'
    ],
    tags: [
      { name: 'Vue 3', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Pinia', category: 'frontend' },
      { name: 'Vuetify 3', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
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
