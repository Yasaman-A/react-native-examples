import React from 'react';
import { StyleSheet, View } from 'react-native';
import Team from './Team';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Game = () => (
  <View style={styles.container}>
    <Team name="Cougar" url="https://mrucougars.com/images/logos/site/site.png" />
    <Team name="Dinos" url="https://content.sportslogos.net/logos/77/2379/full/7465_calgary_dinos-partial-2013.png" />
  </View>
);

export default Game;
