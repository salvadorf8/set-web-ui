import herokuappEmail from '../api/herokuappEmail';
// import axios from 'axios';

export const sendEmail = (values) => async (dispatch) => {
    const response = await herokuappEmail.post('/sendform', values);

    dispatch({ type: 'SEND_EMAIL', payload: response });
};

export const selectProperty = (property) => {
    return { type: 'PROPERTY_SELECTED', payload: property };
};
