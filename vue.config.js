module.exports = {
    devServer: {
        proxy: {
            '/user/': {
                target: 'http://127.0.0.1:8090'
            }
        }
    }
};