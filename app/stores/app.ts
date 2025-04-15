import { type ToastMessageOptions } from "primevue/toast"

export const useAppStore = defineStore("taskmngr_app", {
   state: () => ({}),

   actions: {
      notify(
         severity: Exclude<ToastMessageOptions['severity'], undefined>,
         title: string,
         detail: string
      ) {
         const toast = useNuxtApp().vueApp.config.globalProperties.$toast
         toast.add({
            severity,
            summary: title,
            detail,
            life: 5000,
         })
      },
   },
})
