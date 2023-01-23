/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'YVcyan': '#00AAC4',
        'YVyellow': '#FFDE16',
        'YVmagenta': '#D5227C',
      },
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animation-delay'),
  ],
}
