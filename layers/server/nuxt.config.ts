// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   runtimeConfig: {
      apiUrl: import.meta.env.NUXT_API_URL
   }
})
