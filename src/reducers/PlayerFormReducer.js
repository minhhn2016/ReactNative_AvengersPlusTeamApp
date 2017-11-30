import {
    PLAYER_UPDATE, 
    PLAYER_CREATE,
    PLAYER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case PLAYER_CREATE:
            return INITIAL_STATE;
        case PLAYER_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
