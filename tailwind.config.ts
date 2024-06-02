import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        dark: '#2F2522',
        light: '#FEFFEA',
        brown: '#A97160',
        lightGreen: '#6C896E',
        darkGreen: '#4B7F52',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        cursive: ['Island Moments', 'cursive']
      },
    },
    keyframes: {
      shimmer: {
        '100%': { transform: 'translateX(100%)' },
      },
    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  ], 
};

export default config;
