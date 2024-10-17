/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        bgPrimary: 'var(--background-primary)',
        bgSecondary: 'var(--background-secondary)',
        bgTerceary: 'var(--background-terceary)',
        textPrimary: 'var(--color-primary)',
        textTerceary: 'var(--color-terceary)',
        borderBottom: 'var(--border-primary)',
        borderSecondary: 'var(--border-secondary)'
      }
    },
    fontFamily: {
      'comic': ['Comic Neue', 'sans-serif' ],
    },
    fontWeight: {
      // Asegúrate de que los pesos de fuente se alineen con las variantes de tu fuente
      light: 300,
      normal: 400,
      bold: 700,
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

