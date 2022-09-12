module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 8']
        },
        'postcss-pxtorem': {
            rootValue({ file }) {
                if (file.indexOf('vant') > -1) {
                    return 75
                }
            },
            propList: ['*']
        }
    }
}
