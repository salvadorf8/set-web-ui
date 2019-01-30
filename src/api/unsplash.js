import axios from 'axios';

//nice thing about axios, you can setup pre-configured instance of the axios client that has default properties set for where it makes a request too, or headers, even params

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: ''
    }
});