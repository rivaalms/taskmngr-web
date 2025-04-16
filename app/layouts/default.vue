<script setup lang="ts">
const user = useAuthStore().getUser
const menu = computed<MenuItem[]>(() => [
   {
      label: "Dashboard",
      to: "/",
      icon: "prime:home",
   },
   {
      label: "Boards",
      icon: "lucide:columns",
      items: [
         {
            label: "lorem",
            to: "/lorem",
            icon: "prime:home",
         },
         {
            label: "lorem",
            to: "/lorem",
            icon: "prime:home",
         },
         {
            label: "lorem",
            to: "/lorem",
            icon: "prime:home",
         },
      ],
   },
])
</script>

<template>
   <div class="min-h-screen relative">
      <aside
         class="fixed left-0 inset-y-0 w-72 bg-surface-50 border-r border-surface-200 py-2"
      >
         <LayoutSidebar :menu="menu">
            <template #start>
               <SecondaryButton
                  class="w-full bg-surface-50! enabled:hover:bg-surface-100! enabled:hover:border-surface-100! enabled:active:bg-surface-200!"
               >
                  <div class="w-full flex justify-between items-center">
                     <div class="flex gap-2 items-center">
                        <Avatar
                           label="T"
                           size="normal"
                           class="!bg-primary-100 !text-primary-500"
                        />
                        <span>Team Name</span>
                     </div>
                     <Icon
                        name="lucide:chevrons-up-down"
                        class="!size-4"
                     />
                  </div>
               </SecondaryButton>
            </template>
            <template #end>
               <SecondaryButton
                  class="w-full bg-surface-50! enabled:hover:bg-surface-100! enabled:hover:border-surface-100! enabled:active:bg-surface-200!"
               >
                  <div class="flex-1 flex justify-between items-center">
                     <div class="flex gap-3 items-center">
                        <Avatar label="A" />
                        <div class="flex flex-col items-start">
                           <div>
                              {{ user?.name }}
                           </div>
                           <div class="text-sm text-surface-500">
                              {{ user?.email }}
                           </div>
                        </div>
                     </div>
                     <Icon
                        name="lucide:chevrons-up-down"
                        class="!size-4"
                     />
                  </div>
               </SecondaryButton>
            </template>
         </LayoutSidebar>
      </aside>
      <div class="ms-72 min-h-screen relative">
         <header class="h-16 fixed top-0 inset-x-0 ms-72 px-4 bg-white"
         >
            <div class="h-full w-full flex items-center gap-4">
               <div class="flex-1"></div>
               <span class="font-(family-name:--font-logo) text-lg font-bold">
                  <span class="text-primary-500">task</span>mngr
               </span>
            </div>
         </header>
         <main class="min-h-[calc(100vh-var(--spacing)*16)] mt-16 p-4">
            <slot />
         </main>
      </div>
   </div>
</template>
