/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#e0efe9',
          200: '#c3e7db',
          300: '#9ddcc5',
          400: '#6bc9a8',
          500: '#214E41', // Brand Green from logo
          600: '#1a3d33',
          700: '#143029',
          800: '#0d231c',
          900: '#0D1F1A', // Dark Surface for dark mode
        },
        accent: {
          50: '#fdf8f0',
          100: '#faede0',
          200: '#f2dcc1',
          300: '#ecc7a3',
          400: '#e6af85',
          500: '#C69C48', // Brand Gold from logo
          600: '#b17d3a',
          700: '#8b622e',
          800: '#654c22',
          900: '#423619',
        },
        cream: {
          50: '#FFFCF5', // Very light cream for backgrounds
          100: '#fef9f0',
          200: '#fdf1e1',
          300: '#F3EAD3', // Cream background from logo
          400: '#e8d9b8',
          500: '#d9c099',
          600: '#c5a678',
          700: '#a6865f',
          800: '#84694c',
          900: '#635239',
        },
        // Custom dark mode colors
        'dark-surface': '#0D1F1A',
        'dark-card': '#1A2F29',
        'dark-text': '#F3EAD3',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|from|to|text)-(emerald|amber|teal|cyan)-(500|600)/,
    },
    'bg-emerald-500',
    'bg-amber-500',
    'bg-teal-500',
    'bg-cyan-500',
    'from-emerald-500',
    'to-emerald-600',
    'from-amber-500',
    'to-amber-600',
    'from-teal-500',
    'to-teal-600',
    'from-cyan-500',
    'to-cyan-600',
  ],
};
