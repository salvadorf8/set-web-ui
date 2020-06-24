import axios from 'axios';

// Not used, implemented a proxy to automatically use localhost if in DEV, or Heroku when in PROD
export default axios.create({
    baseURL: 'https://streamline-wiring-api.herokuapp.com/email/'
    // baseURL: 'http://localhost:3001/email/'
});
