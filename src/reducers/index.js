import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import emailReducer from './emailReducer';
import { newStreamLineDataReducer } from './newStreamlineDataReducer';

export default combineReducers({
    emailAPIResponse: emailReducer,
    form: formReducer,
    streamlineData: newStreamLineDataReducer
});
