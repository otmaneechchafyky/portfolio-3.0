/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'buble': {
          '0%, 100%': {
            borderRadius: '60% 40% 63% 37% / 39% 50% 50% 61%',
            transform: 'translate(0, 0)',
          },
          '25%': {
            borderRadius: '73% 27% 63% 37% / 39% 63% 37% 61%',
            transform: 'translate(100px, 0)',
          },
          '50%': {
            borderRadius: '71% 29% 50% 50% / 34% 41% 59% 66%',
            transform: 'translate(0, -40px)',
          },
          '75%': {
            borderRadius: '40% 60% 63% 37% / 39% 50% 50% 61%',
            transform: 'translate(100px, -40px)',
          },
        },
      },

      animation: {
        'buble': 'buble 15s ease infinite',
      },
    },
    fontFamily: {
      'monos': ['Space Mono', 'Roboto'],
    }
  },
  plugins: [],
};
