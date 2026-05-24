// ============================================================
// PORTFOLIO DATA — RagCoder
// ============================================================

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, responsive UIs with React, Next.js and modern CSS techniques.',
    icon: 'Monitor',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building scalable REST APIs and server-side logic with Node.js, Express and MongoDB.',
    icon: 'Server',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Designing immersive interfaces with Figma, focusing on usability and visual impact.',
    icon: 'Layers',
  },
  {
    id: 'react',
    title: 'React & MERN Stack',
    description: 'End-to-end full-stack development using MongoDB, Express, React and Node.js.',
    icon: 'Atom',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Integrating LLMs, OpenAI APIs and AI-powered features into modern web apps.',
    icon: 'Brain',
  },
  {
    id: 'realtime',
    title: 'Real-Time Apps',
    description: 'Building live collaborative tools using WebSockets, Socket.io and real-time databases.',
    icon: 'Zap',
  },
];

export const projects = [
  {
    id: 'upskillr',
    title: 'UpSkillr',
    description:
      'A modern e-learning platform designed to help developers upskill with curated roadmaps, interactive lessons, and AI-powered progress tracking.',
    image: '/images/upskillr.png',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    github: 'https://github.com/ragcoder',
    live: 'https://upskillr.dev',
  },
  {
    id: 'requesta',
    title: 'Requesta',
    description:
      'A sleek API testing and request management tool for developers. Send requests, inspect responses, and collaborate — all in a beautiful dark UI.',
    image: '/images/requesta.png',
    tags: ['React', 'Express', 'WebSockets', 'REST'],
    github: 'https://github.com/ragcoder',
    live: 'https://requesta.dev',
  },
  {
    id: 'ragcoder-theme',
    title: 'RagCoder Dark Theme',
    description:
      'A premium VS Code theme featuring deep blacks and neon green accents, published to the VS Code Marketplace with 500+ installs.',
    image: '/images/ragcoder-theme.png',
    tags: ['VS Code', 'JSON', 'Theme', 'Open Source'],
    github: 'https://github.com/ragcoder',
    live: 'https://marketplace.visualstudio.com',
  },
];

export const achievements = [
  {
    id: 'vscode',
    title: 'VS Code Marketplace Publish',
    description:
      'Published the RagCoder Dark Theme to the VS Code Marketplace, reaching 500+ installs from developers worldwide.',
    year: '2024',
    icon: 'Package',
  },
  {
    id: 'mern',
    title: 'MERN Full Stack Projects',
    description:
      'Successfully delivered multiple production-grade full-stack applications using the MERN stack for real clients.',
    year: '2024',
    icon: 'Code2',
  },
  {
    id: 'realtime',
    title: 'Real-Time App Development',
    description:
      'Built real-time collaborative tools with WebSocket integration, serving concurrent users with sub-100ms latency.',
    year: '2023',
    icon: 'Wifi',
  },
  {
    id: 'opensource',
    title: 'Open Source Contributions',
    description:
      'Contributed to multiple open-source repositories, improving documentation, fixing bugs and adding features.',
    year: '2023',
    icon: 'GitBranch',
  },
  {
    id: 'ai',
    title: 'AI Integration Projects',
    description:
      'Integrated LLM-powered features including chatbots, content generation and intelligent recommendations into web apps.',
    year: '2024',
    icon: 'Brain',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Product Manager @ TechFlow',
    avatar: 'SM',
    quote:
      "Aditya delivered beyond our expectations. The UI he built is not just beautiful — it's a joy to use. His attention to detail and sense of design is exceptional.",
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'CTO @ StartupLab',
    avatar: 'JC',
    quote:
      'Working with Aditya was a game-changer for our startup. He built our entire platform in record time while maintaining outstanding code quality.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Lead Designer @ Nexus Studio',
    avatar: 'PS',
    quote:
      'What sets Aditya apart is how he bridges design and engineering. He brings Figma files to life with animations that feel alive. Truly rare talent.',
  },
];

export const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Built' },
  { value: 5, suffix: '+', label: 'Tech Stacks' },
  { value: 500, suffix: '+', label: 'VS Code Installs' },
];

export const social = {
  email: 'aditya@ragcoder.dev',
  github: 'https://github.com/ragcoder',
  linkedin: 'https://linkedin.com/in/ragcoder',
  twitter: 'https://twitter.com/ragcoder',
};
