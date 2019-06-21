import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import emailReducer from './emailReducer';
import { streamLineDataReducer, selectedPropertyReducer } from './streamlineDataReducer';

export default combineReducers({
    emailAPIResponse: emailReducer,
    form: formReducer,
    streamlineData: streamLineDataReducer,
    selectedProperty: selectedPropertyReducer
});