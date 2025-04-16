export default defineNuxtRouteMiddleware((to, from) => {
   const exclude = ['/login']
   const token = useCookie('taskmngr_auth_token')

   if (!token.value && !exclude.includes(to.path)) {
      return navigateTo('/login')
   } else if (token.value && exclude.includes(to.path)) {
      return navigateTo('/')
   }
})