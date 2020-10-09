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
          <Team name="Cougars" url="https://mrucougars.com/images/logos/site/site.png" />
          <Button
            mode="outlined"
            onPress={() => {
              const currentScore = team1Score;
              setTeam1Score(currentScore + 1);
            }}
          >
            Score
          </Button>
        </View>

        <View>
          <Team name="Dinos" url="https://content.sportslogos.net/logos/77/2379/full/7465_calgary_dinos-partial-2013.png" />
          <Button
            mode="outlined"
            onPress={() => {
              const currentScore = team2Score;
              setTeam2Score(currentScore + 1);
            }}
          >
            Score
          </Button>
        </View>
      </View>
      <View>
        <Text>
          {team1Score}
          {' '}
          vs.
          {' '}
          {team2Score}
        </Text>
      </View>

    </View>
  );
};

export default Game;
