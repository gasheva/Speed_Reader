const {defineConfig} = require('@vue/cli-service');

module.exports       = defineConfig({
    transpileDependencies: true,
    // devServer:{
    //     host: true,
    //     port: 8080,
    // },
    //You can get info in this file: node_modules/@vue/cli-service/lib/config/base.js
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_TITLE;
                return args;
            })
        config
            .plugin('feature-flags')
            .use(require('webpack').DefinePlugin, [{
                __VUE_OPTIONS_API__: 'false',
                __VUE_PROD_DEVTOOLS__: 'true'   // TODO
            }])
    },
    css:                   {
        loaderOptions: {
            sass: {
                // import only variables to use everywhere
                additionalData: '@import "@/assets/scss/_variables.scss";',
            },
        },
    },
    pluginOptions:         {
        i18n: {
            locale:          'ru',
            fallbackLocale:  'ru',
            localeDir:       'locales',
            enableLegacy:    false,
            runtimeOnly:     false,
            compositionOnly: false,
            fullInstall:     true,
        },
    },

    pwa:{
        name: process.env.VUE_APP_TITLE,
        shortName: "SR",
        description: "App for increasing your reading speed",
        backgroundColor: '#42B883',
        themeColor: '#fc0000',
        accentColor:'#082a81',

        icons: {
            // faviconSVG: 'img/icons/favicon.svg',
            // maskIcon: 'img/icons/safari-pinned-tab.svg',
                favicon32: 'img/icons/favicon-32x32.png',
                favicon16: 'img/icons/favicon-16x16.png',
                appleTouchIcon: 'img/icons/apple-touch-icon.png',
                msTileImage: 'img/icons/mstile-150x150.png',
            },
        // manifestOptions:{
            // icons:[
            //     {
            //         type: 'image/png',
            //         sizes: '32x32',
            //         src: 'img/icons/favicon-32x32.png',
            //         purpose: 'any'
            //     },{
            //         type: 'image/png',
            //         sizes: '16x16',
            //         src: 'img/icons/favicon-16x16.png',
            //         purpose: 'any'
            //     },{
            //         type: 'image/png',
            //         sizes: '150x150',
            //         src: 'img/icons/mstile-150x150.png',
            //         purpose: 'any'
            //     },{
            //         type: 'image/png',
            //         sizes: '192x192',
            //         src: 'img/icons/android-chrome-192x192.png',
            //         purpose: 'any'
            //     },{
            //         type: 'image/png',
            //         sizes: '256x256',
            //         src: 'img/icons/android-chrome-256x256.png',
            //         purpose: 'any'
            //     },
            // ]
        // }
    }
});
