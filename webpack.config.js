module.exports = {
    resolve: {
        alias: {
            '@': require('path').resolve(__dirname, 'src')
        }
    },
    rules: {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    additionalData: `_variables.scss`
                }
            }
        ]
    }
};