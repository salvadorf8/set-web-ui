// import axios from 'axios';
import herokuappEmail from '../api/herokuappEmail';

export const sendEmail = (values) => {
    console.log(values);
    // const request = axios.post("https://set-web-api.herokuapp.com/email/sendform", values);
    const promise = herokuappEmail.post('/sendform', values);

    return{ type: 'SEND_EMAIL', payload: promise };
}

export const selectProperty = (property) => {
    return {type: 'PROPERTY_SELECTED', payload: property};
}