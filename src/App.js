import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;