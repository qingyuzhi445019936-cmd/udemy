export default defineNuxtConfig({
  ssr: false,
  nitro: { preset: 'static' },
  app: {
    baseURL: '/udemy/', // 对应 GitHub Pages 仓库子路径
    head: {
      title: '100 Days of Code',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/udemy/favicon.ico' }
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
})
