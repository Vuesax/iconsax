import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

ssr: false,
css: ['@/assets/main.scss'],
meta: {
link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

},
/* nitro: {
  preset: 'worker'
}, */

})
