// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image', '@vueuse/nuxt',],
    tailwindcss: {},
    googleFonts: {
        families: {
            Poppins: {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
        },
        display: 'swap',
        preconnect: true,
        useStylesheet: true,
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE,
        },
    },

    image: {
        cloudflare: {
            baseURL: 'https://imagedelivery.net/b5PKQi-eHYmFXihh4Gjd5g/',
        },
    },
})
