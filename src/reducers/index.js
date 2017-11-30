import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlayerFormReducer from './PlayerFormReducer';
import PLayerReducer from './PlayerReducer';

export default combineReducers({
    auth: AuthReducer,
    playerForm: PlayerFormReducer,
    players: PLayerReducer
});
