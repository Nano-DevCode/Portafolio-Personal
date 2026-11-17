import type { Certification } from '../types/certification';
import type { Project } from '../types/project';
import type { Language } from './translations';

interface ProjectTranslation {
  title: string;
  tagline: string;
  statusLabel?: string;
  description: string;
  highlights: string[];
  technicalDetails?: {
    architecturePattern: string;
    stateAndDataManagement: string;
    keyChallenges: string[];
    engineeringDecisions: string[];
  };
}

const projectTranslationsEn: Record<string, ProjectTranslation> = {
  'sistema-mesa-de-ayuda-e-inventario-ti': {
    title: 'IT Help Desk & Asset Inventory System',
    tagline: 'Web application to manage IT support requests, hardware inventory, and real-time incident tracking.',
    description:
      'Web platform developed during my professional residency at the Instituto Tecnológico de Oaxaca (TecNM / ITO) to manage technical support requests, IT inventory, and incident tracking. It supports reporting issues, assigning support technicians, reviewing a full audit history for tickets and assets, and tracking equipment and consumables stock. I built the complete backend architecture with NestJS and PostgreSQL and integrated the React web client for real-time multi-user updates.',
    highlights: [
      'Support ticket management, technician assignment, and status workflow control',
      'Computer equipment and consumables inventory with multi-stage transfer tracking',
      'Change history log to support auditing of tickets and asset movements',
      'Real-time updates with Socket.io so staff see changes instantaneously',
      'Concurrency safeguards to prevent conflicts when multiple users update records simultaneously',
      'Explicit transactions with TypeORM QueryRunner ensuring consistency on inventory transfers',
      '998 automated tests organized across 143 test suites using Jest',
      'Multi-stage Docker containerization and Nginx reverse proxy for institutional deployment',
    ],
    technicalDetails: {
      architecturePattern:
        'Modular backend architecture with strict separation of concerns. The backend organizes authentication, tickets, assets, inventory, and auditing modules with dependency injection. The frontend structures views and reusable components by operational domain.',
      stateAndDataManagement:
        'PostgreSQL relational database with TypeORM. Implemented optimistic concurrency control to avoid conflicts on concurrent tickets, explicit QueryRunner transactions on inventory transfers, and Redis in-memory caching & rate limiting. Evidence attachments stored in MinIO S3. On the frontend, reactive synchronization with TanStack Query and Zustand.',
      keyChallenges: [
        'Preventing conflicts when multiple technicians update tickets or transfer equipment simultaneously using version validation and atomic transactions.',
        'Keeping the support team UI synchronized in real time without network overhead or stale data.',
        'Ensuring business workflow reliability through continuous automated testing and reproducible Docker containers.',
      ],
      engineeringDecisions: [
        'Separated backend (NestJS) and web client (React) to allow independent service evolution and clean API consumption.',
        '998 automated tests across 143 Jest suites, isolating components with test doubles to prevent regressions.',
        'Combined WebSockets (Socket.io) with TanStack Query cache invalidation to update screens as events occur.',
      ],
    },
  },
  'plataforma-core-empresarial': {
    title: 'Enterprise Core Platform — Backend & Web Frontend',
    tagline: 'Modular SaaS enterprise platform with NestJS, Prisma 7, PostgreSQL, Redis, BullMQ, and React 19',
    statusLabel: 'In Progress',
    description:
      'Comprehensive enterprise platform under active development due to its broad architectural scope. The modular backend (NestJS) and web frontend (React) are fully structured and operational, backed by 627 automated tests across 119 Jest suites. Features multifactor authentication (2FA/TOTP), hierarchical RBAC, S3 file explorer with real-time ClamAV antivirus scanning, immutable audit logs with JSON Diff viewer, BullMQ async queues, and WebSockets. The companion mobile client (sistema-phone) is in an early development stage.',
    highlights: [
      'Modular NestJS backend with Prisma ORM 7, PostgreSQL read replicas, and Redis',
      'Modern React 19 web frontend with Tailwind CSS v4, Zustand, and TanStack Query / Table',
      '627 automated tests across 119 Jest suites (100% pass rate on critical services)',
      'Decoupled Two-Factor Authentication (2FA/TOTP) with InputOTP and encrypted backup codes',
      'Hierarchical Role-Based Access Control (RBAC) with dynamic guards and directives',
      'S3 file storage with real-time streaming antivirus scanning via ClamAV',
      'Immutable audit trail with interactive JSON Diff state comparison viewer',
      'Background job processing with BullMQ and real-time notifications via WebSockets',
      'Local infrastructure orchestration with Docker Compose (13 interconnected services)',
      'Companion mobile client (sistema-phone with Expo) in initial development stage',
    ],
    technicalDetails: {
      architecturePattern:
        'Modular NestJS architecture and React 19 interface with strict separation between presentation, state logic, and network transport layers. Intensive jobs offloaded to BullMQ workers over Redis. Bidirectional real-time communication with WebSockets.',
      stateAndDataManagement:
        'PostgreSQL persistence with Prisma ORM 7 and read-replica routing support. Redis as shared memory for active sessions, rate limiting, and job queues. On frontend, TanStack Query v5 for server sync and Zustand for local state.',
      keyChallenges: [
        'Managing the complexity of a large-scale platform while keeping modules independent and maintainable.',
        'Ensuring critical workflow stability through 627 automated Jest tests to prevent regressions.',
        'Integrating streaming ClamAV antivirus scanning on S3 storage without hurting application latency.',
      ],
      engineeringDecisions: [
        'Clean separation between backend (nestjs-backend-core) and web client (react-frontend-core) for independent development and deployment.',
        'Fully decoupled 2FA/TOTP implementation with encrypted recovery codes.',
        'Prioritized the backend core and admin web panel before completing the mobile client (currently in early stage).',
      ],
    },
  },
  'nexus-bank-apx-java': {
    title: 'NexusBank APX Core — Transactional Banking Engine (Java & Spring Boot)',
    tagline: 'Banking simulator with ASO/APX layered architecture, SPEI transfers with pessimistic locking, CEP XML, Control-M batch, and 27 JUnit 5 tests.',
    description:
      'Transactional banking engine inspired by the BBVA APX + ASO enterprise architecture, built with Java 25 (Virtual Threads) and Spring Boot 4. Enforces strict layer isolation governed by automated reflection tests: REST/XML exposure layer (ASO), AOP lifecycle & ThreadLocal Advices error handling (APX Context), @Transactional orchestrators (APX Trx), and explicit SQL data libraries via JdbcTemplate (APX Lib). Includes SPEI transfers protected against double-spending via pessimistic locking (SELECT ... FOR UPDATE) and Idempotency-Key, Banxico CEP XML receipts, Control-M style nightly batch processing, Kafka event publishing with PII masking, and CI/CD pipelines for Jenkins, SonarQube, and Red Hat OpenShift.',
    highlights: [
      'Strict separation between ASO (REST Controller + Java Records @Valid) and APX (Transactional @Service and JdbcTemplate Libraries)',
      'AOP engine (@Around ApxExecutionAspect) managing ThreadLocal<List<Advice>>, auditing execution latency, and triggering automatic rollback on business errors (BBE001–BBE006)',
      'SPEI transfers with pessimistic database row locking (SELECT ... FOR UPDATE) and X-Idempotency-Key validation to prevent duplicate charges',
      'Electronic Payment Receipt (CEP Banxico) generation in XML format and Control-M style nightly interest batch job (NightlyBatchTrx)',
      'SPEI event publishing (KafkaEventLib) with automatic bank account PII masking in logs and payloads',
      '27 automated JUnit 5 tests across 7 test classes with JaCoCo coverage and architectural governance reflection tests (ArchitectureGovernanceTest)',
      'Declarative Jenkinsfile pipeline with SonarQube Quality Gate, non-root ZGC multi-stage Dockerfile, and Red Hat OpenShift manifests',
    ],
    technicalDetails: {
      architecturePattern:
        'Multi-layered ASO + APX banking architecture. The ASO layer exposes REST JSON and XML endpoints validating contracts with Java Records (@Valid), delegating exclusively to APX Transactions (SpeiTransferTrx, AccountQueryTrx, NightlyBatchTrx), which consume APX Library interfaces (AccountLib, KafkaEventLib) without coupling to implementations or JdbcTemplate.',
      stateAndDataManagement:
        'Relational persistence via explicit SQL with Spring JdbcTemplate (jdbcUtils) on an Oracle-compatible schema. Pessimistic concurrency control (SELECT balance FROM accounts WHERE account_number = ? FOR UPDATE) and an idempotency_keys table to guarantee ACID atomicity and prevent race conditions on concurrent transfers.',
      keyChallenges: [
        'Ensuring no upper layer (ASO or Transactions) violates architectural rules by directly injecting JdbcTemplate or concrete library implementations.',
        'Handling banking business errors without polluting business logic with manual exceptions, collecting BBE001–BBE006 codes in ThreadLocal to trigger automatic Spring AOP rollback.',
        'Preventing double-spending on concurrent SPEI transfers while masking sensitive account numbers in logs and async events.',
      ],
      engineeringDecisions: [
        'Implemented ArchitectureGovernanceTest using JUnit 5 reflection to fail the build automatically if a controller or transaction breaks ASO/APX layer isolation.',
        'Used Java Virtual Threads and ZGC garbage collector in a non-root Alpine JRE container alongside OpenShift Deployment, Service, and Route manifests.',
        'Added an interactive ASO/APX diagnostic web console and OpenAPI/Swagger UI for testing transfers, Control-M batch runs, and CEP XML queries.',
      ],
    },
  },
  'tiendita-ia-pos': {
    title: 'AI Smart POS — Computer Vision Point of Sale',
    tagline: 'Point of sale and inventory control powered by YOLOv8, ONNX DirectML, and ByteTrack',
    description:
      'Point-of-sale and inventory management system using computer vision to automatically identify retail products through a webcam. Uses a custom-trained YOLOv8 model (97.1% mAP@50 on validation over the project dataset, MiModelo_YOLO_BEST.pt), exported to ONNX and accelerated with DirectML (~21 FPS on AMD Radeon RX 6600M GPU). Combines ByteTrack multi-object tracking to follow moving items and prevent duplicate billing, alongside real-time stock updates, async audio alerts, and structured receipt generation.',
    highlights: [
      'GPU-accelerated computer vision inference via ONNX Runtime and DirectML (~21 FPS on AMD Radeon RX 6600M)',
      '97.1% mAP@50 validation accuracy on custom retail product dataset',
      'Multi-object visual tracking with ByteTrack to prevent duplicate checkouts on screen',
      'Confidence threshold filtering and multi-frame temporal persistence to reduce false positives',
      'Immediate stock updates and out-of-stock item control',
      'Clear cashier interface with automatic structured sales receipt generation',
    ],
    technicalDetails: {
      architecturePattern:
        'Modular pipeline split into inference subsystem (ONNX with DirectML), visual tracking engine (ByteTrack), inventory manager, and GUI overlay rendering on top of the live video stream.',
      stateAndDataManagement:
        'Structured JSON inventory persistence updated immediately on checkout. Asynchronous audio alert queue running on decoupled worker threads to keep the video processing loop smooth.',
      keyChallenges: [
        'Reducing false detections caused by shadows or changing lighting using confidence thresholds and multi-frame confirmation.',
        'Achieving ~21 FPS on an AMD Radeon RX 6600M GPU with DirectML without heavy PyTorch dependencies in production.',
        'Handling brief occlusions when a hand partially covers a product via continuous ByteTrack ID tracking.',
      ],
      engineeringDecisions: [
        'Exported the trained model to ONNX format for lightweight, portable execution across DirectML-enabled hardware.',
        'Offloaded sound alerts to a separate background thread to prevent blocking live frame inference.',
        'Designed a clear on-screen HUD showing scan status, stock counts, and running totals.',
      ],
    },
  },
  'laravel-12-blog-cms': {
    title: 'Laravel CMS & Reactive Blog',
    tagline: 'Content management system and interactive blog with Livewire Volt and Pest Tests',
    description:
      'Content management system (CMS) and interactive blog built with Laravel and PHP. Delivers server-driven reactivity without a separate SPA framework via Livewire Volt and Alpine.js: instant debounced search, comments, likes, and private reading bookmarks. Includes an admin dashboard with role and permission access control (Spatie RBAC), publishing analytics, CSV report exports, and a suite of 44 automated Pest PHP tests.',
    highlights: [
      'Built with Laravel, strictly typed PHP, and MySQL relational database',
      'Server-side reactivity using Livewire Volt and Alpine.js for smooth interactions',
      'Role and permission access control with Spatie Permission (Admin, Editor, Reader)',
      'Admin panel with metrics, post management, users, and categories',
      'Real-time search, private reading list bookmarks, and discussion comments',
      'Excel-compatible CSV report exports (UTF-8 with BOM)',
      '44 automated tests and 116 assertions verified with Pest PHP',
    ],
    technicalDetails: {
      architecturePattern:
        'Laravel MVC architecture paired with Livewire Volt single-file components. Dedicated administrative controllers for the management panel and well-defined Eloquent relationships.',
      stateAndDataManagement:
        'MySQL relational database with structured migrations and seeders. Livewire manages reactive client-server state, with in-memory SQLite for fast automated test execution.',
      keyChallenges: [
        'Implementing reactive debounced search and filters to avoid excessive database queries while typing.',
        'Enforcing strict permission isolation so authors can only edit and publish their own posts.',
        'Generating UTF-8 BOM CSV exports so special characters render properly in Excel.',
      ],
      engineeringDecisions: [
        'Adopted Pest PHP for a concise, readable, and fast test suite covering authentication, RBAC, and reactive components.',
        'Used Livewire Volt single-file components with Tailwind CSS to minimize boilerplate.',
        'Included one-click demo access to make reviewing different user roles effortless.',
      ],
    },
  },
  'vue-3-ecommerce': {
    title: 'TechStore — Vue 3 E-Commerce',
    tagline: 'Interactive online store with Vue 3, TypeScript, Pinia, and Vuetify 3',
    description:
      'Online storefront built with Vue 3 and TypeScript focused on computer peripherals and tech accessories. Features an interactive catalog with combined category and price-range filters, persistent shopping cart with automatic tax and coupon calculations, wishlist drawer, and a simulated multi-step checkout (interactive card, bank transfer, and store payment) with downloadable purchase receipts.',
    highlights: [
      'Built with Vue 3 Composition API (<script setup>) and Vite',
      'Global state management with Pinia and LocalStorage persistence',
      'Responsive UI with Vuetify 3 and light/dark theme support',
      'Real-time filtering by price range, categories, and sorting',
      'Multi-step checkout flow with strict form validation and interactive card preview',
      'Dynamic promo coupon calculation, taxes, and downloadable receipt generation',
    ],
    technicalDetails: {
      architecturePattern:
        'Reusable component architecture using Vue 3 Composition API, cleanly separating catalog and checkout views from Pinia business stores.',
      stateAndDataManagement:
        'Modular Pinia global state (catalog, cart, wishlist) synchronized with LocalStorage via VueUse to preserve cart items across reloads.',
      keyChallenges: [
        'Keeping subtotal, promo discount, and tax calculations reactively synchronized without rounding drift.',
        'Implementing real-time validation for card numbers, expiration dates, and security codes with issuer detection.',
        'Maintaining smooth catalog filtering across text search, price sliders, and categories.',
      ],
      engineeringDecisions: [
        'Enforced strict TypeScript across all components and Pinia stores to catch type errors at compile time.',
        'Used VueUse useLocalStorage for declarative persistence without repetitive boilerplate.',
        'Designed a complete interactive checkout flow requiring no real payment credentials for full technical demos.',
      ],
    },
  },
  'movie-app-react-native': {
    title: 'Movie App',
    tagline: 'Cross-platform movie and TV explorer built with Expo & NativeWind',
    description:
      'Cross-platform mobile application built with React Native and Expo to browse trending movies, releases, and cast details via The Movie Database (TMDB) API. Features smooth category navigation, technical detail sheets, local favorites persistence, portrait/landscape orientation support, and automatic light/dark system theming.',
    highlights: [
      'The Movie Database (TMDB) REST API integration with loading and error states',
      'Structured declarative navigation using Expo Router',
      'Optimized scrollable lists with lazy image loading',
      'Responsive layout adapting cleanly to portrait and landscape orientations',
      'System-synced light and dark theme support via NativeWind',
      'Local on-device persistence for user favorites list',
    ],
    technicalDetails: {
      architecturePattern:
        'Modular screen-and-component structure separating REST API consumption into dedicated service helpers.',
      stateAndDataManagement:
        'Custom hooks managing API request/response states alongside local device storage for saved favorites.',
      keyChallenges: [
        'Optimizing scroll performance across long lists and high-resolution image carousels.',
        'Adapting UI layouts seamlessly when rotating between portrait and landscape modes.',
        'Handling offline or API failure states gracefully with clear fallback views.',
      ],
      engineeringDecisions: [
        'Used Expo Router for maintainable file-based declarative navigation.',
        'Full TypeScript typing for all TMDB API response models.',
        'Adopted NativeWind utility classes for consistent styling and theme support.',
      ],
    },
  },
};

