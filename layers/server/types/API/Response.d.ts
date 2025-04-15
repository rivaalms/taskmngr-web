declare namespace API {
   interface Response<T> {
      meta: {
         success: boolean
         code: number
         message: string
      }
      data: T
   }
}