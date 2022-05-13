const {defineConfig} = require('@vue/cli-service');
module.exports       = defineConfig({
    transpileDependencies: true,
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
});
