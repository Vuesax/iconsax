import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
pages: 'pages',
layouts: 'layouts',
ssr: false,
dev:true,
css: ['@/assets/main.scss']
})
