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
    tagline: 'Smart bookmark management reimagined',
    description: 'A powerful mobile application that helps you organize, categorize, and access your important links across all devices. Never lose a valuable resource again with intelligent tagging and search capabilities.',
    type: 'mobile',
    platforms: ['iOS', 'Android'],
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
        icon: '📋',
        title: 'Smart Collections',
        description: 'Organize your bookmarks into intelligent collections with automatic categorization and smart folders.',
      },
      {
        icon: '🔍',
        title: 'Powerful Search',
        description: 'Find any link instantly with full-text search across titles, descriptions, and tags.',
      },
      {
        icon: '🔄',
        title: 'Cross-Device Sync',
        description: 'Access your bookmarks on any device with real-time synchronization via the cloud.',
      },
      {
        icon: '🏷️',
        title: 'Smart Tagging',
        description: 'AI-powered tag suggestions help you organize links efficiently with minimal effort.',
      },
      {
        icon: '📤',
        title: 'Easy Sharing',
        description: 'Share individual links or entire collections with friends, family, or team members.',
      },
      {
        icon: '🌐',
        title: 'Web Clipper',
        description: 'Save links from any browser or app with our integrated share extension.',
      },
    ],
    techStack: {
      frontend: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis'],
      infrastructure: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipeline'],
    },
    metrics: {
      users: '25K+',
      rating: '4.7',
      downloads: '100K+',
    },
    links: {
      appStore: '#',
      playStore: '#',
    },
    status: 'live',
    cta: {
      title: 'Ready to organize your digital life?',
      description: 'Join thousands of users who have transformed the way they manage their bookmarks. Download LinkKeep today and never lose a valuable link again.',
      buttons: [
        { text: 'Download Now', type: 'primary', link: '#' },
        { text: 'View All Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'fundly',
    name: 'Fundly',
    tagline: 'Crowdfunding made simple and transparent',
    description: 'A next-generation crowdfunding platform that connects creators with supporters. Launch campaigns, track progress, and bring your ideas to life with built-in social features and transparent fund management.',
    type: 'mobile',
    platforms: ['iOS', 'Android'],
    category: 'Finance',
    color: 'purple',
    icon: '💰',
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
    ],
    features: [
      {
        icon: '🚀',
        title: 'Quick Campaign Launch',
        description: 'Create and launch your crowdfunding campaign in minutes with our intuitive campaign builder.',
      },
      {
        icon: '📊',
        title: 'Real-Time Analytics',
        description: 'Track your campaign performance with detailed analytics and insights on backer behavior.',
      },
      {
        icon: '💳',
        title: 'Secure Payments',
        description: 'Accept payments from multiple sources with industry-leading security and fraud protection.',
      },
      {
        icon: '📢',
        title: 'Social Amplification',
        description: 'Share your campaign across social platforms and engage with your community directly in the app.',
      },
      {
        icon: '🎯',
        title: 'Milestone Tracking',
        description: 'Set and achieve campaign milestones with automated backer updates and reward fulfillment.',
      },
      {
        icon: '🤝',
        title: 'Backer Community',
        description: 'Build a loyal community with backer-only updates, polls, and exclusive content.',
      },
    ],
    techStack: {
      frontend: ['React Native', 'TypeScript', 'MobX', 'Native Base'],
      backend: ['Node.js', 'GraphQL', 'MongoDB', 'Stripe API'],
      infrastructure: ['Google Cloud', 'Firebase', 'Docker', 'CircleCI'],
    },
    metrics: {
      users: '50K+',
      rating: '4.8',
      downloads: '200K+',
    },
    links: {
      appStore: '#',
      playStore: '#',
    },
    status: 'live',
    cta: {
      title: 'Turn your ideas into reality',
      description: 'Whether you\'re an entrepreneur, artist, or innovator, Fundly gives you the tools to raise funds and build a community around your vision.',
      buttons: [
        { text: 'Start Your Campaign', type: 'primary', link: '#' },
        { text: 'Explore Projects', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'tinytally',
    name: 'Tiny Tally',
    tagline: 'Minimalist expense tracking for mindful spending',
    description: 'A beautifully simple expense tracking application that helps you understand your spending habits without overwhelming complexity. Track expenses, set budgets, and achieve your financial goals with ease.',
    type: 'pwa',
    platforms: ['Progressive Web App', 'Mobile'],
    category: 'Finance',
    color: 'orange',
    icon: '📝',
    screenshots: [
      'https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    features: [
      {
        icon: '⚡',
        title: 'Lightning-Fast Entry',
        description: 'Add expenses in under 3 seconds with our streamlined, keyboard-first interface.',
      },
      {
        icon: '📊',
        title: 'Visual Insights',
        description: 'Understand your spending patterns with beautiful charts and spending breakdowns.',
      },
      {
        icon: '🎯',
        title: 'Smart Budgets',
        description: 'Set monthly budgets by category and get alerts before you overspend.',
      },
      {
        icon: '🔒',
        title: 'Privacy First',
        description: 'Your financial data stays on your device. No cloud sync, no tracking, complete privacy.',
      },
      {
        icon: '📱',
        title: 'Works Offline',
        description: 'Track expenses anytime, anywhere. No internet connection required.',
      },
      {
        icon: '📈',
        title: 'Trend Analysis',
        description: 'Spot spending trends over time and make informed financial decisions.',
      },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      backend: ['IndexedDB', 'Service Workers'],
      infrastructure: ['Vercel', 'PWA', 'Lighthouse Optimized'],
    },
    metrics: {
      users: '15K+',
      rating: '4.9',
    },
    links: {
      website: 'https://tinytally.app',
    },
    status: 'live',
    cta: {
      title: 'Start tracking smarter today',
      description: 'Tiny Tally is completely free and works right in your browser. No installation required, no subscription fees, just simple expense tracking.',
      buttons: [
        { text: 'Open Tiny Tally', type: 'primary', link: '#' },
        { text: 'Learn More', type: 'secondary', link: '/projects' },
      ],
    },
  },
  {
    id: 'energiq',
    name: 'EnergiQ',
    tagline: 'Smart energy management for modern homes',
    description: 'A comprehensive energy monitoring platform that helps homeowners track, analyze, and optimize their energy consumption. Make data-driven decisions to reduce costs and environmental impact.',
    type: 'web',
    platforms: ['Web Application', 'IoT Dashboard'],
    category: 'Utilities',
    color: 'green',
    icon: '⚡',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
    ],
    features: [
      {
        icon: '📊',
        title: 'Real-Time Monitoring',
        description: 'Track your energy consumption in real-time with live updates from connected smart meters.',
      },
      {
        icon: '💡',
        title: 'Smart Recommendations',
        description: 'Get AI-powered suggestions to reduce energy usage and lower your utility bills.',
      },
      {
        icon: '📈',
        title: 'Detailed Analytics',
        description: 'Analyze consumption patterns by room, appliance, and time period with interactive charts.',
      },
      {
        icon: '🔔',
        title: 'Usage Alerts',
        description: 'Receive notifications when unusual energy consumption is detected or when you exceed budget.',
      },
      {
        icon: '🌱',
        title: 'Carbon Footprint',
        description: 'Track your environmental impact and see how much CO2 you\'ve saved with optimization.',
      },
      {
        icon: '🏠',
        title: 'Multi-Property Support',
        description: 'Manage energy consumption across multiple properties from a single dashboard.',
      },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Material-UI', 'D3.js'],
      backend: ['Python', 'FastAPI', 'PostgreSQL', 'TimescaleDB'],
      infrastructure: ['AWS', 'IoT Core', 'Lambda', 'S3'],
    },
    metrics: {
      users: '8K+',
      rating: '4.6',
    },
    links: {
      website: 'https://energiq.app',
    },
    status: 'beta',
    cta: {
      title: 'Take control of your energy usage',
      description: 'EnergiQ is currently in beta. Sign up today to get early access and join our community of energy-conscious homeowners.',
      buttons: [
        { text: 'Request Beta Access', type: 'primary', link: '#' },
        { text: 'View Demo', type: 'secondary', link: '#' },
      ],
    },
  },
  {
    id: 'glidebrowser',
    name: 'GlideBrowser',
    tagline: 'Modern web browsing for Android TV',
    description: 'A sleek and intuitive browser designed specifically for Android TV. Navigate the web with ease using your remote control, enjoy optimized video playback, and experience the internet on the big screen.',
    type: 'android',
    platforms: ['Android TV'],
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
        icon: '📺',
        title: 'TV-Optimized Interface',
        description: 'Designed for 10-foot viewing with large, readable text and remote-friendly navigation.',
      },
      {
        icon: '🎮',
        title: 'Remote Control Support',
        description: 'Full support for Android TV remotes and game controllers for seamless browsing.',
      },
      {
        icon: '🔖',
        title: 'Bookmark Management',
        description: 'Save and organize your favorite websites with visual bookmarks and collections.',
      },
      {
        icon: '🎥',
        title: 'Video Optimization',
        description: 'Enhanced video playback with support for popular streaming platforms and formats.',
      },
      {
        icon: '⚡',
        title: 'Fast Performance',
        description: 'Built with Kotlin for native Android performance and smooth scrolling.',
      },
      {
        icon: '🔒',
        title: 'Privacy Mode',
        description: 'Browse privately with incognito mode and built-in ad blocking capabilities.',
      },
    ],
    techStack: {
      frontend: ['Kotlin', 'Android TV SDK', 'Leanback Library', 'Material Design'],
      backend: ['WebView Engine', 'Local Storage'],
      infrastructure: ['Google Play Store', 'GitHub Actions'],
    },
    links: {
      github: 'https://github.com/inflexionco/GlideBrowser',
    },
    status: 'development',
    cta: {
      title: 'Experience the web on your TV',
      description: 'GlideBrowser is currently in active development. Follow the project on GitHub to stay updated with the latest features and release information.',
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
