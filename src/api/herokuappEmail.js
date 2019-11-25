import axios from 'axios';

// Not used, implemented a proxy to automatically use localhost if in DEV, or Heroku when in PROD
export default axios.create({
    baseURL: 'https://set-web-api.herokuapp.com/email/'
});
