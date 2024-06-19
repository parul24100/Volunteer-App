module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      safelist: [
        "splide__arrow--prev",
        "splide__arrow--next"
      ],
    },
  },
  theme: {
    colors: {
      black: '#000',
      gray: {
        100: '#efefef',
        200: '#f2f2f2',
        900: '#1F2021'
      },
      blue: {
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      yellow: {
        50: '#E4FFAD', // nav highlight
        200: '#FFE67B', // button
        500: '#E27B38' // ticker, button
      },
      transparent: 'transparent',
      white: '#fff'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '3rem',
        xl: '2rem',
        '2xl': '3rem'
      }
    },
    fontFamily: {
      'sans': ['Catamaran', 'sans-serif'],
      'serif': ['Merriweather', 'serif']
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
