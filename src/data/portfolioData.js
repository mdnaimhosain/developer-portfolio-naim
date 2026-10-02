import profileImg from '../assets/profile.jpg';

export const portfolioData = {
  personal: {
    name: "Md Naim Hosain",
    role: "Frontend React Developer",
    secondaryRole: "UI/UX Enthusiast & Web Architect",
    tagline: "Frontend Developer specializing in React.js and modern web experiences",
    shortBio: "I craft clean, fast, and accessible digital products with modern React.js, Next.js, TypeScript, Tailwind CSS, and scalable JavaScript architecture. Focused on turning complex challenges into intuitive, delightful user interfaces.",
    location: "Huai'an, China · Remote Friendly",
    status: "Available for Entry-Level & Junior Roles",
    statusAvailable: true,
    email: "mnnayem695@gmail.com",
    phone: "+86 13003543806",
    yearsExperience: "Fresher",
    completedProjects: "15+",
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
    paragraph1: "Hi there! I'm Naim, an enthusiastic Frontend React Developer and Computer Science & Engineering (CSE) diploma student with a strong passion for clean code, responsive design, and fluid user interactions. Alongside my ongoing diploma studies, I build production-ready web applications ranging from modern e-commerce storefronts to interactive dashboards using React.js, Next.js, and Tailwind CSS.",
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
      { label: "Core Stack", value: "HTML5, CSS3, Tailwind CSS, JavaScript ES6+, TypeScript, React, Next.js" },
      { label: "Location", value: "Huai'an, China · Remote Friendly" },
      { label: "Education", value: "Diploma in CSE (Ongoing)" },
      { label: "Work Style", value: "Remote · Collaborative · Self-driven" },
      { label: "Interests", value: "Software Engineering, Open Source, AI/ML" },
    ],
  },

  skills: [
    {
      name: "React.js",
      category: "React Ecosystem",
      level: 95,
      experience: "Proficient",
      description: "Hooks, Context API, Component Lifecycle, Custom Hooks, Performance Optimization",
      color: "#7561a1ff",
      iconName: "Atom",
      isPrimary: true,
    },
    {
      name: "Next.js",
      category: "React Ecosystem",
      level: 90,
      experience: "Hands-on",
      description: "App Router, SSR, SSG, Server Actions, Server Components, API Routes & Optimization",
      color: "#000000",
      iconName: "Nextjs",
      isPrimary: true,
    },
    {
      name: "TypeScript",
      category: "Core Web",
      level: 90,
      experience: "Proficient",
      description: "Static Typing, Generics, Interfaces, Type Inference, Type-safe React Architecture",
      color: "#3178C6",
      iconName: "TypeScript",
      isPrimary: true,
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      level: 95,
      experience: "Advanced",
      description: "Utility-first design, Custom Themes, JIT, Glassmorphism, Dark/Light Modes",
      color: "#38BDF8",
      iconName: "Palette",
      isPrimary: true,
    },
    {
      name: "JavaScript (ES6+)",
      category: "Core Web",
      level: 92,
      experience: "Proficient",
      description: "Async/Await, Promises, Closures, Array Methods, DOM Manipulation, Modular Code",
      color: "#F7DF1E",
      iconName: "FileCode",
      isPrimary: true,
    },
    {
      name: "HTML5",
      category: "Core Web",
      level: 96,
      experience: "Advanced",
      description: "Semantic Elements, Accessibility (ARIA), SEO Best Practices, Web Standards",
      color: "#E34F26",
      iconName: "Globe",
      isPrimary: true,
    },
    {
      name: "CSS3",
      category: "Styling",
      level: 94,
      experience: "Advanced",
      description: "Flexbox, CSS Grid, Transitions, Keyframes, Custom Variables, Fluid Typography",
      color: "#1572B6",
      iconName: "Layout",
      isPrimary: true,
    },
    {
      name: "Git & GitHub",
      category: "Tools & APIs",
      level: 88,
      experience: "Proficient",
      description: "Branching strategies, Pull Requests, Code Reviews, Git Flow, GitHub Actions",
      color: "#F05032",
      iconName: "GitBranch",
      isPrimary: true,
    },
    {
      name: "Responsive Design",
      category: "Core Web",
      level: 95,
      experience: "Advanced",
      description: "Mobile-first approach, Adaptive breakpoints, Fluid layouts, Cross-browser QA",
      color: "#10B981",
      iconName: "Smartphone",
      isPrimary: true,
    },
    {
      name: "API Integration",
      category: "Tools & APIs",
      level: 90,
      experience: "Proficient",
      description: "RESTful APIs, Fetch, Axios, TanStack Query, GraphQL, Error Handling",
      color: "#8B5CF6",
      iconName: "Network",
      isPrimary: true,
    },

    {
      name: "State Management",
      category: "React Ecosystem",
      level: 89,
      experience: "Hands-on",
      description: "Zustand, Redux Toolkit, Context API, URL State Management",
      color: "#764ABC",
      iconName: "Cpu",
      isPrimary: false,
    },
    {
      name: "Figma to Code",
      category: "Styling",
      level: 92,
      experience: "Proficient",
      description: "Translating mockups, tokens, components, responsive auto-layouts to React",
      color: "#F24E1E",
      iconName: "Figma",
      isPrimary: false,
    },
    {
      name: "Performance & SEO",
      category: "Tools & APIs",
      level: 88,
      experience: "Hands-on",
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
      role: "Frontend Web Development & Projects",
      company: "Self-Directed & Project Specialization",
      period: "2024 - Present",
      location: "Independent / Remote",
      description: "Engineered responsive, high-performance web applications including modern e-commerce storefronts, real-time weather dashboards, and interactive kanban task boards using React 19, Next.js, TypeScript, and Tailwind CSS.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "REST APIs"]
    },
    {
      role: "Diploma in Computer Science & Engineering (CSE)",
      company: "Academic Education (Current Student)",
      period: "Ongoing",
      location: "Huai'an, China",
      description: "Currently pursuing a Diploma in Computer Science & Engineering, studying core computer science fundamentals, data structures, algorithms, database systems, object-oriented programming, and modern web development.",
      skills: ["Computer Science", "Algorithms", "Web Standards", "Problem Solving", "Git & GitHub"]
    },
    {
      role: "Open Source & Continuous Learning",
      company: "Community & Practice",
      period: "Ongoing",
      location: "Global / GitHub",
      description: "Actively building open-source component repositories, translating Figma design systems into reusable React components, and exploring cutting-edge modern web capabilities.",
      skills: ["Open Source", "Git Flow", "UI/UX Design", "Clean Code", "Figma"]
    }
  ],

  testimonials: [
    {
      quote: "Naim delivered our React dashboard ahead of schedule with flawless attention to detail. His mastery of Tailwind CSS and modern React patterns saved our team dozens of hours.",
      author: "moon",
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
