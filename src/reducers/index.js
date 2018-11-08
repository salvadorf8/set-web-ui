import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EmailReducer from './email_reducer';


const rootReducer = combineReducers({
    email: EmailReducer,
    form: formReducer
});

export default rootReducer;