/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            h1: {
              color: theme('colors.slate.900'),
            },
            h2: {
              color: theme('colors.slate.900'),
            },
            h3: {
              color: theme('colors.slate.900'),
            },
            strong: {
              color: theme('colors.slate.900'),
            },
            a: {
              color: theme('colors.teal.500'),
              '&:hover': {
                color: theme('colors.teal.600'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};