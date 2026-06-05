// ============================================================
// PORTFOLIO DATA — Engineering Showcase
// ============================================================

import requestaImg from '../assets/Requesta_PIcture.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'System Design', href: '#system-design' },
  { label: 'Lab', href: '#lab' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trust', href: '#trust' },
  { label: 'Hire Me', href: '#contact' },
];

export const metrics = [
  { value: 5, suffix: '+', label: 'Production Projects' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 15, suffix: '+', label: 'GitHub Repositories' },
  { value: 200, suffix: '+', label: 'DSA Problems' },
  { value: 400, suffix: '+', label: 'Commits in 2026' },
  { value: 3, suffix: '+', label: 'Years Programming' }
];

export const skillsMatrix = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'JavaScript / TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 95 },
      { name: 'Framer Motion & GSAP', proficiency: 85 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'REST APIs', proficiency: 90 },
      { name: 'WebSockets / Socket.io', proficiency: 80 }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'Mongoose (ODM)', proficiency: 85 },
      { name: 'Redis (Caching)', proficiency: 60 },
      { name: 'Aggregation Pipelines', proficiency: 75 }
    ]
  },
  {
    category: 'DevOps & Architecture',
    skills: [
      { name: 'System Design', proficiency: 80 },
      { name: 'Git & GitHub Workflows', proficiency: 90 },
      { name: 'Vercel / Render Deployment', proficiency: 85 },
      { name: 'JWT Authentication', proficiency: 90 }
    ]
  },
  {
    category: 'AI & Emerging',
    skills: [
      { name: 'OpenAI API', proficiency: 85 },
      { name: 'Gemini AI', proficiency: 80 },
      { name: 'RAG Architecture', proficiency: 70 },
      { name: 'Prompt Engineering', proficiency: 85 }
    ]
  }
];

export const projects = [
  {
    id: 'upskillr',
    title: 'UpSkillr',
    description:
      'UpSkillr is an AI-powered tech learning and collaboration ecosystem that enables developers to learn, teach, and grow through real-time mentorship, peer-to-peer skill exchange, and immersive community-driven experiences.',
    image: '/images/upskillr.png',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI','Express.js','Socket.io','Mongoose','WebRTC'],
    github: 'https://github.com/adtshrm007/UpSkillr--A-Skill-Exchange-Economy-Platform',
    live: null,
    inDevelopment: true,
  },
  {
    id: 'requesta',
    title: 'Requesta',
    description:
      'Requesta is an AI-augmented institutional workflow platform designed to streamline document requests, approvals, and administrative operations through intelligent validation systems, modern dashboards, and immersive user experiences.',
    image: requestaImg,
    tags: ['React', 'Express.js', 'MongoDB','Node.js' ,'REST','Mongoose'],
    github: 'https://github.com/adtshrm007/Requesta-Server',
    live: 'https://requesta-client.vercel.app/',
  },
  {
    id: 'ragcoder-theme',
    title: 'RagCoder Dark Theme',
    description:
      'RagCoder Dark is a custom-built VS Code theme extension designed to enhance developer productivity through premium dark aesthetics, accessibility-focused contrast systems, and carefully crafted syntax highlighting.',
    image: '/images/ragcoder-theme.png',
    tags: ['VS Code', 'JSON', 'Theme', 'Open Source'],
    github: 'https://github.com/adtshrm007/VSCODE-Theme-Extension',
    live: 'https://marketplace.visualstudio.com/items?itemName=ragcoder-dev.ragcoder-dark',
  },
];

