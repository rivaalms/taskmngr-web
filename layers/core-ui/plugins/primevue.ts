import PrimeVue from "primevue/config"
import StyleClass from "primevue/styleclass"
import AnimateOnScroll from "primevue/animateonscroll"
import ConfirmationService from "primevue/confirmationservice"
import ToastService from "primevue/toastservice"

export default defineNuxtPlugin(({ vueApp }) => {
   vueApp.use(PrimeVue, {
      unstyled: true,
   })
   vueApp.directive("styleclass", StyleClass)
   vueApp.directive("animateonscroll", AnimateOnScroll)
   vueApp.use(ConfirmationService)
   vueApp.use(ToastService)
})
