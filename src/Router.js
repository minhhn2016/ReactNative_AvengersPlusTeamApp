import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlayerList from './components/PlayerList';
import PlayerCreate from './components/PlayerCreate';
import PlayerEdit from './components/PlayerEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />                
            </Scene>

            <Scene key="main">
                <Scene 
                    onRight={() => Actions.playerCreate()}
                    rightTitle="Add"
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
