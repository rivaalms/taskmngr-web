export const $authApi = {
   async login(body: InferSchema<typeof $authSchema.login>) {
      return await $api<API.Response<Model.Auth>>(`/api/auth/login`, {
         method: "POST",
         body
      })
   }
}