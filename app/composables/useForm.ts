import { type ObjectSchema } from "yup"

export default function <T extends Record<PropertyKey, any>>(
   initialValues: T,
   validationSchema: ObjectSchema<T>
) {
   const form = ref<T>(initialValues)
   const error = ref<Partial<Record<keyof T, string>>>({})
   const validator = useValidation(validationSchema, form.value)

   return {
      form,
      error,
      validator,
   }
}
