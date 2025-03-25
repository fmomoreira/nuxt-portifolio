// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  // Configuração do Sitemap
  sitemap: {
    hostname: 'https://seudominio.com', // Substitua pelo seu domínio real quando publicar
    gzip: true,
    urls: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1
      },
      {
        url: '/sobre',
        changefreq: 'monthly',
        priority: 0.8
      }
    ]
  }
})