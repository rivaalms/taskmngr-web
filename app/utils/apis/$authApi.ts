export const $authApi = {
   async login(body: InferSchema<typeof $authSchema.login>) {
      return await $api<API.Response<Model.Auth>>(`/api/auth/login`, {
         method: "post",
         body,
      })
   },

   async self() {
      return await $api<API.Response<Model.User>>(`/api/auth/self`, {
         method: "get",
      })
   },
}
