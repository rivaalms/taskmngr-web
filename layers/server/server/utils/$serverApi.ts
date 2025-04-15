import { type H3Event } from 'h3'

export default function (event: H3Event) {
   const config = useRuntimeConfig()
   const token = getCookie(event, 'taskmngr_auth_token')

   const handler = $fetch.create({
      baseURL: config.apiUrl,

      async onRequest({ request, options }) {
         if (token) {
            options.headers.set('Authorization', `Bearer ${token}`)
         }

         options.headers.set('Accept', 'application/json')
      },

      async onRequestError({ error }) {
         throw error
      },

      async onResponse({ response }) {
         return response._data
      },

      async onResponseError({ response, error }) {
         if (response.status == 401) {
            deleteCookie(event, 'taskmngr_auth_token', {
               path: '/'
            })
         }
         throw error ?? response._data
      }
   })

   return handler
}