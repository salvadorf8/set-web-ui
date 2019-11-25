// import herokuappEmail from '../api/herokuappEmail';
import axios from 'axios';

export const sendEmail = (values) => async (dispatch) => {
    console.log('in action creator ', values);
    const response = await axios.post('/email/sendform', values);

    dispatch({ type: 'SEND_EMAIL', payload: response });
};

export const selectProperty = (property) => {
    return { type: 'PROPERTY_SELECTED', payload: property };
};
