/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Подключите все ваши компоненты
  ],
  darkMode: 'class', // Включаем поддержку темной темы через класс
  theme: {
    extend: {},
  },
  plugins: [],
}
