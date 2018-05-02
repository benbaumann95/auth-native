import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnAN1pQRRwb3aTvA4yVXQJ4Bz-NhfbQEQ',
      authDomain: 'auth entication-867b9.firebaseapp.com',
      databaseURL: 'https://authentication-867b9.firebaseio.com',
      projectId: 'authentication-867b9',
      storageBucket: 'authentication-867b9.appspot.com',
      messagingSenderId: '607945867194'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
