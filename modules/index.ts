import { defineNuxtModule, useNitro } from '@nuxt/kit'

export default defineNuxtModule((options, nuxt) => {
    nuxt.hook('pages:extend', (pages) => {
        console.log(`Discovered ${pages.length} pages`)
    })
    nuxt.hook('ready', () => {
        const nitro = useNitro()
        console.log(nitro)
        nitro.hooks.hook('prerender:routes', () => {
            // console.log(nitro.scannedHandlers)
            console.log('🚀 ~ file: index.ts:12 ~ nitro.hooks.hook ~ nitro.scannedHandlers:', nitro.scannedHandlers)
        })
    })
})
