import axios from 'axios';

export default axios.create({
    baseURL: 'https://set-web-api.herokuapp.com/email/'
});
