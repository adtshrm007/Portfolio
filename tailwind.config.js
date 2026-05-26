/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        card: '#111111',
        accent: '#C6FF00',
        'accent-dim': '#9dbf00',
        white: '#F5F5F5',
        gray: {
          text: '#9CA3AF',
          border: '#222222',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        display: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out 1s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'blob-1': 'blob1 12s ease-in-out infinite',
        'blob-2': 'blob2 15s ease-in-out infinite',
        'grid-move': 'gridMove 30s linear infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'progress-bar': 'progressBar 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(198,255,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(198,255,0,0.6), 0 0 80px rgba(198,255,0,0.2)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob1: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        blob2: {
          '0%, 100%': { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
          '50%': { borderRadius: '60% 40% 40% 60% / 40% 60% 40% 60%' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        scanLine: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        progressBar: {
          '0%': { width: '0%' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #222222 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neon': '0 0 20px rgba(198,255,0,0.4), 0 0 60px rgba(198,255,0,0.15)',
        'neon-sm': '0 0 10px rgba(198,255,0,0.3)',
        'neon-lg': '0 0 40px rgba(198,255,0,0.5), 0 0 100px rgba(198,255,0,0.2)',
        'card': '0 4px 30px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7)',
        'glass': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
