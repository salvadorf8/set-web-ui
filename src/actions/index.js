import axios from 'axios';


export const SEND_EMAIL = 'send_email';


export function sendEmail(values) {
    console.log(values);
    const request = axios.post("https://set-web-api.herokuapp.com/email/sendform", values);

    return{
        type: SEND_EMAIL,
        payload: request
    };
}