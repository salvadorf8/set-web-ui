import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import EmailReducer from './emailReducer';

export default combineReducers({
    email: EmailReducer,
    form: formReducer
});
