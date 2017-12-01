import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    PLAYER_UPDATE, 
    PLAYER_CREATE,
    PLAYERS_FETCH_SUCCESS,    
    PLAYER_FORM_CLEAR,       
} from './types';

export const playerUpdate = ({ prop, value }) => {
    return {
        type: PLAYER_UPDATE,
        payload: { prop, value }
    };      
};

export const playerCreate = ({ name, email, phone }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/players`)
            .push({ name, email, phone })
            .then(() => {
                dispatch({ type: PLAYER_CREATE });
                Actions.playerList({ type: 'reset' });
            });
    };
};

export const playersFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/players`)
            .on('value', snapshot => {
                dispatch({ type: PLAYERS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const playerSave = ({ name, email, phone, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/players/${uid}`)
            .set({ name, email, phone })
            .then(() => {
                dispatch({ type: PLAYER_FORM_CLEAR });
                Actions.playerList({ type: 'reset' });
            });
    };
};

export const playerDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/players/${uid}`)
            .remove()
            .then(() => {
                Actions.playerList({ type: 'reset' });
            });
    };
};

export const playerFormClear = () => {
    return (dispatch) => {
        dispatch({ type: PLAYER_FORM_CLEAR });
    };
};
