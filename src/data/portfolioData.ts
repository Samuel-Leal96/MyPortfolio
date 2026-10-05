export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: "react-native" | "angular" | "android-native" | "web";
  categoryLabel: string;
  image: string;
  tags: string[];
  features: string[];
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  deliverables: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Vega's",
    fullName: "Desarrollador Multiplataforma, nativo y web",
    title: "Ingeniero de Software & Desarrollador Multiplataforma",
    tagline:
      "Especialista en React Native, Angular, Android Nativo y Ecosistemas Web de alto rendimiento.",
    about:
      "Soy un desarrollador apasionado por crear aplicaciones modernas, ágiles y de alto rendimiento. Con experiencia sólida en ecosistemas móviles (React Native, Android Kotlin) y aplicaciones web empresariales (Angular, React, Node.js), ayudo a empresas y startups a transformar ideas complejas en productos digitales accesibles e intuitivos.",
    location: "Disponible para trabajo Remoto / Freelance",
    email: "Samuel_Leal96@outlook.com",
    whatsapp: "+52 481 111 59 24",
    github: "https://github.com/Samuel-Leal96",
    linkedin: "www.linkedin.com/in/samuel-leal96",
    cvUrl: "#",
    stats: [
      // { label: "Proyectos Entregados", value: "+20" },
      {
        label: "Tecnologías Principales",
        value: "React Native | Angular | Android | iOS",
      },
      { label: "Años de Experiencia", value: "+5" },
      { label: "Calidad de Código", value: "100%" },
    ],
  },

  services: [
    {
      id: "react-native | ionic",
      title: "Desarrollo Móvil con React Native",
      description:
        "Creación de aplicaciones móviles multiplataforma nativas para iOS y Android con una única base de código robusta y fluida.",
      iconName: "Smartphone",
      badge: "iOS & Android",
      deliverables: [
        "Publicación en App Store y Google Play Store",
        "Integración con APIs REST y Firebase",
        "Animaciones nativas a 60fps con Reanimated",
        "Autenticación con fingerprint o face id",
        "Notificaciones push",
        "Uso de componentes nativos del dispositivo (Bluetooth, Camara, GPS, NFC)",
        "Descarga de archivos PDF y manejo de archivos",
        "Modo offline y almacenamiento local seguro",
      ],
    },
    {
      id: "angular-web",
      title: "Aplicaciones Web Enterprise con Angular | React",
      description:
        "Plataformas web escalables, paneles de administración y dashboards interactivos con arquitectura modular Angular y TypeScript.",
      iconName: "Globe",
      badge: "Web & Enterprise",
      deliverables: [
        "Manejo de estado complejo con RxJS y NgRx",
        "Arquitectura reactiva con Angular Signals y Standalone Components",
        "Diseño responsive con Angular Material / Tailwind CSS",
        "Optimización de rendimiento, Lazy Loading y Renderizado SSR",
        "Integración en tiempo real con WebSockets y Server-Sent Events",
        "Soporte para Progressive Web Apps (PWA) y cachés avanzadas",
        "Seguridad web con Auth Guards, HTTP Interceptors y OAuth2 / OIDC",
        "Dashboards interactivos y visualización de métricas en tiempo real",
        "Testing unitario (Jasmine/Jest) e integración continua (CI/CD)",
      ],
    },
    {
      id: "android-native",
      title: "Desarrollo Android Nativo (Kotlin)",
      description:
        "Soluciones móviles de alta exigencia técnica aprovechando al máximo el hardware y librerías nativas de Android.",
      iconName: "Cpu",
      badge: "Kotlin & Jetpack Compose",
      deliverables: [
        "UI moderna con XML y Jetpack Compose",
        "Arquitectura MVVM / Clean Architecture",
        "Integración nativa con hardware (Cámara, GPS, Bluetooth, Sensores GPS, NFC)",
        "Programación asíncrona con Kotlin Coroutines & Flow",
        "Inyección de dependencias con Hilt / Dagger",
        "Autenticación con fingerprint o face id",
        "Notificaciones push",
        "Persistencia de datos con Room Database y DataStore",
        "Optimización de consumo de batería y memoria",
        "Pruebas unitarias e instrumentadas (JUnit, Espresso)",
      ],
    },
    {
      id: "fullstack-api",
      title: "Integración Backend & APIs",
      description:
        "Diseño y consumo de arquitecturas backend modernas para dar soporte completo a tus clientes web y móviles.",
      iconName: "Server",
      badge: "APIs & Backend",
      deliverables: [
        "APIs RESTful y GraphQL escalables",
        "Autenticación JWT, OAuth2 y Firebase Auth",
        "Bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB, Redis)",
        "Despliegue en servicios Cloud (Azure, AWS, Docker)",
        "Integración de pasarelas de pago (Stripe, PayPal, MercadoPago)",
        "Webhooks y arquitectura orientada a eventos",
        "Documentación interactiva con OpenAPI / Swagger",
      ],
    },
  ] as Service[],

  skillCategories: [
    {
      category: "Desarrollo Móvil",
      description:
        "Especialidad en creación de apps iOS & Android fluido y nativo.",
      skills: [
        {
          name: "React Native",
          level: 95,
          icon: "Smartphone",
          highlight: true,
        },
        {
          name: "Android Nativo (Kotlin)",
          level: 90,
          icon: "Cpu",
          highlight: true,
        },
        { name: "Jetpack Compose", level: 85, icon: "Layers" },
        { name: "Expo / Native Modules", level: 90, icon: "Box" },
        { name: "iOS Swift Basics", level: 75, icon: "Tablet" },
      ],
    },
    {
      category: "Desarrollo Web Frontend",
      description: "Creación de interfaces web ágiles, accesibles y modulares.",
      skills: [
        { name: "Angular (12+)", level: 92, icon: "Globe", highlight: true },
        {
          name: "TypeScript / JavaScript ES6+",
          level: 95,
          icon: "Code",
          highlight: true,
        },
        { name: "React.js & Next.js", level: 90, icon: "Layout" },
        { name: "Tailwind CSS & Material UI", level: 92, icon: "Palette" },
        { name: "RxJS & Redux / Zustand", level: 88, icon: "Activity" },
      ],
    },
    {
      category: "Backend & Base de Datos",
      description:
        "Gestión de servicios, autenticación y persistencia de datos.",
      skills: [
        { name: "Node.js & Express", level: 85, icon: "Server" },
        { name: "Firebase & Supabase", level: 90, icon: "Zap" },
        { name: "RESTful APIs & GraphQL", level: 90, icon: "Network" },
        { name: "PostgreSQL & MongoDB", level: 80, icon: "Database" },
      ],
    },
    {
      category: "Herramientas & Metodologías",
      description:
        "Flujo de trabajo profesional, control de versiones y despliegue.",
      skills: [
        { name: "Git & GitHub Workflow", level: 95, icon: "GitBranch" },
        { name: "Android Studio & Xcode", level: 90, icon: "Terminal" },
        { name: "Figma & UI/UX Handoff", level: 85, icon: "Figma" },
        { name: "Scrum & Agile Development", level: 90, icon: "CheckCircle" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "fintech-mobile-app",
      title: "Fintech Go - Billetera Digital Multiplataforma",
      subtitle:
        "App móvil completa de transferencias, presupuesto y tarjetas virtuales",
      description:
        "Aplicación móvil desarrollada en React Native con navegación rápida, autenticación biométrica (Face ID / Huella), gráficos interactivos y sincronización de saldo en tiempo real.",
      longDescription:
        "Fintech Go es una billetera digital diseñada para usuarios que buscan gestionar sus finanzas de manera limpia e intutitiva. Cuenta con escáner de códigos QR para pagos instantáneos, notificaciones push personalizadas mediante Firebase Cloud Messaging y reportes de gastos categorizados en gráficos interactivos.",
      category: "react-native",
      categoryLabel: "React Native",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase Auth",
        "Biometrics",
        "Tailwind/NativeWind",
      ],
      features: [
        "Autenticación Biométrica Nativa (Touch ID / Face ID)",
        "Gráficos interactivos de ingresos y egresos diarios",
        "Efectos de tarjetas de crédito 3D personalizables",
        "Historial de transacciones con filtros avanzados",
      ],
      architecture:
        "Clean Architecture + Redux Toolkit con persistencia local cifrada (MMKV).",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "angular-erp-dashboard",
      title: "OmniSales ERP - Dashboard Web Empresarial",
      subtitle:
        "Plataforma de gestión de inventario, ventas y reportes corporativos",
      description:
        "Sistema de gestión empresarial desarrollado en Angular 17 con RxJS para actualización reactiva de inventarios, generación de facturas PDF y tableros kanban de seguimiento de pedidos.",
      longDescription:
        "OmniSales ERP es una suite web diseñada para optimizar los procesos operativos de medianas y grandes empresas. Implementa la arquitectura modular de Angular con micro-frontends conceptuales, carga perezosa de módulos (Lazy Loading) y guardias de rutas basados en roles de usuario (RBAC).",
      category: "angular",
      categoryLabel: "Angular",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "Angular 17",
        "TypeScript",
        "RxJS",
        "NgRx",
        "Angular Material",
        "Tailwind CSS",
      ],
      features: [
        "Tablero analítico con métricas en tiempo real mediante WebSockets",
        "Gestor de permisos por rol de usuario (Admin, Vendedor, Auditor)",
        "Exportación masiva de datos en Excel, CSV y PDF",
        "Soporte multilenguaje (i18n) y tema Oscuro / Claro",
      ],
      architecture:
        "Arquitectura Modular Angular basada en Feature Modules y NgRx State Management.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "android-fitness-tracker",
      title: "PulseFit - Tracker Deportivo Nativo Android",
      subtitle:
        "App de entrenamiento con seguimiento GPS y consumo inteligente de sensores",
      description:
        "Aplicación Android nativa escrita 100% en Kotlin usando Jetpack Compose. Monitorea rutinas en tiempo real mediante GPS, Room Database y consumo eficiente de sensores del teléfono.",
      longDescription:
        "PulseFit es una aplicación nativa diseñada para atletas que requieren alta precisión en el registro de sus rutas de running y ciclismo. Gracias al uso de Foreground Services en Android, mantiene el registro GPS activo incluso cuando el usuario apaga la pantalla.",
      category: "android-native",
      categoryLabel: "Android Nativo",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "Android Nativo",
        "Kotlin",
        "Jetpack Compose",
        "Room DB",
        "Coroutines & Flow",
        "Google Maps API",
      ],
      features: [
        "Interfaz futurista declarativa con Jetpack Compose y Material You",
        "Seguimiento de rutas en mapa interactivo con Google Maps SDK",
        "Base de datos local Room offline-first con sincronización en la nube",
        "Integración con sensores de podómetro y acelerómetro",
      ],
      architecture:
        "MVVM (Model-View-ViewModel) con Android Jetpack, Hilt Dependency Injection y Coroutines.",
      githubUrl: "https://github.com",
      apkUrl: "https://example.com/pulsefit.apk",
      featured: true,
    },
    {
      id: "food-delivery-multiplatform",
      title: "DeliveryNow - Suite Multiplataforma (App Móvil + Web)",
      subtitle:
        "Ecosistema de pedidos en tiempo real para clientes y repartidores",
      description:
        "Sistema integrado compuesto por App móvil en React Native para usuarios finales y Panel de administración en Angular para restaurantes y logística de entregas.",
      longDescription:
        "DeliveryNow conecta clientes, restaurantes y repartidores en una sola plataforma fluida. Incluye rastreo del repartidor en mapa en tiempo real, pasarela de pago integrada y notificaciones instantáneas de estado del pedido.",
      category: "react-native",
      categoryLabel: "React Native & Angular",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "React Native",
        "Angular",
        "Node.js",
        "Socket.io",
        "Stripe API",
        "Google Maps",
      ],
      features: [
        "Rastreo por GPS del repartidor con animaciones de mapa sin saltos",
        "Pasarela de pagos en línea con Stripe y Apple Pay / Google Pay",
        "Notificaciones Push interactivas de cambio de estado de preparación",
        "Panel web de administración en Angular para la cocina",
      ],
      architecture:
        "Fullstack Monorepo: React Native App + Angular Dashboard + Node.js Socket.io Server.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: "angular-medical-portal",
      title: "MediCare Clinic - Portal de Citas y Telemedicina",
      subtitle:
        "Sistema de agendas médicas, videollamadas y expedientes digitales",
      description:
        "Plataforma web desarrollada en Angular con videollamadas WebRTC integradas, gestión de historias clínicas encriptadas y pagos de consultas.",
      longDescription:
        "MediCare Clinic facilita la atención médica remota permitiendo a los pacientes agendar citas con especialistas, realizar videollamadas HD directamente en el navegador y descargar sus recetas firmadas digitalmente.",
      category: "angular",
      categoryLabel: "Angular",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "Angular",
        "TypeScript",
        "WebRTC",
        "RxJS",
        "Tailwind CSS",
        "Node.js",
      ],
      features: [
        "Salas de videollamada privadas encriptadas punto a punto",
        "Calendario interactivo de agendamiento con zonas horarias",
        "Firma digital de documentos y emisión de recetas en PDF",
        "Cumplimiento de estándares de seguridad y privacidad clínica",
      ],
      architecture:
        "Angular Single Page Application + Express WebRTC Signaling Server.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: "android-iot-controller",
      title: "SmartHome Hub - Control Domótico Nativo Android",
      subtitle:
        "App nativa en Kotlin para monitoreo y control de dispositivos inteligentes",
      description:
        "Aplicación nativa para Android enfocada en el control de IoT mediante comunicación MQTT, Bluetooth Low Energy (BLE) y widgets personalizados en pantalla de inicio.",
      longDescription:
        "SmartHome Hub transforma cualquier teléfono o tablet Android en una central domótica. Permite programar automatizaciones de luces, sensores de temperatura, cámaras de seguridad y cerraduras inteligentes.",
      category: "android-native",
      categoryLabel: "Android Nativo",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
      tags: [
        "Android Nativo",
        "Kotlin",
        "BLE Bluetooth",
        "MQTT Protocol",
        "Android Widgets",
        "Coroutines",
      ],
      features: [
        "Escaneo instantáneo de dispositivos BLE cercanos",
        "Widgets interactivos para la pantalla principal de Android",
        "Consumo ultrabajo de batería con arquitectura de segundo plano",
        "Dashboard personalizado con estado de sensores domóticos",
      ],
      architecture:
        "Android Native MVVM con Hilt, MQTT Paho Client y Kotlin Coroutines StateFlow.",
      githubUrl: "https://github.com",
      apkUrl: "https://example.com/smarthome.apk",
      featured: false,
    },
  ] as Project[],

  workProcess: [
    {
      step: "01",
      title: "Análisis & Requerimientos",
      description:
        "Definición clara de objetivos, alcance del producto, arquitectura idónea (React Native, Angular o Android Nativo) y diseño de experiencia de usuario (UX).",
    },
    {
      step: "02",
      title: "Prototipado & Arquitectura",
      description:
        "Creación de prototipos visuales interactivos y establecimiento de las bases del código con Clean Architecture y buenas prácticas de desarrollo.",
    },
    {
      step: "03",
      title: "Desarrollo & Pruebas Continuas",
      description:
        "Programación ágil con entregas periódicas, pruebas unitarias, integración de APIs y pruebas de rendimiento en dispositivos reales.",
    },
    {
      step: "04",
      title: "Despliegue & Soporte",
      description:
        "Publicación en la web (Vercel/Netlify), tiendas móviles (Google Play Store & App Store) y acompañamiento técnico post-lanzamiento.",
    },
  ],

  testimonials: [
    {
      quote:
        "Excelente trabajo en nuestra aplicación móvil en React Native. Logró llevar nuestra idea a App Store y Play Store con un rendimiento impresionante y en tiempo récord.",
      author: "Carlos Mendoza",
      role: "CTO en TechInnovate",
      company: "TechInnovate Solutions",
    },
    {
      quote:
        "El dashboard en Angular que desarrolló para nuestra empresa transformó la manera en que gestionamos nuestros datos operativos. Código muy limpio, modular y fácil de mantener.",
      author: "Sofia Ramírez",
      role: "Product Manager",
      company: "Global Logistics",
    },
    {
      quote:
        "Su dominio de Kotlin y desarrollo Android nativo solucionó problemas críticos de consumo de batería y sincronización offline en nuestros sensores industriales.",
      author: "Ing. Alejandro Torres",
      role: "Director de Ingeniería",
      company: "SmartIoT Devices",
    },
  ],
};
