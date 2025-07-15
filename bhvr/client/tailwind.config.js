/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // BangunKota Brand Colors
        primary: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#00695C', // Deep Teal - Primary
          600: '#00695C',
          700: '#004d40',
          800: '#00363a',
          900: '#001f23',
        },
        secondary: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#FF8F00', // Vibrant Orange - Secondary
          600: '#ff8f00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
        },
        accent: {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#C5E1A5', // Soft Lime - Accent
          300: '#aed581',
          400: '#9ccc65',
          500: '#8bc34a',
          600: '#7cb342',
          700: '#689f38',
          800: '#558b2f',
          900: '#33691e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#455A64', // Slate Gray
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'], // For headlines
        'body': ['Inter', 'sans-serif'], // For body text
        'display': ['Poppins', 'sans-serif'], // For display elements
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #00695C, #FF8F00)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #FF8F00, #00695C)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'brand': '6px', // Brand standard border radius
      }
    },
  },
  plugins: [],
}