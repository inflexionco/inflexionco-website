export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: 'mobile' | 'web' | 'pwa' | 'ios' | 'android';
  platforms: string[];
  category: string;
  color: string;
  icon: string;
  heroImage?: string;
  screenshots: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  techStack: {
    frontend: string[];
    backend?: string[];
    infrastructure?: string[];
  };
  metrics?: {
    users?: string;
    rating?: string;
    downloads?: string;
  };
  links?: {
    appStore?: string;
    playStore?: string;
    website?: string;
    github?: string;
  };
  status: 'live' | 'beta' | 'development';
  cta: {
    title: string;
    description: string;
    buttons: {
      text: string;
      type: 'primary' | 'secondary';
      link?: string;
    }[];
  };
}

export const projects: ProjectData[] = [
  {
    id: 'linkkeep',
    name: 'LinkKeep',
    tagline: 'Smart article saver with AI-powered tagging',
    description: 'A modern Android alternative to Pocket, featuring one-tap article saving, AI-powered automatic tagging, and offline reading. Save articles from any app, listen with text-to-speech, and organize with smart collections.',
    type: 'android',
    platforms: ['Android'],
    category: 'Productivity',
    color: 'blue',
    icon: '🔖',
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '🚀',
        title: 'One-Tap Saving',
        description: 'Save articles from any app via share intent with a single tap.',
      },
      {
        icon: '🤖',
        title: 'AI Auto-Tagging',
        description: 'Automatic tag generation using Google Gemini for smart organization.',
      },
      {
        icon: '🔊',
        title: 'Text-to-Speech',
        description: 'Listen to any article with natural voice narration and adjustable speed.',
      },
      {
        icon: '🎥',
        title: 'YouTube Support',
        description: 'Save and watch YouTube videos with full metadata and in-app player.',
      },
      {
        icon: '📖',
        title: 'Offline Reading',
        description: 'Parsed article content stored locally for reading without internet.',
      },
      {
        icon: '🔍',
        title: 'Smart Search',
        description: 'Full-text search across all saved articles with powerful filtering.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Jetpack Compose', 'Material 3'],
      backend: ['Room Database', 'Coroutines', 'Flow', 'Jsoup', 'Google Gemini AI'],
      infrastructure: ['Min SDK 24', 'Target SDK 36'],
    },
    links: {
      github: 'https://github.com/inflexionco/LinkKeep',
    },
    status: 'development',
    cta: {
      title: 'Your Pocket alternative is here',
      description: 'LinkKeep combines one-tap saving with AI-powered organization. Save articles, YouTube videos, and any link with automatic tagging and text-to-speech support.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/LinkKeep' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'arcanecomics',
    name: 'Arcane Comics',
    tagline: 'Personal digital comic book library and reader',
    description: 'A personal digital comic book library and reader app for Android and iOS. Organize, read, and enjoy your digital comic collection with a native-feeling experience. Import CBR, CBZ, and PDF files with high-performance reading.',
    type: 'mobile',
    platforms: ['iOS', 'Android'],
    category: 'Entertainment',
    color: 'purple',
    icon: '📚',
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '📖',
        title: 'Multi-Format Support',
        description: 'Import and read .cbr, .cbz, and .pdf comic files with optimized rendering.',
      },
      {
        icon: '🎨',
        title: 'High-Performance Reader',
        description: 'Image-based comic reader with page pre-loading for smooth navigation.',
      },
      {
        icon: '📚',
        title: 'Library Organization',
        description: 'Track reading status, view progress indicators, and organize your collection.',
      },
      {
        icon: '🔍',
        title: 'Smart Search',
        description: 'Search comics by title or series with advanced sorting options.',
      },
      {
        icon: '✋',
        title: 'Touch Controls',
        description: 'Swipe gestures, pinch-to-zoom, and minimalist auto-hiding controls.',
      },
      {
        icon: '💾',
        title: 'Local Storage',
        description: 'All comics stored locally in app private storage with metadata extraction.',
      },
    ],
    techStack: {
      frontend: ['Flutter', 'Dart'],
      backend: ['Isar Database', 'Riverpod', 'Syncfusion PDF Viewer'],
      infrastructure: ['get_it DI', 'Archive Package'],
    },
    links: {
      github: 'https://github.com/inflexionco/ArcaneComics',
    },
    status: 'development',
    cta: {
      title: 'Your personal comic library awaits',
      description: 'Arcane Comics brings your digital comic collection to life with a native reading experience on both Android and iOS.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/ArcaneComics' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'aranya',
    name: 'The Aranya Restaurant',
    tagline: 'Real-time order management system',
    description: 'A comprehensive, production-ready restaurant order management system with real-time communication between customers and kitchen staff. Features seamless "no-install" ordering via iOS App Clips and Android Instant Apps.',
    type: 'mobile',
    platforms: ['iOS', 'Android', 'Web'],
    category: 'Business',
    color: 'orange',
    icon: '🍽️',
    screenshots: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '📱',
        title: 'QR Code Ordering',
        description: 'Scan table QR to launch App Clip/Instant App instantly without installation.',
      },
      {
        icon: '💳',
        title: 'UPI Payments',
        description: 'Seamless payment integration via GPay, PhonePe, and Paytm.',
      },
      {
        icon: '📊',
        title: 'Kitchen Dashboard',
        description: 'Real-time order view with audio alerts and status management for chefs.',
      },
      {
        icon: '🔔',
        title: 'Live Order Tracking',
        description: 'Real-time updates via WebSocket as orders move from preparing to served.',
      },
      {
        icon: '⚡',
        title: 'Call Waiter',
        description: 'Request assistance with a single tap, instant alerts to staff.',
      },
      {
        icon: '🎛️',
        title: 'Menu Management',
        description: 'Admin controls for menu items, categories, and real-time availability.',
      },
    ],
    techStack: {
      frontend: ['Flutter 3.0+', 'Provider', 'GoRouter', 'Material Design'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'JWT', 'Sequelize ORM'],
      infrastructure: ['PM2', 'Docker', 'Nginx'],
    },
    links: {
      github: 'https://github.com/inflexionco/TheAranyaRestaurant',
    },
    status: 'development',
    cta: {
      title: 'Revolutionize your restaurant operations',
      description: 'The Aranya Restaurant brings modern technology to dining with no-install ordering, real-time communication, and comprehensive management tools.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/TheAranyaRestaurant' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'kompakt',
    name: 'Kompakt',
    tagline: 'Fast and secure PDF compression tool',
    description: 'A fast, user-friendly, and secure PDF compression web application powered by Ghostscript. Compress multiple PDFs at once with various quality presets, all processed securely in the cloud with automatic file deletion.',
    type: 'web',
    platforms: ['Web Application'],
    category: 'Utilities',
    color: 'blue',
    icon: '📄',
    screenshots: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554224311-beee4f952c14?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1586281380923-c69aa4b3d46c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544816565-aa7f56d7e164?w=1200&h=800&fit=crop',
    ],
    features: [
      {
        icon: '🎯',
        title: 'Drag & Drop Interface',
        description: 'Simple and intuitive file upload with visual feedback.',
      },
      {
        icon: '⚡',
        title: 'Multiple Compression Levels',
        description: 'Screen (72 DPI), eBook (150 DPI), Printer (300 DPI), and Default presets.',
      },
      {
        icon: '📦',
        title: 'Batch Processing',
        description: 'Compress multiple PDFs at once for efficient workflow.',
      },
      {
        icon: '🔒',
        title: 'Secure Processing',
        description: 'Files are automatically deleted after download for complete privacy.',
      },
      {
        icon: '🚀',
        title: 'Fast Performance',
        description: 'Serverless architecture powered by Vercel for quick processing.',
      },
      {
        icon: '💰',
        title: 'Completely Free',
        description: 'No paywalls, no limitations, no registration required.',
      },
    ],
    techStack: {
      frontend: ['React', 'Vite', 'Tailwind CSS'],
      backend: ['Node.js Serverless', 'Ghostscript', 'lambda-ghostscript'],
      infrastructure: ['Vercel', 'AWS Lambda'],
    },
    links: {
      github: 'https://github.com/inflexionco/Kompakt',
    },
    status: 'live',
    cta: {
      title: 'Compress PDFs in seconds',
      description: 'Kompakt makes PDF compression simple and secure. No installation, no signup, just drag, drop, and download your optimized files.',
      buttons: [
        { text: 'Try It Now', type: 'primary', link: '#' },
        { text: 'View on GitHub', type: 'secondary', link: 'https://github.com/inflexionco/Kompakt' },
      ],
    },
  },
  {
    id: 'soratabs',
    name: 'Sora Tabs',
    tagline: 'Your tabs, across the sky',
    description: 'A modern, simple, and highly functional browser extension for saving, organizing, and synchronizing tabs across all your devices and browser profiles. Features bulk selection, cross-device sync, and smart organization.',
    type: 'web',
    platforms: ['Chrome', 'Firefox', 'Safari'],
    category: 'Productivity',
    color: 'purple',
    icon: '☁️',
    screenshots: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
    ],
    features: [
      {
        icon: '✅',
        title: 'Bulk Selection',
        description: 'Select multiple tabs at once using checkboxes, instead of all or none.',
      },
      {
        icon: '🔄',
        title: 'Cross-Device Sync',
        description: 'Synchronize your saved tabs across all devices and browser profiles.',
      },
      {
        icon: '📁',
        title: 'Smart Organization',
        description: 'Group, name, describe, and color-code your tab collections with folders and tags.',
      },
      {
        icon: '🔍',
        title: 'Advanced Search',
        description: 'Search with operators (title:, url:, domain:, group:) for instant results.',
      },
      {
        icon: '🎨',
        title: 'Modern UI',
        description: 'Clean, intuitive interface with theme support (light, dark, auto).',
      },
      {
        icon: '🔐',
        title: 'Google OAuth',
        description: 'Secure authentication with automatic background sync every 30 seconds.',
      },
    ],
    techStack: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'PostgreSQL', 'Google OAuth 2.0'],
      infrastructure: ['Chrome Extension API', 'WebExtensions API'],
    },
    links: {
      github: 'https://github.com/inflexionco/SoraTabs',
    },
    status: 'development',
    cta: {
      title: 'Superior tab management for modern browsers',
      description: 'Sora Tabs brings bulk selection, cross-device sync, and smart organization to your browser. A true alternative to OneTab and similar extensions.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/SoraTabs' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'storyloom',
    name: 'Storyloom',
    tagline: 'Modern magazine reader app',
    description: 'A beautiful, modern Android magazine reader application built with Jetpack Compose and Material Design 3. Storyloom provides a seamless reading experience with smooth animations, intuitive navigation, and a clean user interface.',
    type: 'android',
    platforms: ['Android'],
    category: 'Entertainment',
    color: 'orange',
    icon: '📖',
    screenshots: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '🏠',
        title: 'Category Browsing',
        description: 'Browse magazines by category with horizontal scrolling sections.',
      },
      {
        icon: '📚',
        title: 'Magazine Reader',
        description: 'Smooth page-by-page reading with thumbnail navigation and page counter.',
      },
      {
        icon: '🔍',
        title: 'Search & Discovery',
        description: 'Search magazines by name or keyword, browse by category with trending suggestions.',
      },
      {
        icon: '⭐',
        title: 'Favorites',
        description: 'Save your favorite magazines for quick access with grid/list view toggle.',
      },
      {
        icon: '🎨',
        title: 'Material Design 3',
        description: 'Modern UI with smooth animations, Material 3 components, and better visual hierarchy.',
      },
      {
        icon: '⚡',
        title: 'Performance Optimized',
        description: 'Lazy loading, efficient image caching, and optimized recompositions.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Coil'],
      backend: ['Navigation Compose', 'Kotlin Flow', 'StateFlow'],
      infrastructure: ['Min SDK 24', 'Target SDK 36', 'MVVM Architecture'],
    },
    links: {
      github: 'https://github.com/inflexionco/Storyloom',
    },
    status: 'development',
    cta: {
      title: 'Your magazine collection, beautifully presented',
      description: 'Storyloom combines elegant design with powerful features for the ultimate magazine reading experience on Android.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/Storyloom' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'atelierai',
    name: 'Atelier AI',
    tagline: 'Privacy-focused image editor',
    description: 'A modern, privacy-focused Progressive Web App for AI-powered image editing. All processing happens locally in your browser - your images never leave your device. Features AI background removal, filters, and multiple export formats.',
    type: 'pwa',
    platforms: ['Progressive Web App', 'iOS', 'Android'],
    category: 'Creative Tools',
    color: 'purple',
    icon: '🎨',
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    ],
    features: [
      {
        icon: '🤖',
        title: 'AI Background Removal',
        description: 'Powered by RMBG-1.4 model, works with people, objects, and logos.',
      },
      {
        icon: '🎨',
        title: 'Manual Filters',
        description: '8 adjustable filters including brightness, contrast, saturation, and blur.',
      },
      {
        icon: '⚡',
        title: 'Quick Presets',
        description: 'One-click filters for common styles: Vintage, Cool, Warm, and more.',
      },
      {
        icon: '🔄',
        title: 'Transform Tools',
        description: 'Rotate, flip, and resize images with intuitive controls.',
      },
      {
        icon: '💾',
        title: 'Multiple Export Formats',
        description: 'Export as PNG, JPEG, WebP, or AVIF with quality sliders.',
      },
      {
        icon: '🔒',
        title: '100% Client-Side',
        description: 'All processing happens in your browser. No server uploads, complete privacy.',
      },
    ],
    techStack: {
      frontend: ['React 18', 'Vite'],
      backend: ['@imgly/background-removal', 'IndexedDB', 'Service Workers'],
      infrastructure: ['Vercel', 'PWA', 'Workbox'],
    },
    links: {
      github: 'https://github.com/inflexionco/AtelierAI',
    },
    status: 'live',
    cta: {
      title: 'Edit images with complete privacy',
      description: 'Atelier AI brings AI-powered image editing to your browser. All processing happens locally - your images never leave your device.',
      buttons: [
        { text: 'Try It Now', type: 'primary', link: '#' },
        { text: 'View on GitHub', type: 'secondary', link: 'https://github.com/inflexionco/AtelierAI' },
      ],
    },
  },
  {
    id: 'fundly',
    name: 'Fundly',
    tagline: 'Modern fundraising application',
    description: 'A modern Android fundraising application built with Kotlin and Jetpack Compose. Fundly is designed to facilitate fundraising activities with a reactive and declarative UI experience using Material Design 3.',
    type: 'android',
    platforms: ['Android'],
    category: 'Finance',
    color: 'green',
    icon: '💰',
    screenshots: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '🚀',
        title: 'Modern UI',
        description: 'Built with Jetpack Compose for reactive and declarative UI experience.',
      },
      {
        icon: '🎨',
        title: 'Material Design 3',
        description: 'Beautiful interface following latest Material Design guidelines.',
      },
      {
        icon: '📱',
        title: 'Edge-to-Edge Display',
        description: 'Full-screen immersive experience with modern Android design.',
      },
      {
        icon: '🏗️',
        title: 'MVVM Architecture',
        description: 'Clean architecture with clear separation of concerns.',
      },
      {
        icon: '⚡',
        title: 'Single Activity',
        description: 'Uses single-activity architecture with Compose navigation.',
      },
      {
        icon: '🔧',
        title: 'Modern Tooling',
        description: 'Built with Kotlin DSL, Gradle 8.x, and Java 11.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Activity Compose'],
      backend: ['AndroidX Core KTX', 'Lifecycle Runtime KTX'],
      infrastructure: ['Min SDK 24', 'Target SDK 36', 'Gradle 8.x'],
    },
    links: {
      github: 'https://github.com/inflexionco/fundly',
    },
    status: 'development',
    cta: {
      title: 'Fundraising made modern',
      description: 'Fundly brings modern Android development practices to fundraising with Jetpack Compose and Material Design 3.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/fundly' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'energiq',
    name: 'EnergiQ',
    tagline: 'Smart battery management',
    description: 'Take control of your battery health with intelligent monitoring and insights. EnergiQ helps you maximize your device\'s battery lifespan through smart notifications, charging patterns, and actionable insights.',
    type: 'android',
    platforms: ['Android'],
    category: 'Utilities',
    color: 'green',
    icon: '⚡',
    screenshots: [
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1609852266194-9b2d2a3d3e3e?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '📊',
        title: 'Real-Time Monitoring',
        description: 'Live battery status with voltage, temperature, and power consumption metrics.',
      },
      {
        icon: '🔔',
        title: 'Smart Notifications',
        description: 'Get notified at optimal charge levels (80%) and temperature warnings.',
      },
      {
        icon: '📈',
        title: 'Charging History',
        description: 'Detailed records of every charging session with analytics and trends.',
      },
      {
        icon: '❤️',
        title: 'Battery Health Insights',
        description: 'Monitor health status, cycle count, capacity tracking, and degradation trends.',
      },
      {
        icon: '📱',
        title: 'Multi-Device Support',
        description: 'Track battery health across all your Android devices with history per device.',
      },
      {
        icon: '🔒',
        title: 'Privacy First',
        description: 'All data stays local, no account required, no ads, no tracking.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Jetpack Compose', 'Material 3'],
      backend: ['Room Database', 'BatteryManager API', 'Foreground Service'],
      infrastructure: ['Min SDK 24 (Android 7.0)', 'Android 14+ for cycle count'],
    },
    links: {
      github: 'https://github.com/inflexionco/energiq',
    },
    status: 'development',
    cta: {
      title: 'Extend your battery life',
      description: 'EnergiQ helps you maximize your device\'s battery lifespan through intelligent monitoring, smart alerts, and actionable insights.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/energiq' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'tinytally',
    name: 'TinyTally',
    tagline: 'Baby activity tracker for modern parents',
    description: 'A Progressive Web App designed to help parents track their child\'s daily activities including milk intake, diaper changes, and sleep patterns. Mobile-first design with offline capability and complete privacy.',
    type: 'pwa',
    platforms: ['Progressive Web App', 'iOS', 'Android'],
    category: 'Health & Parenting',
    color: 'orange',
    icon: '👶',
    screenshots: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
    ],
    features: [
      {
        icon: '🍼',
        title: 'Feed Tracking',
        description: 'Track breastfeeding (left/right), formula, and pumped milk with built-in timer and amount logging.',
      },
      {
        icon: '👶',
        title: 'Diaper Monitoring',
        description: 'Log wet, dirty, or both with detailed tracking of wetness level, consistency, and color.',
      },
      {
        icon: '😴',
        title: 'Sleep Tracking',
        description: 'Real-time sleep tracking or manual entry for naps and night sleep with duration calculation.',
      },
      {
        icon: '📊',
        title: 'Daily Dashboard',
        description: 'Quick overview of today\'s activities with stats for feeds, diapers, and total sleep hours.',
      },
      {
        icon: '📱',
        title: 'Mobile-First Design',
        description: 'Optimized for touchscreens with large, finger-friendly buttons for one-handed use.',
      },
      {
        icon: '🔒',
        title: 'Privacy First',
        description: 'All data stored locally on your device using IndexedDB. Never leaves your device.',
      },
    ],
    techStack: {
      frontend: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide React'],
      backend: ['Dexie.js (IndexedDB)', 'Service Workers', 'Workbox'],
      infrastructure: ['Vercel', 'PWA', 'Installable App'],
    },
    links: {
      website: 'https://tinytally-pwa.vercel.app',
      github: 'https://github.com/inflexionco/TinyTallyPWA',
    },
    status: 'live',
    cta: {
      title: 'Track your baby\'s activities effortlessly',
      description: 'TinyTally is a free PWA that works offline. Install it on your phone for quick access to track feeds, diapers, and sleep with complete privacy.',
      buttons: [
        { text: 'Open TinyTally', type: 'primary', link: 'https://tinytally-pwa.vercel.app' },
        { text: 'View on GitHub', type: 'secondary', link: 'https://github.com/inflexionco/TinyTallyPWA' },
      ],
    },
  },
  {
    id: 'glidebrowser',
    name: 'GlideBrowser',
    tagline: 'Native Android TV web browser with Jetpack Compose',
    description: 'A native Android TV browser built with Jetpack Compose and modern Android development practices. Provides a seamless browsing experience optimized for TV screens with remote control navigation, tab management, and local data persistence.',
    type: 'android',
    platforms: ['Android TV', 'Google TV'],
    category: 'Utilities',
    color: 'blue',
    icon: '🌐',
    screenshots: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    ],
    features: [
      {
        icon: '🌐',
        title: 'WebView Integration',
        description: 'Full-featured web browsing experience with modern WebView for Compose integration.',
      },
      {
        icon: '📑',
        title: 'Tab Management',
        description: 'Support for multiple browsing tabs with seamless switching and tab persistence.',
      },
      {
        icon: '🔖',
        title: 'Bookmarks & History',
        description: 'Save favorite websites and track browsing history with Room database storage.',
      },
      {
        icon: '📺',
        title: 'TV-Optimized UI',
        description: 'Interface designed for Android TV with Material 3 for TV and remote control support.',
      },
      {
        icon: '💾',
        title: 'Local Data Persistence',
        description: 'Room database for offline storage of bookmarks, history, and browsing tabs.',
      },
      {
        icon: '🎨',
        title: 'Modern UI',
        description: 'Built with Jetpack Compose for declarative, reactive UI with smooth animations.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Jetpack Compose', 'Material 3 for TV', 'Accompanist WebView'],
      backend: ['Room Database', 'DataStore', 'Coroutines', 'Hilt DI'],
      infrastructure: ['Min SDK 23', 'Target SDK 36', 'GitHub Actions'],
    },
    links: {
      github: 'https://github.com/inflexionco/GlideBrowser',
    },
    status: 'development',
    cta: {
      title: 'Experience modern web browsing on Android TV',
      description: 'GlideBrowser is in active development. Star the repository on GitHub to follow progress and get notified when we release the first version.',
      buttons: [
        { text: 'View on GitHub', type: 'primary', link: 'https://github.com/inflexionco/GlideBrowser' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
];

export const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): ProjectData[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};
