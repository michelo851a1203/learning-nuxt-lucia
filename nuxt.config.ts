// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['storeToRefs', 'acceptHMRUpdate', 'defineStore']
      }
    ],
    '@nuxt/eslint',
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: true
  },
  imports: {
    dirs: ['~/stores']
  }
});
