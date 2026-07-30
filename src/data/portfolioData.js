export const personalInfo = {
  name: "Falah Abdussalam",
  title: "Software Developer | Full Stack Engineer | UI/UX Designer | Digital Marketer",
  roles: [
    "Software Developer",
    "Full Stack Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Digital Marketing Specialist"
  ],
  bio: "Passionate multi-disciplinary technology architect and creative designer with over 5 years of experience bridging software engineering, pixel-perfect UI/UX design, and data-driven digital marketing. Dedicated to engineering high-performance digital products that captivate users and elevate brands worldwide.",
  location: "Kerala, India",
  email: "falah.abdussalam.pro@gmail.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  whatsappUrl: "https://wa.me/919876543210?text=Hi%20Falah,%20I'd%20like%20to%20discuss%20a%20project!",
  availableForHire: true,
  metrics: [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 45, suffix: "+", label: "Projects Completed" },
    { value: 30, suffix: "+", label: "Satisfied Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" }
  ],
  socials: {
    github: "https://github.com/falahabdussalam",
    linkedin: "https://www.linkedin.com/in/falah-abdussalam-0515712a3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/_falah_crg_?igsh=M2MwajdmbHF4YXVt",
    behance: "https://www.behance.net/mfkmedia1",
    dribbble: "https://dribbble.com/falah-abdussalam"
  }
};

export const skillsData = {
  Frontend: [
    { name: "HTML5", level: 98, icon: "Code2", color: "#E34F26" },
    { name: "CSS3 / SASS", level: 95, icon: "Palette", color: "#1572B6" },
    { name: "JavaScript (ES6+)", level: 95, icon: "FileCode2", color: "#F7DF1E" },
    { name: "TypeScript", level: 90, icon: "FileCode", color: "#3178C6" },
    { name: "React.js", level: 95, icon: "Atom", color: "#61DAFB" },
    { name: "Next.js", level: 90, icon: "Zap", color: "#FFFFFF" },
    { name: "Tailwind CSS", level: 98, icon: "Wind", color: "#06B6D4" }
  ],
  Backend: [
    { name: "Node.js", level: 92, icon: "Server", color: "#5FA04E" },
    { name: "Express.js", level: 90, icon: "Cpu", color: "#A8B2D1" },
    { name: "MongoDB", level: 88, icon: "Database", color: "#47A248" },
    { name: "Firebase", level: 88, icon: "Flame", color: "#FFCA28" }
  ],
  Programming: [
    { name: "Python", level: 88, icon: "Terminal", color: "#3776AB" },
    { name: "Java", level: 82, icon: "Coffee", color: "#5382A1" },
    { name: "C", level: 80, icon: "Code", color: "#A8B2D1" },
    { name: "C++", level: 85, icon: "Binary", color: "#00599C" }
  ],
  Design: [
    { name: "Figma", level: 96, icon: "Figma", color: "#F24E1E" },
    { name: "Photoshop", level: 94, icon: "Image", color: "#31A8FF" },
    { name: "Illustrator", level: 92, icon: "PenTool", color: "#FF9A00" },
    { name: "Canva", level: 95, icon: "Layout", color: "#00C4CC" },
    { name: "Affinity Designer", level: 88, icon: "Layers", color: "#1796DF" }
  ],
  Marketing: [
    { name: "SEO (Search Engine Optimization)", level: 92, icon: "TrendingUp", color: "#10B981" },
    { name: "Google Ads", level: 88, icon: "Target", color: "#4285F4" },
    { name: "Meta Ads (FB/IG)", level: 90, icon: "Share2", color: "#0668E1" },
    { name: "Social Media Marketing", level: 94, icon: "Megaphone", color: "#EC4899" }
  ]
};

