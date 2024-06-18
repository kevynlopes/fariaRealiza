// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt',],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  alias: {
    css: "/<srcDir>/assets/css"
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/tailwind.css'],

  imports: {
    dirs: ['types/.ts', 'store/.ts', 'types/*/.ts'],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      }
    }
  },
})