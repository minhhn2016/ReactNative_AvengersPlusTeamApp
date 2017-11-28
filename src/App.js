import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD9O6dkd4bWrSW76y4vJEfgzp5eU6ckQZo',
      authDomain: 'avengersplusteamapp.firebaseapp.com',
      databaseURL: 'https://avengersplusteamapp.firebaseio.com',
      projectId: 'avengersplusteamapp',
      storageBucket: 'avengersplusteamapp.appspot.com',
      messagingSenderId: '162530582400'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
