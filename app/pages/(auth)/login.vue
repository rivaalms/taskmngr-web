<script setup lang="ts">
definePageMeta({
   layout: "auth"
})

const { form, error, validator } = useForm(
   {
      email: "",
      password: "",
   },
   $authSchema.login
)

async function onSubmit() {
   error.value = {}
   await validator.validate(
      async (values) => {
         await useAuthStore()
            .login(values)
            .then(async (res) => {
               useAppStore().notify("success", "Success", res.meta.message)
               await navigateTo("/")
            })
      },
      (errors) => {
         error.value = errors
      }
   )
}
</script>

<template>
   <div class="h-screen">
      <div class="h-full grid grid-cols-2">
         <div class="h-full flex justify-center items-center shadow-xl">
            <div class="max-w-1/2 flex flex-col gap-4">
               <div class="flex flex-col gap-2">
                  <h1 class="text-center text-2xl font-semibold">
                     Login to your account
                  </h1>
                  <p class="text-center text-sm text-surface-500 font-light">
                     Enter your email below to login to your account
                  </p>
               </div>
               <div>
                  <form
                     class="flex flex-col gap-6"
                     @submit.prevent="onSubmit"
                  >
                     <div class="flex flex-col gap-2">
                        <label
                           for="email"
                           class="text-sm"
                        >
                           Email
                        </label>
                        <InputText
                           v-model="form.email"
                           id="email"
                           type="email"
                           fluid
                           :invalid="!!error.email"
                           placeholder="name@example.com"
                        />
                        <Message
                           v-if="error.email"
                           severity="error"
                           variant="simple"
                        >
                           {{ error.email }}
                        </Message>
                     </div>
                     <div class="flex flex-col gap-2">
                        <label
                           for="password"
                           class="text-sm"
                        >
                           Password
                        </label>
                        <Password
                           v-model="form.password"
                           id="password"
                           fluid
                           toggle-mask
                           :feedback="false"
                           :invalid="!!error.password"
                        />
                        <Message
                           v-if="error.password"
                           severity="error"
                           variant="simple"
                        >
                           {{ error.password }}
                        </Message>
                     </div>
                     <div class="flex flex-col">
                        <Button
                           type="submit"
                           label="Login"
                        />
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="bg-surface-200"></div>
      </div>
   </div>
</template>
