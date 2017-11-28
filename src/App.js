import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