export const servicesData = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    icon: "Code2",
    description: "Building scalable, high-performance web applications with React, Next.js, Node.js, and modern cloud databases.",
    features: [
      "Custom Web Applications",
      "RESTful & GraphQL API Architecture",
      "Database Modeling & Optimization",
      "Performance Optimization & PWA"
    ]
  },
  {
    id: "uiux",
    title: "UI/UX & Interactive Design",
    icon: "Figma",
    description: "Crafting intuitive, human-centered digital experiences, wireframes, high-fidelity prototypes, and sleek design systems.",
    features: [
      "User Research & Wireframing",
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Component Libraries",
      "Usability Testing & Micro-interactions"
    ]
  },
  {
    id: "graphic",
    title: "Graphic Design & Branding",
    icon: "Palette",
    description: "Creating unforgettable visual identities, logos, marketing collateral, posters, and vector illustrations that stand out.",
    features: [
      "Brand Identity & Style Guides",
      "Logo Design & Iconography",
      "Marketing Posters & Print Collateral",
      "Social Media Graphics & Banners"
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing & Growth",
    icon: "TrendingUp",
    description: "Driving organic traffic, high-converting ad campaigns, search ranking dominance, and targeted social media growth.",
    features: [
      "Technical & On-Page SEO Optimization",
      "PPC Google & Meta Ad Campaigns",
      "Content Strategy & Social Growth",
      "Conversion Rate Optimization (CRO)"
    ]
  }
];

export const portfolioCategories = [
  "All",
  "Websites",
  "Mobile UI",
  "Graphic Design",
  "Logos",
  "Branding",
  "Posters",
  "Digital Marketing"
];

