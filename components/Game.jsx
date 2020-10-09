import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Team from './Team';

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  colContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
const findWinner = (team1Score, team2Score) => {
  if (team1Score > team2Score) {
    return ('Cougar');
  } if (team1Score < team2Score) {
    return ('Dinos');
  }
  return ('No Winner');
};
const Game = () => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  return (
    <View style={styles.colContainer}>
      <Button
        mode="contained"
        onPress={() => {
          setTeam1Score(0);
          setTeam2Score(0);
        }}
      >
        New Game
      </Button>
      <View style={styles.rowContainer}>
        <View style={{ margin: 15 }}>
          <Team name="Cougars" score={team1Score} setScore={setTeam1Score} url="https://mrucougars.com/images/logos/site/site.png" />

        </View>

        <View>
          <Team name="Dinos" score={team2Score} setScore={setTeam2Score} url="https://content.sportslogos.net/logos/77/2379/full/7465_calgary_dinos-partial-2013.png" />

        </View>
      </View>

      <View>
        <Text>
          Winner is:
          {' '}
          {findWinner(team1Score, team2Score)}
        </Text>
      </View>

    </View>
  );
};

export default Game;
