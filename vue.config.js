const {defineConfig} = require('@vue/cli-service');
const webpack = require('webpack');

module.exports       = defineConfig({
    transpileDependencies: true,
    //You can get info in this file: node_modules/@vue/cli-service/lib/config/base.js
    chainWebpack: config =>
        config
            .plugin('feature-flags')
            .use(require('webpack').DefinePlugin, [{
                __VUE_OPTIONS_API__: 'false',
                __VUE_PROD_DEVTOOLS__: 'true'   // TODO
            }]),
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
        name: "SpeedReading",
        icons: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
});
