export default defineEventHandler(async (event) => {
   const $api = $serverApi(event)
   const body = await readBody<InferSchema<typeof $authSchema.login>>(event)

   try {
      const response = await $api<API.Response<Model.Auth>>("/auth/login", {
         method: "post",
         body,
      })

      setCookie(event, "taskmngr_auth_token", response.data.token, {
         httpOnly: false,
         secure: process.env.NODE_ENV === "production",
         sameSite: "lax",
         path: "/",
      })

      const { meta, data } = response
      return {
         meta,
         data: {
            user: data.user,
         },
      }
   } catch (error) {
      throwServerError(error)
   }
})
