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
    id: 'sistema-saas-enterprise-backend',
    title: 'Sistema SaaS Enterprise — Plataforma Administrativa & Core Backend',
    tagline: 'Arquitectura SaaS modular con NestJS, Prisma 7, PostgreSQL, Redis, BullMQ y cliente React 19',
    description:
      'Plataforma integral SaaS empresarial y administrativa diseñada para alta concurrencia, seguridad bancaria y observabilidad total. Incorpora autenticación multifactor (JWT con rotación de cookies HttpOnly, OAuth2 Google/Facebook y 2FA/TOTP independiente), control de acceso granular RBAC con guardias dinámicos, explorador de archivos en S3/SeaweedFS con escaneo antivirus en streaming mediante ClamAV y optimización WebP con Sharp, sistema de auditoría inmutable con visor JSON Diff, y comunicación bidireccional en tiempo real con WebSockets (Socket.io). Además, integra procesamiento asíncrono con BullMQ para generación de reportes PDF, ingestión masiva de logs, motor de webhooks salientes con firmas HMAC-SHA256 y un exportador masivo asíncrono (CSV/JSON/TSV).',
    highlights: [
      'Autenticación robusta con JWT, rotación de refresh tokens en cookies HttpOnly y OAuth2 (Google y Facebook)',
      'Doble factor de autenticación (2FA/TOTP) desacoplado con códigos de respaldo encriptados y rotación de claves',
      'Gestor de sesiones activas y dispositivos en Redis con capacidad de revocación remota instantánea',
      'Almacenamiento de archivos en S3/SeaweedFS con análisis antivirus en tiempo real mediante ClamAV y compresión WebP',
      'Procesamiento en segundo plano con BullMQ y Redis para reportes PDF, logs, webhooks y exportaciones masivas',
      'Motor de webhooks salientes B2B con reintentos exponenciales y firma criptográfica HMAC-SHA256',
      'Alertas automáticas ante incidentes operacionales a canales de Discord y Slack (memoria RSS y saturación de DB pool)',
      'Notificaciones y propagación de Feature Flags en tiempo real a clientes conectados mediante WebSockets (Socket.io)',
      'Auditoría inmutable de operaciones críticas con captura de estado previo y posterior (JSON Diff)',
      'Cobertura de pruebas unitarias exhaustiva con Jest garantizando el 100% de éxito en servicios, procesadores y controladores'
    ],
    tags: [
      { name: 'NestJS', category: 'backend' },
      { name: 'TypeScript', category: 'backend' },
      { name: 'Prisma ORM 7', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'BullMQ', category: 'backend' },
      { name: 'Socket.io', category: 'backend' },
      { name: 'S3 / SeaweedFS', category: 'devops' },
      { name: 'ClamAV Antivirus', category: 'devops' },
      { name: 'HMAC Webhooks', category: 'backend' },
      { name: 'Docker', category: 'devops' },
      { name: 'Jest (100% cobertura)', category: 'backend' },
      { name: 'React 19', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' }
    ],
    githubUrl: 'https://github.com/Nano-DevCode/nestjs-backend-core',
    secondaryGithubUrl: 'https://github.com/Nano-DevCode/react-frontend-core',
    liveUrl: 'https://sistema.nano-service.com',
    images: {
      thumbnail: '/projects/sistema-saas/01-two-factor-auth-ui.png',
      gallery: [
        '/projects/sistema-saas/01-two-factor-auth-ui.png',
        '/projects/sistema-saas/02-discord-bot-panel.png',
        '/projects/sistema-saas/03-backend-services-logs.png',
        '/projects/sistema-saas/04-api-login-2fa-tokens.png',
        '/projects/sistema-saas/05-realtime-notifications-api.png',
        '/projects/sistema-saas/06-api-2fa-validation.png'
      ]
    },
    featured: true,
    technicalDetails: {
      architecturePattern:
        'Arquitectura modular hexagonal orientada a eventos e inyección de dependencias en NestJS. Desacoplamiento de tareas intensivas de CPU e I/O hacia trabajadores asíncronos en BullMQ sobre Redis. Cliente frontend modular con consumo reactivo mediante TanStack Query y Zustand.',
      stateAndDataManagement:
        'Persistencia relacional en PostgreSQL orquestada con Prisma ORM 7, utilizando el adaptador nativo @prisma/adapter-pg y soporte para réplicas de lectura. Redis como memoria compartida para sesiones activas, rate limiting con Throttler y colas BullMQ. Almacenamiento de objetos no estructurados en S3 / SeaweedFS.',
      keyChallenges: [
        'Prevenir el bloqueo del event loop de Node.js durante tareas intensivas como conversión de imágenes a WebP, escaneo antivirus con ClamAV, renderizado de PDFs y exportaciones masivas mediante workers independientes.',
        'Implementar autenticación multifactor 2FA/TOTP completamente desacoplada con tokens temporales de vida corta, cifrado seguro de secretos y capacidad de revocar sesiones de dispositivos remotos al instante.',
        'Garantizar la entrega confiable y la integridad criptográfica de webhooks salientes B2B mediante HMAC-SHA256 y políticas de reintento con backoff exponencial.'
      ],
      engineeringDecisions: [
        'Separación limpia entre el núcleo de servicios backend (nestjs-backend-core) y la interfaz de usuario (react-frontend-core), permitiendo escalabilidad y despliegues independientes.',
        'Uso de esquemas particionados por dominio en Prisma ORM para mantener claridad y desacoplamiento en un modelo de datos en constante crecimiento.',
        'Implementación de alertas operacionales proactivas vinculadas a Discord y Slack que monitorean en caliente el consumo de memoria RSS y el agotamiento del pool de conexiones a la base de datos.'
      ]
    }
  },
  {
    id: 'sistema-mesa-de-ayuda-e-inventario-ti',
    title: 'Sistema de Mesa de Ayuda e Inventario TI',
    tagline: 'Aplicación web para gestionar solicitudes de soporte técnico, inventario y seguimiento de incidencias.',
    description:
      'Aplicación web desarrollada durante mi residencia profesional en el Instituto Tecnológico de Oaxaca (TecNM / ITO) para gestionar solicitudes de soporte técnico, inventario y seguimiento de incidencias. Permite registrar reportes de fallas, asignar responsabilidades al personal de soporte, consultar un historial de cambios para facilitar la auditoría de tickets y activos, y mantener el control de existencias de equipos y consumibles. Desarrollé la arquitectura backend completa con NestJS y PostgreSQL, e integré el cliente web con React para reflejar actualizaciones en tiempo real entre los usuarios.',
    highlights: [
      'Gestión de solicitudes de soporte técnico, asignación de técnicos y control de estados',
      'Inventario de equipos de cómputo, consumibles y control de transferencias',
      'Historial de cambios para facilitar la auditoría de tickets y movimientos de activos',
      'Actualización en tiempo real con Socket.io para que el personal visualice cambios al instante',
      'Mecanismos para evitar conflictos cuando varios usuarios actualizan información simultáneamente',
      'Transacciones explícitas con TypeORM QueryRunner para asegurar la consistencia en movimientos de inventario',
      'Suite de 998 pruebas automatizadas organizadas en 143 suites con Jest',
      'Contenerización con Docker multi-stage y proxy Nginx para el entorno institucional'
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
        'Arquitectura backend modular con separación de responsabilidades. El backend organiza los módulos de autenticación, tickets, activos, inventario y auditoría con inyección de dependencias. El frontend estructura vistas y componentes reutilizables por dominio operativo.',
      stateAndDataManagement:
        'Base de datos relacional PostgreSQL con TypeORM. Se implementó control de concurrencia optimista para evitar conflictos en tickets simultáneos, transacciones explícitas con QueryRunner en movimientos de inventario, y caché en memoria y rate limiting con Redis. Almacenamiento de evidencias multimedia con MinIO S3. En frontend, gestión de estado y sincronización reactiva con TanStack Query y Zustand.',
      keyChallenges: [
        'Evitar conflictos cuando varios usuarios actualizan tickets o transfieren equipos simultáneamente mediante validación de versiones y transacciones atómicas.',
        'Mantener la interfaz sincronizada en tiempo real para el equipo de soporte técnico sin sobrecargar la red ni generar datos desactualizados.',
        'Asegurar la confiabilidad de los flujos de negocio mediante pruebas automatizadas continuas y empaquetado reproducible en contenedores Docker.'
      ],
      engineeringDecisions: [
        'Separación de la lógica en backend (NestJS) y cliente web (React) para permitir evolución independiente de servicios y consumo ágil de la API.',
        'Cobertura de 998 pruebas automatizadas en 143 suites con Jest, aislando componentes con dobles de prueba para prevenir fallos en cambios futuros.',
        'Uso de WebSockets (Socket.io) combinado con TanStack Query para actualizar la información en pantalla al momento en que ocurren eventos.'
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
      'Actualización inmediata de existencias y control de productos agotados',
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
