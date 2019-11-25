const proxy = require('http-proxy-middleware');

if (process.env.NODE_ENV === 'production') {
    module.exports = function(app) {
        app.use(proxy(['/email'], { target: 'https://set-web-api.herokuapp.com' }));
    };
} else {
    module.exports = function(app) {
        app.use(proxy(['/email'], { target: 'http://localhost:3001' }));
    };
}
