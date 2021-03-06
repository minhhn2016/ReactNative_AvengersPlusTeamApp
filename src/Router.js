import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import RequestAccountForm from './components/auth/RequestAccountForm';
import PlayerList from './components/player/PlayerList';
import PlayerCreate from './components/player/PlayerCreate';
import PlayerEdit from './components/player/PlayerEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
                <Scene key="requestAccount" component={RequestAccountForm} title="Submit your request" />              
            </Scene>

            <Scene 
                key="main"
                onRight={() => Actions.auth({ type: 'reset' })}
                rightTitle="Sign Out"
            >
                <Scene
                    key="playerList" 
                    component={PlayerList} 
                    title="Players"
                    initial    
                />
                <Scene
                    key="playerCreate"
                    component={PlayerCreate}
                    title="Add a new player"
                />
                <Scene
                    key="playerEdit"
                    component={PlayerEdit}
                    title="Edit a Player"
                />  
            </Scene>
        </Router>        
    );
};

export default RouterComponent;