export const projectsData = [
  {
    id: 1,
    title: "Nexus Cyber - AI SaaS Platform",
    category: "Websites",
    image: "/images/project_saas.png",
    description: "A futuristic AI-powered analytics dashboard featuring real-time data visualization, dark mode glassmorphism UI, interactive charts, and automated reporting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Chart.js"],
    github: "https://github.com/falahabdussalam/nexus-cyber-saas",
    demo: "https://nexus-cyber-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Aura Mobile - FinTech iOS App",
    category: "Mobile UI",
    image: "/images/project_mobile.png",
    description: "An ultra-sleek financial management mobile application UI/UX concept with biometrics, instant transfer flows, crypto tracking, and minimalist dark aesthetics.",
    tech: ["Figma", "React Native", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    github: "https://github.com/falahabdussalam/aura-fintech-mobile",
    demo: "https://dribbble.com/shots/aura-fintech-ui",
    featured: true
  },
  {
    id: 3,
    title: "Vortex Brand Identity & Visual System",
    category: "Branding",
    image: "/images/hero_portrait.png",
    description: "Comprehensive corporate brand identity kit including vector logo mark, dark modern stationery, typography guidelines, and social media brand templates.",
    tech: ["Photoshop", "Illustrator", "Figma", "Brand Strategy"],
    github: "https://github.com/falahabdussalam/vortex-branding",
    demo: "https://behance.net/gallery/vortex-branding",
    featured: true
  },
  {
    id: 4,
    title: "Hyperion - E-Commerce Fashion Platform",
    category: "Websites",
    image: "/images/project_saas.png",
    description: "Next-gen luxury fashion store with 3D product viewports, dynamic cart drawer, Stripe payment integration, and blitz-fast page loading.",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe API", "MongoDB"],
    github: "https://github.com/falahabdussalam/hyperion-store",
    demo: "https://hyperion-store.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Quantum Neo Logo Mark",
    category: "Logos",
    image: "/images/hero_portrait.png",
    description: "Futuristic geometry-inspired logo mark for a quantum computing research firm. Clean, scalable vector design with golden ratio proportions.",
    tech: ["Illustrator", "Affinity Designer", "Vector Art"],
    github: "https://github.com/falahabdussalam/quantum-logo",
    demo: "https://dribbble.com/shots/quantum-logo",
    featured: false
  },
  {
    id: 6,
    title: "Cyberpunk Tech Summit Event Poster",
    category: "Posters",
    image: "/images/project_mobile.png",
    description: "High-impact promotional poster design for an international tech convention featuring glowing neon typography and futuristic composite imagery.",
    tech: ["Photoshop", "Lightroom", "Canva", "Print Design"],
    github: "https://github.com/falahabdussalam/cyber-poster",
    demo: "https://behance.net/gallery/cyber-poster",
    featured: false
  },
  {
    id: 7,
    title: "Global E-Com SEO & Meta Ads Campaign",
    category: "Digital Marketing",
    image: "/images/project_saas.png",
    description: "End-to-end digital growth strategy resulting in 340% increase in organic search traffic and $120k+ in generated revenue via targeted Meta & Google Ads.",
    tech: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush"],
    github: "https://github.com/falahabdussalam/marketing-case-study",
    demo: "https://falah-marketing-case-study.com",
    featured: true
  },
  {
    id: 8,
    title: "Minimalist Graphic Collateral Suite",
    category: "Graphic Design",
    image: "/images/project_mobile.png",
    description: "A curated suite of print and digital marketing collateral designed for a high-end architectural firm.",
    tech: ["InDesign", "Photoshop", "Illustrator"],
    github: "https://github.com/falahabdussalam/architect-graphics",
    demo: "https://behance.net/gallery/architect-graphics",
    featured: false
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Full Stack Engineer & UI Architect",
    company: "Apex Tech Innovations",
    period: "2024 - Present",
    location: "Remote",
    description: "Leading frontend architecture and backend API integrations for enterprise cloud platforms. Directing UI/UX design systems and team development workflows.",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Figma", "MongoDB"]
  },
  {
    id: 2,
    role: "Lead UI/UX Designer & Developer",
    company: "Starlight Digital Studio",
    period: "2022 - 2024",
    location: "Kochi, India",
    description: "Designed and engineered over 25 client websites and mobile apps. Conducted user research, wireframing, interactive prototyping, and cross-platform frontend development.",
    skills: ["Figma", "React", "TypeScript", "Photoshop", "Illustrator"]
  },
  {
    id: 3,
    role: "Digital Marketing & SEO Strategist",
    company: "Vanguard Growth Agency",
    period: "2021 - 2022",
    location: "Remote",
    description: "Managed $50k+ monthly ad budgets across Google & Meta Ads. Executed technical SEO audits and growth strategies that doubled organic search impressions.",
    skills: ["SEO", "Google Ads", "Meta Ads", "Analytics", "Conversion Optimization"]
  },
  {
    id: 4,
    role: "Freelance Software & Design Consultant",
    company: "Self-Employed",
    period: "2019 - 2021",
    location: "Global Clients",
    description: "Delivered custom web applications, brand identities, logos, and digital marketing strategies for startups and international businesses.",
    skills: ["Full Stack Dev", "Graphic Design", "Branding", "Client Relations"]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science / Software Engineering",
    institution: "Calicut University",
    period: "2018 - 2022",
    status: "Graduated with Honors",
    highlights: ["Algorithms & Data Structures", "Software Engineering Principles", "Web Technologies & Database Systems"]
  },
  {
    id: 2,
    degree: "Advanced Full-Stack Engineering Certification",
    institution: "Meta / Coursera",
    period: "2022",
    status: "Certified",
    highlights: ["React Architecture", "Node.js API Design", "Database Management"]
  },
  {
    id: 3,
    degree: "UI/UX Master Certification & Design Systems",
    institution: "Interaction Design Foundation (IxDF)",
    period: "2023",
    status: "Certified",
    highlights: ["User-Centered Design", "Figma Prototyping", "Design System Architecture"]
  },
  {
    id: 4,
    degree: "Meta Certified Digital Marketing Associate & Google Ads Specialist",
    institution: "Meta & Google Academy",
    period: "2023",
    status: "Certified",
    highlights: ["Performance Marketing", "SEO Strategy", "Social Media Advertising"]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "CEO at Nexus Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    text: "Falah is a rare rare talent who excels equally at complex software development and pixel-perfect design. He delivered our SaaS dashboard ahead of schedule with breathtaking dark mode UI animations!",
    rating: 5
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Product Manager at Aura FinTech",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    text: "Working with Falah on our iOS mobile UI was smooth and inspiring. His attention to UX details and swift execution made our app stand out in competitive pitch meetings.",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    role: "Marketing Director at Vanguard",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "Falah's digital marketing and SEO strategy boosted our organic traffic by 340% in just 4 months. He combines deep technical analytical skills with creative marketing genius.",
    rating: 5
  }
];
