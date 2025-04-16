export default defineNuxtPlugin((nuxtApp) => {
   const cookie = useCookie('taskmngr_auth_token')
   if (cookie.value) {
      const authStore = useAuthStore()
      authStore.fetchSelf()
   }
})