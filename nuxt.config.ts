export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  image: {
    inject: true,
    format: ['webp'],
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/',
    },
  },
  plugins: ['~/plugins/squircle.js'],

  compatibilityDate: '2024-07-18',
});
