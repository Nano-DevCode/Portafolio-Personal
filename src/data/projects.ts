import type { Project } from '../types/project';

// Base raw de los repositorios públicos en GitHub
const MOVIE_APP_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/movie-app-react-native/main/assets/readme-images';
const VUE_ECOMMERCE_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/vue-3-ecommerce/main/assets/readme-images';

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
  }
];
