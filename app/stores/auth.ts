type State = {
   user: Model.User | null
}

export const useAuthStore = defineStore("taskmngr_auth", {
   persist: true,
   state: (): State => ({
      user: null
   }),

   getters: {
      getUser: (state) => state.user
   },

   actions: {
      async login(payload: InferSchema<typeof $authSchema.login>) {
         const response = await $authApi.login(payload)
         this.user = response.data.user
         return response
      }
   }
})