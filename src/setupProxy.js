const proxy = require('http-proxy-middleware');

if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV);
    module.exports = function(app) {
        app.use(proxy(['/email'], { target: 'https://set-web-api.herokuapp.com' }));
    };
} else {
    console.log(process.env.NODE_ENV);
    module.exports = function(app) {
        app.use(proxy(['/email'], { target: 'http://localhost:3001' }));
    };
}
