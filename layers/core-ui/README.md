# Nuxt Volt Layer

A ready-to-use Nuxt Layer powered by [Volt by PrimeVue](https://volt.primevue.org/). Preconfigured with everything you need to start building beautiful UI components using Volt + Tailwind CSS — just extend and go!

## 🚀 Quick Start

### Recommended (with full control)
1. Clone layer into your Nuxt project using [degit](https://github.com/Rich-Harris/degit):

   ```shell
   degit https://github.com/almsomnia/nuxt-volt.git your-layer
   ```

2. Add layer to your `nuxt.config.ts`:
   ```ts
   export default defineNuxtConfig({
      extends: [
         'path-to-your-layer'
      ]
   })
   ```

### Or directly extends repository

Extend the layer directly from repository in your Nuxt project:
```ts
export default defineNuxtConfig({
   extends: [
      'github:almsomnia/nuxt-volt'
   ]
})
```

> **Note**: You will have less control over customizations with this method — `degit` is recommended if you want to tweak the config or add custom utilities.

## ⚙️ Features

- Preconfigured Volt by PrimeVue with TailwindCSS v4
- Utility-first styling with full component ownership
- Works out of the box with Nuxt 3
- Custom component scaffolding via CLI
- Layer structure optimized for modularity

## 🛠 Create a Component

To scaffold a new Volt component:

```shell
pnpm --filter=your-layer volt:add component-name
```

## 📦 Built With

- [Nuxt 3](https://nuxt.com)
- [Volt](https://volt.primevue.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)

## 🙌 Contributing

Want to improve or extend the layer? PRs and ideas are always welcome!

## 📄 License

MIT
