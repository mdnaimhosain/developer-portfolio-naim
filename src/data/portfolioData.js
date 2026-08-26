import profileImg from '../assets/profile.jpg';

export const portfolioData = {
  personal: {
    name: "Md Naim Hosain",
    role: "Frontend React Developer",
    secondaryRole: "UI/UX Enthusiast & Web Architect",
    tagline: "Frontend Developer specializing in React.js and modern web experiences",
    shortBio: "I craft clean, fast, and accessible digital products with modern React.js, Tailwind CSS, and scalable JavaScript architecture. Focused on turning complex challenges into intuitive, delightful user interfaces.",
    location: "Huaian China, CN (Remote Friendly)",
    status: "Available for Full-time & Freelance Projects",
    statusAvailable: true,
    email: "mnnayem695@gmail.com",
    phone: "+86 13003543806",
    yearsExperience: "2+",
    completedProjects: "42+",
    codeQualityScore: "99.4%",
    openSourceContributions: "20+",
    socialLinks: {
      github: "https://github.com/mdnaimhosain",
      linkedin: "https://www.linkedin.com/in/md-naim-hosain-539834426",
    },
    avatar: profileImg,
    resumeDownloadUrl: "#resume",
  },

  about: {
    headline: "Transforming Ideas into Intuitive, High-Performance Web Experiences",
    paragraph1: "Hi there! I'm Naim, a passionate Frontend React Developer with a deep obsession for clean code, responsive design, and fluid micro-interactions. Over the past 3+ years, I have built production web applications ranging from dynamic e-commerce platforms to interactive analytics dashboards.",
    paragraph2: "My development philosophy centers around three pillars: clean modular component architecture, lightning-fast performance, and accessible, user-centric UX. I believe the best web apps are not just beautiful—they are effortless to use and maintain.",
    highlights: [
      {
        title: "Clean Architecture",
        description: "Writing scalable, reusable React components with clear separation of concerns.",
        icon: "Code",
      },
      {
        title: "Performance First",
        description: "Optimized bundle sizes, fast Core Web Vitals, and smooth 60fps animations.",
        icon: "Zap",
      },
      {
        title: "Pixel Precision",
        description: "Converting Figma & design systems into pixel-perfect, responsive layouts.",
        icon: "Layers",
      },
      {
        title: "Continuous Growth",
        description: "Constantly exploring modern web capabilities, React 19, and design patterns.",
        icon: "Sparkles",
      },
    ],
    quickFacts: [
      { label: "Core Stack", value: "HTML5, CSS3, Tailwind CSS, JavaScript ES6+, React" },
      { label: "Location", value: "Huaian China, CN (UTC+8)" },
      { label: "Education", value: "Diploma in Computer Science & Engineering (CSE)" },
      { label: "Work Style", value: "Agile, Collaborative, Self-driven" },
      { label: "Interests", value: "Design Systems, Web Animations, Open Source" },
    ],
  },

  skills: [
    {
      name: "React.js",
      category: "React Ecosystem",
      level: 95,
      experience: "2+ years",
      description: "Hooks, Context API, Component Lifecycle, Custom Hooks, Performance Optimization",
      color: "#61DAFB",
      iconName: "Atom",
      isPrimary: true,
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      level: 95,
      experience: "2+ years",
      description: "Utility-first design, Custom Themes, JIT, Glassmorphism, Dark/Light Modes",
      color: "#38BDF8",
      iconName: "Palette",
      isPrimary: true,
    },
    {
      name: "JavaScript (ES6+)",
      category: "Core Web",
      level: 92,
      experience: "2+ years",
      description: "Async/Await, Promises, Closures, Array Methods, DOM Manipulation, Modular Code",
      color: "#F7DF1E",
      iconName: "FileCode",
      isPrimary: true,
    },
    {
      name: "HTML5",
      category: "Core Web",
      level: 96,
      experience: "3+ years",
      description: "Semantic Elements, Accessibility (ARIA), SEO Best Practices, Web Standards",
      color: "#E34F26",
      iconName: "Globe",
      isPrimary: true,
    },
    {
      name: "CSS3",
      category: "Styling",
      level: 94,
      experience: "3+ years",
      description: "Flexbox, CSS Grid, Transitions, Keyframes, Custom Variables, Fluid Typography",
      color: "#1572B6",
      iconName: "Layout",
      isPrimary: true,
    },
    {
      name: "Git & GitHub",
      category: "Tools & APIs",
      level: 88,
      experience: "2+ years",
      description: "Branching strategies, Pull Requests, Code Reviews, Git Flow, GitHub Actions",
      color: "#F05032",
      iconName: "GitBranch",
      isPrimary: true,
    },
    {
      name: "Responsive Design",
      category: "Core Web",
      level: 95,
      experience: "3+ years",
      description: "Mobile-first approach, Adaptive breakpoints, Fluid layouts, Cross-browser QA",
      color: "#10B981",
      iconName: "Smartphone",
      isPrimary: true,
    },
    {
      name: "API Integration",
      category: "Tools & APIs",
      level: 90,
      experience: "2+ years",
      description: "RESTful APIs, Fetch, Axios, TanStack Query, GraphQL, Error Handling",
      color: "#8B5CF6",
      iconName: "Network",
      isPrimary: true,
    },
    
    {
      name: "State Management",
      category: "React Ecosystem",
      level: 89,
      experience: "3+ years",
      description: "Zustand, Redux Toolkit, Context API, URL State Management",
      color: "#764ABC",
      iconName: "Cpu",
      isPrimary: false,
    },
    {
      name: "Figma to Code",
      category: "Styling",
      level: 92,
      experience: "3+ years",
      description: "Translating mockups, tokens, components, responsive auto-layouts to React",
      color: "#F24E1E",
      iconName: "Figma",
      isPrimary: false,
    },
    {
      name: "Performance & SEO",
      category: "Tools & APIs",
      level: 88,
      experience: "3+ years",
      description: "Lighthouse audits, Lazy Loading, Code Splitting, Cumulative Layout Shift reduction",
      color: "#EC4899",
      iconName: "Gauge",
      isPrimary: false,
    },
  ],

  projects: [
    {
      id: "novastore",
      title: "NovaStore - Modern E-Commerce Platform",
      category: "E-Commerce",
      tag: "Featured Project",
      shortDescription: "A full-featured modern e-commerce storefront with real-time cart, interactive filter system, instant search, and checkout flow.",
      fullDescription: "NovaStore is a responsive, high-performance e-commerce web application engineered with React.js and Tailwind CSS. It features dynamic category filtering, price range sliders, a slide-over sliding cart drawer with local storage synchronization, quantity adjustments, and simulated checkout with animated feedback.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Context API", "Lucide Icons", "Vite"],
      stats: { rating: "4.9/5", loadTime: "< 0.8s", responsiveness: "100%" },
      features: [
        "Dynamic category filtering & instant search by keyword",
        "Persistent sliding cart drawer with live subtotal calculation",
        "Product variant selection (sizes, colors, quantities)",
        "Fully responsive layout optimized for mobile commerce",
        "Simulated multi-step checkout modal with validation"
      ],
      liveDemo: "https://example.com/novastore-demo",
      github: "https://github.com/example/novastore-ecommerce",
    },
    {
      id: "skycast",
      title: "SkyCast - Real-Time Weather & Forecast",
      category: "React",
      tag: "Live API App",
      shortDescription: "Interactive global weather dashboard with 7-day forecast, hourly temperature trends, geolocation detection, and atmospheric backgrounds.",
      fullDescription: "SkyCast provides accurate, real-time meteorological data with an ultra-sleek glassmorphism UI. Built with React and Tailwind CSS, it connects to live weather APIs to render 24-hour hourly projections, 7-day extended forecasts, UV index indicators, air quality metrics, and dynamic background gradients adapting to current weather conditions.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Weather API", "Geolocation", "Charts"],
      stats: { citiesSupported: "200,000+", updateRate: "Live", accuracy: "99%" },
      features: [
        "Auto-detection of user location via browser Geolocation API",
        "Global city search with instant auto-suggestions",
        "Interactive hourly temperature curve & 7-day forecast cards",
        "Atmospheric visual themes that switch between sunny, rainy, snowy & starry night",
        "Metrics for Wind Speed, Humidity, Air Quality Index, and Sunrise/Sunset"
      ],
      liveDemo: "https://example.com/skycast-demo",
      github: "https://github.com/example/skycast-weather",
    },
    {
      id: "flowboard",
      title: "FlowBoard - Agile Kanban Task Manager",
      category: "React",
      tag: "Productivity Tool",
      shortDescription: "A fluid, Trello-inspired project management dashboard with drag-and-drop workflow columns, priority tagging, and sprint metrics.",
      fullDescription: "FlowBoard is an intuitive project management tool designed to streamline sprint planning and personal workflows. Features interactive drag-and-drop task movement across customizable stages (Backlog, In Progress, Review, Done), task filtering by priority and labels, custom tags, and local storage state persistence.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Drag & Drop", "Zustand", "LocalStorage"],
      stats: { tasksHandled: "Unlimited", offlineSupport: "Yes", syncTime: "Instant" },
      features: [
        "Fluid drag-and-drop cards between multiple workflow boards",
        "Priority tags (Urgent, High, Medium, Low) with custom color badges",
        "Task search, date filters, and completion progress bars",
        "Offline-first local storage architecture with JSON import/export",
        "Subtasks checklist and comments thread modal"
      ],
      liveDemo: "https://example.com/flowboard-demo",
      github: "https://github.com/example/flowboard-kanban",
    },
    {
      id: "nexus-dashboard",
      title: "Nexus - SaaS Analytics & Admin Dashboard",
      category: "UI/UX & Dashboards",
      tag: "Design System",
      shortDescription: "Modern SaaS analytics dashboard featuring interactive revenue charts, activity feeds, user management, and dark/light mode.",
      fullDescription: "Nexus is a production-ready dashboard interface built for modern SaaS products. Built with a scalable component library, it showcases responsive collapsible sidebars, dynamic metric cards with growth indicators, SVG data visualizations, data tables with pagination, and instant dark/light theme switching.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Data Viz", "Figma System", "Dark Mode"],
      stats: { components: "45+", responsiveness: "100%", themeSupport: "Instant" },
      features: [
        "Interactive revenue, MRR, churn rate, and active user analytics cards",
        "Searchable and sortable customer transaction data tables",
        "Responsive sidebar with smooth collapse states and badge indicators",
        "Customizable dashboard widget layout and quick action modals",
        "Built-in notification center and user profile dropdown"
      ],
      liveDemo: "https://example.com/nexus-dashboard-demo",
      github: "https://github.com/example/nexus-analytics-dashboard",
    },
    {
      id: "devcanvas",
      title: "DevCanvas - Interactive Developer Portfolio",
      category: "UI/UX & Dashboards",
      tag: "Portfolio Showcase",
      shortDescription: "An ultra-clean personal portfolio with interactive code playground, glassmorphism cards, ambient particle glow, and sound fx.",
      fullDescription: "DevCanvas is a state-of-the-art personal developer portfolio template designed to showcase technical skills and creative flair. Built using React.js and Tailwind CSS with custom glass utilities, smooth anchor navigation, interactive skill filters, animated code snippet terminals, and ATS resume modal integration.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX", "Responsive"],
      stats: { lighthouseScore: "99/100", animations: "60 FPS", designTokens: "50+" },
      features: [
        "Glassmorphic design system with seamless dark & light theme modes",
        "Interactive live code playground widget with live React state counter",
        "Animated category-based skill and project filter bars",
        "Working contact form with toast notification feedback & email copy",
        "Interactive ATS-optimized Resume Viewer modal"
      ],
      liveDemo: "https://example.com/devcanvas-demo",
      github: "https://github.com/example/devcanvas-portfolio",
    },
    {
      id: "promptlab",
      title: "PromptLab - Generative AI Workspace UI",
      category: "React",
      tag: "AI Application",
      shortDescription: "An intuitive studio for AI prompt engineering, featuring model parameter sliders, markdown syntax highlighting, and snippet libraries.",
      fullDescription: "PromptLab is a specialized workspace for developers and creators working with LLMs. Built with React and Tailwind CSS, it offers side-by-side prompt testing, temperature and token limit sliders, syntax-highlighted code output, copy-to-clipboard actions, and saved template management.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "AI Interface", "Markdown", "ES6+"],
      stats: { speed: "Ultra Fast", modularity: "High", tokensSaved: "40%" },
      features: [
        "Multi-model response comparison canvas with live markdown rendering",
        "Fine-tuning control sliders for temperature, top-p, and max tokens",
        "One-click code snippet generator for JavaScript, Python, and cURL",
        "Categorized prompt template repository with search and tag filters",
        "Export chat history to JSON or formatted Markdown"
      ],
      // liveDemo: "https://example.com/promptlab-demo",
      // github: "https://github.com/example/promptlab-ai-studio",
    },
  ],

  services: [
    {
      id: "frontend-dev",
      title: "Frontend Development",
      description: "Building fast, interactive, and accessible user interfaces from concept to deployment using modern web standards and best practices.",
      icon: "Code2",
      badge: "Core Service",
      deliverables: [
        "Pixel-perfect responsive layouts",
        "Clean, semantic HTML5 & modern CSS3",
        "Cross-browser testing & mobile optimization",
        "Accessible (WCAG 2.1) compliant interfaces"
      ]
    },
    {
      id: "react-apps",
      title: "React Application Development",
      description: "Architecting scalable Single Page Applications (SPAs) with robust state management, modular component design, and custom React hooks.",
      icon: "Atom",
      badge: "Specialization",
      deliverables: [
        "Reusable component architecture",
        "State management with Context / Zustand / Redux",
        "API integration with optimistic UI updates",
        "Dynamic routing, lazy loading & code splitting"
      ]
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      description: "Designing and engineering fluid, mobile-first websites that look stunning and perform smoothly across all devices and screen resolutions.",
      icon: "Smartphone",
      badge: "Mobile-First",
      deliverables: [
        "Fluid grid systems & flexible breakpoints",
        "Touch-friendly navigation & gestures",
        "High-density retina asset optimization",
        "Consistent typography & adaptive spacing"
      ]
    },
    {
      id: "ui-implementation",
      title: "UI/UX & Design Systems",
      description: "Bridging the gap between design and engineering by translating Figma designs into production-ready Tailwind CSS component systems.",
      icon: "LayoutDashboard",
      badge: "Design Systems",
      deliverables: [
        "Figma/Sketch to React component translation",
        "Tailwind CSS custom theme configurations",
        "Interactive micro-interactions & transitions",
        "Consistent UI library documentation"
      ]
    }
  ],

  experience: [
    {
      role: "Frontend React Developer",
      company: "TechNova Digital Solutions",
      period: "2023 - Present",
      location: "San Francisco, CA (Remote)",
      description: "Spearheaded frontend development of high-traffic SaaS customer portals and e-commerce web applications. Improved page load times by 42% through code-splitting and asset optimization.",
      skills: ["React.js", "Tailwind CSS", "TypeScript", "REST APIs", "Zustand"]
    },
    {
      role: "Frontend Web Developer",
      company: "PixelCraft Creative Agency",
      period: "2022 - 2023",
      location: "Austin, TX (Hybrid)",
      description: "Built and launched 18+ client websites and interactive landing pages. Collaborated closely with UI/UX designers to translate Figma design systems into responsive React and Tailwind components.",
      skills: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Figma", "Git"]
    },
    {
      role: "Junior Web Developer",
      company: "CodeSphere Labs",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed responsive landing pages, implemented interactive UI components, resolved cross-browser rendering issues, and integrated third-party RESTful APIs.",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git & GitHub"]
    }
  ],

  testimonials: [
    {
      quote: "Naim delivered our React dashboard ahead of schedule with flawless attention to detail. His mastery of Tailwind CSS and modern React patterns saved our team dozens of hours.",
      author: "Sarah Jenkins",
      title: "Product Lead at CloudScale",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Working with Naim was a fantastic experience. He transformed our complex Figma designs into an incredibly fast, pixel-perfect web application that our users love.",
      author: "Marcus Chen",
      title: "Founder & CTO at NovaStore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ]
};
