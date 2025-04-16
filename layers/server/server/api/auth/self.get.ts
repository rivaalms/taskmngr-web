export default defineEventHandler(async (event) => {
   const $api = $serverApi(event)

   try {
      return await $api<API.Response<Model.User>>("/auth/me", {
         method: "get"
      })
   } catch (error) {
      throwServerError(error)
   }
})