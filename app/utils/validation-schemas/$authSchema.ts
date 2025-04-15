const yup = useYup()

export const $authSchema = {
   login: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required()
   })
}