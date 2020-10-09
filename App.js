import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Game from './components/Game.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}
export default App;