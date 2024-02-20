// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
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
})