export const caseStudies = [
  {
    id: 'requesta',
    title: 'Requesta',
    subtitle: 'AI-Powered Institutional Workflow Platform',
    featured: true,
    overview: 'Requesta is a robust B2B SaaS designed to digitize and automate institutional document workflows. It replaces manual paper trails with an intelligent, role-based approval system.',
    problem: 'Institutions suffer from slow, untrackable, and error-prone manual document requests, leading to administrative bottlenecks.',
    architecture: ['React (Frontend)', 'Express.js (API Gateway)', 'MongoDB (Data Layer)', 'Open Router API (Decision Engine)', 'Nodemailer (Notifications)'],
    techStack: ['React', 'Express.js', 'MongoDB', 'JWT', 'Open Router API', 'Tailwind'],
    features: [
      'Multi-tier Role-Based Access Control (RBAC)',
      'Secure JWT-based Authentication',
      'Intelligent Document Analysis via Open Router API',
      'MongoDB Aggregation Pipelines for Analytics',
      'Automated Email Workflows'
    ],
    challenges: 'Designing a secure multi-tenant architecture with complex role hierarchies and dynamic approval chains.',
    solutions: 'Implemented a robust JWT strategy with refresh tokens and designed a flexible MongoDB schema with referenced approval paths.',
    impact: 'Reduced average document processing time by 75% and provided real-time visibility into workflow bottlenecks.',
    image: requestaImg,
    github: 'https://github.com/adtshrm007/Requesta-Server',
    live: 'https://requesta-client.vercel.app/'
  }
];

export const startupLab = {
  title: 'UpSkillr',
  subtitle: 'A Skill Exchange Economy Platform',
  description: 'Building an ambitious peer-to-peer learning ecosystem where developers can exchange skills, mentor each other, and collaborate on projects in real-time.',
  progress: 45, // percentage
  status: 'In Active Development',
  completedFeatures: [
    'User Authentication & Profiles',
    'Database Schema Design',
    'Core UI/UX Architecture'
  ],
  upcomingFeatures: [
    'Skill Exchange Marketplace',
    'WebRTC Video Sessions',
    'Credit Economy System',
    'AI-Powered Mentor Matching',
    'Real-time Chat & Communities'
  ]
};

export const technicalBlogs = [
  {
    id: 'jwt-auth',
    title: 'JWT Authentication Deep Dive: Securing React & Node.js Apps',
    date: 'May 15, 2026',
    readTime: '8 min read',
    tags: ['Security', 'Node.js', 'React']
  },
  {
    id: 'rbac-express',
    title: 'Building Scalable Role-Based Access Control with Express.js',
    date: 'April 22, 2026',
    readTime: '6 min read',
    tags: ['Architecture', 'Express.js', 'MongoDB']
  },
  {
    id: 'mongo-aggregations',
    title: 'Unlocking MongoDB Aggregation Pipelines for Dashboard Analytics',
    date: 'March 10, 2026',
    readTime: '10 min read',
    tags: ['Database', 'MongoDB', 'Performance']
  },
  {
    id: 'webrtc-fundamentals',
    title: 'WebRTC Architecture Fundamentals for Real-Time Video',
    date: 'Coming Soon',
    readTime: '--',
    tags: ['WebRTC', 'Real-Time']
  }
];

export const socialProof = [
  {
    id: 1,
    name: 'Open Source Community',
    role: 'GSSoC',
    content: 'Recognized as a dedicated contributor capable of navigating complex codebases and delivering high-quality pull requests under tight deadlines.',
    metric: '5+ PRs Merged'
  },
  {
    id: 2,
    name: 'VS Code Marketplace',
    role: 'Developer Tooling',
    content: 'Successfully published a developer theme prioritizing accessibility and long-session coding comfort.',
    metric: '100+ Installs'
  }
];

export const githubStats = {
  username: 'adtshrm007',
  commitsThisYear: 1024,
  prsMerged: 45,
  issuesClosed: 32,
  topLanguages: ['JavaScript', 'HTML', 'CSS', 'TypeScript']
};

export const social = {
  email: 'adtshrm277@gmail.com',
  github: 'https://github.com/adtshrm007',
  linkedin: 'https://www.linkedin.com/in/aditya-sharma-836856315/',
  twitter: 'https://x.com/ADTSHRM007',
};
