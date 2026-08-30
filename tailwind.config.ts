import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f9fb',
          100: '#f1f5f9',
          200: '#dbe8f2',
          300: '#afcce2',
          400: '#7eafd0',
          500: '#4b91be',
          600: '#3570a0',
          700: '#2b5d84',
          800: '#264d6f',
          900: '#223f5b'
        },
        gold: '#c7a86a'
      },
      boxShadow: {
        soft: '0 18px 44px rgba(43, 67, 103, 0.12)',
        glow: '0 0 0 1px rgba(199, 168, 106, 0.16), 0 18px 44px rgba(199, 168, 106, 0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
