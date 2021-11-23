import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
pages: 'pages',
layouts: 'layouts',
ssr: true,
dev:false,
css: ['@/assets/main.scss'],
meta: {
link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
},
pwa: {
    manifest: {
        name: 'Icon Sax'
    },
    meta: {
        name: 'Icon Sax'
    },
    icon: {
source: '@/public/icon.png'    }
  },

  buildModules: [
    '@nuxtjs/pwa',
  ],
})
