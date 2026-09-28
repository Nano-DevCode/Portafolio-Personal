import type { Project } from '../types/project';

// Base raw del repositorio público en GitHub
const MOVIE_APP_RAW = 'https://raw.githubusercontent.com/Nano-DevCode/movie-app-react-native/main/assets/readme-images';

export const projects: Project[] = [
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
