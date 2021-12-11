const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://192.168.1.10:31933',
            changeOrigin: true
        }),
        proxy('/api', {
            target: 'http://192.168.1.10:31552',
            changeOrigin: true
        })
    );
}