// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import tailwindcss from "@tailwindcss/vite"

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   css: [join(currentDir, "./assets/css/main.css")],
   vite: {
      plugins: [tailwindcss()],
   },
   components: [
      {
         path: join(currentDir, "./src/volt"),
         pathPrefix: false,
         extensions: [".vue"],
      },
      {
         path: join(currentDir, "./components"),
         pathPrefix: false,
      },
   ],
})
