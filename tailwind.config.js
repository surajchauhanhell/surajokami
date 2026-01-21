/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b00b69', // Default primary, but we'll use neon-purple mostly
        secondary: '#2c3e50',
        'neon-purple': '#bd00ff',
        'neon-pink': '#d946ef',
        'dark-bg': '#030014', // Deep space blue/black
        'card-bg': '#0f0728', // Slightly lighter purple/black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(189, 0, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(189, 0, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