const tagNameTranslationsEn: Record<string, string> = {
  'Jest (998 pruebas / 143 suites)': 'Jest (998 tests / 143 suites)',
  'Jest (627 pruebas / 119 suites)': 'Jest (627 tests / 119 suites)',
  'Arquitectura BBVA APX / ASO': 'BBVA APX / ASO Architecture',
  'Spring JDBC / SQL (Modo Oracle)': 'Spring JDBC / SQL (Oracle Mode)',
  'JUnit 5 & JaCoCo (27 pruebas)': 'JUnit 5 & JaCoCo (27 tests)',
};

export function getLocalizedProject(project: Project, language: Language): Project {
  if (language === 'es') return project;
  const tr = projectTranslationsEn[project.id];
  if (!tr) return project;

  return {
    ...project,
    title: tr.title,
    tagline: tr.tagline,
    statusLabel: tr.statusLabel ?? project.statusLabel,
    description: tr.description,
    highlights: tr.highlights,
    tags: project.tags.map((tag) => ({
      ...tag,
      name: tagNameTranslationsEn[tag.name] ?? tag.name,
    })),
    technicalDetails: tr.technicalDetails ?? project.technicalDetails,
  };
}

const certificationIssuerTranslationsEn: Record<string, string> = {
  'Google Cloud (Verificado en Credly)': 'Google Cloud (Verified on Credly)',
  'Amazon Web Services (AWS) • Verificado en Credly': 'Amazon Web Services (AWS) • Verified on Credly',
  'Google Cloud (Insignia Credly)': 'Google Cloud (Credly Badge)',
  'TecNM / INFOTEC (Gobierno de México)': 'TecNM / INFOTEC (Government of Mexico)',
};

