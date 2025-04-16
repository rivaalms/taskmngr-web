<script setup lang="ts">
const props = defineProps<{
   menu: MenuItem[]
}>()

const route = useRoute()

const openedSubmenu = ref<string[]>([])
function toggleSubmenu(item: MenuItem) {
   if (openedSubmenu.value.includes(item.label as string)) {
      openedSubmenu.value = openedSubmenu.value.filter(
         (menu) => menu !== item.label
      )
   } else {
      openedSubmenu.value.push(item.label as string)
   }
}

function transitionEnter(el: Element) {
   $transitionSlideDown(el as HTMLElement)
}

function transitionLeave(el: Element) {
   $transitionSlideUp(el as HTMLElement)
}
</script>

<template>
   <div class="h-full flex flex-col gap-2">
      <div v-if="$slots.start" class="p-2">
         <slot name="start" />
      </div>
      <div class="flex-1 flex flex-col gap-2 overflow-y-auto px-2">
         <template v-for="item in props.menu">
            <template v-if="item.header">
               <span class="font-medium text-surface-500 mt-2">
                  {{ item.header }}
               </span>
            </template>
            <template v-else-if="item.separator">
               <Divider />
            </template>
            <template v-else>
               <NuxtLink
                  :to="item.items ? undefined : item.to"
                  class="px-3 py-2 cursor-pointer select-none rounded-lg hover:bg-surface-100 active:bg-surface-200 transition duration-300"
                  :class="[
                     {
                        'bg-primary-100 text-primary-500! hover:bg-primary-200! active:bg-primary-300/75!':
                           route.path === item.to ||
                           item.items?.some((i) => i.to === route.path),
                     },
                  ]"
                  @click="item.items && toggleSubmenu(item)"
               >
                  <div
                     class="w-full flex items-center"
                     :class="[{ 'justify-between': item.items }]"
                  >
                     <div class="flex gap-2 items-center">
                        <Icon
                           v-if="item.icon"
                           :name="item.icon"
                           class="size-4!"
                        />
                        <span>
                           {{ item.label }}
                        </span>
                     </div>
                     <Icon
                        v-if="item.items"
                        name="lucide:chevron-right"
                        class="transition-transform duration-300"
                        :class="[{ 'rotate-90': openedSubmenu.includes(item.label as string) }]"
                     />
                  </div>
               </NuxtLink>
               <Transition
                  @enter="transitionEnter"
                  @leave="transitionLeave"
               >
                  <div v-if="openedSubmenu.includes(item.label as string)" class="py-2">
                     <LayoutSidebar
                        :menu="(item.items as MenuItem[])"
                        class="border-s border-surface-300 ms-4"
                     />
                  </div>
               </Transition>
            </template>
         </template>
      </div>
      <div v-if="$slots.end" class="p-2">
         <slot name="end" />
      </div>
   </div>
</template>
