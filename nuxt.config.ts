// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import path from "path";
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineNuxtConfig({
  alias: {
    'src': resolve('src'),
  },
  srcDir: 'src',
  app: {
    head: {
      title: 'Cyclone',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' },
        { name: 'theme-color', content: '#4fc08d' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon',type: 'image/x-icon', href: '/favicon.ico' }
      ],
      style: [],
      script: [],
      noscript: [],
      charset: 'utf-8',
      htmlAttrs: { lang : 'zh' }
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  components: {
    dirs: [
      'src/components/widgets'
    ]
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
  tailwindcss: {
    viewer: false,
    cssPath: 'src/assets/scss/tailwind.scss',
    configPath: 'src/config/tailwind.config.ts'
  },
  typescript: {
    typeCheck: true
  }
})