const certificationDateTranslationsEn: Record<string, string> = {
  '28 de septiembre de 2026': 'September 28, 2026',
  '10 de noviembre de 2025': 'November 10, 2025',
  '6 de octubre de 2025': 'October 6, 2025',
  '24 de agosto de 2025': 'August 24, 2025',
};

const certificationTitleTranslationsEn: Record<string, string> = {
  'tecnm-infotec-ia': 'Introductory Course — Public AI Training Center (INFOTEC / TecNM)',
  'udemy-react-cero-experto': 'React: From Zero to Expert',
  'udemy-nest-backend-escalable': 'NestJS: Scalable Backend Development with Node',
  'udemy-nestjs-reportes-pdf': 'NestJS + Reports: Generate PDFs from Node',
  'udemy-laravel-12-experto': 'Laravel 12: From Zero to Expert',
  'udemy-vue3-vite-pinia-ts': 'Vue 3, Vite, VueRouter, Vuetify, Pinia & TypeScript',
};

export function getLocalizedCertification(cert: Certification, language: Language): Certification {
  if (language === 'es') return cert;
  return {
    ...cert,
    title: certificationTitleTranslationsEn[cert.id] ?? cert.title,
    issuer: certificationIssuerTranslationsEn[cert.issuer] ?? cert.issuer,
    issueDate: certificationDateTranslationsEn[cert.issueDate] ?? cert.issueDate,
  };
}
