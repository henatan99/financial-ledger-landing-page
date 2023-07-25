/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            custom_green: 'rgba(40, 167, 69, 1);',
            custom_white: 'rgba(255, 255, 255, 1)',
            custom_black: 'rgba(51, 51, 51, 1)'
        },
        typography: {
          DEFAULT: {
            css: {

            }
          }
        }
      },
    },
    plugins: [],
  }
  