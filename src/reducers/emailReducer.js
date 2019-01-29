//TODO: refactoring INITIAL_STATE is currently not used
const INITIAL_STATE = {
    message: null,
    ammountSubmitted: 0
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'SEND_EMAIL':
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}