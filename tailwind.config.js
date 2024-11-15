/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": '#f24906',
        "primary-text-hover": '#c03d09',
        "secondary-text": '#000000',
        "secondary-text-hover": '#333333',
        "primary-bg": '#ffffff',
        "dark-primary-text": '#ffffff',
        "dark-secondary-text": '#ddd',
        "dark-primary-bg": '#000000',
        "dark-secondary-bg": '#330000',
      },
    },
  },
  plugins: [],
}
