// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
     "@nuxt/fonts",
     "@nuxt/image",
     "@nuxt/icon",
     "@pinia/nuxt",
     "@vueuse/nuxt",
     "dayjs-nuxt",
   ],
})